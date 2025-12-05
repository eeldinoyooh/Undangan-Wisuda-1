import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, User, Clock } from 'lucide-react';
import { graduationConfig } from '../config/graduation';

interface Wish {
  id: number;
  name: string;
  message: string;
  date: string;
}

export const RSVP: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    message: ''
  });

  const initialWishes: Wish[] = [];

  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch wishes from Google Sheets
  useEffect(() => {
    const fetchWishes = async () => {
      if (graduationConfig.scriptUrl && graduationConfig.scriptUrl.includes('script.google.com')) {
        try {
          const response = await fetch(graduationConfig.scriptUrl);
          const data = await response.json();

          if (data.result === 'success' && Array.isArray(data.data)) {
            // Map Google Sheets data to Wish interface
            const fetchedWishes: Wish[] = data.data.map((item: any, index: number) => ({
              id: index + 2, // Start ID from 2 (1 is admin)
              name: item.name || 'Anonim',
              message: item.message || '',
              date: item.timestamp ? new Date(item.timestamp).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Baru saja'
            })).reverse(); // Show newest first

            // Combine with initial admin wish
            setWishes([...initialWishes, ...fetchedWishes]);
          }
        } catch (error) {
          console.error('Error fetching wishes:', error);
          // Fallback to local storage if fetch fails
          const savedWishes = localStorage.getItem('graduation-wishes');
          if (savedWishes) {
            setWishes(JSON.parse(savedWishes));
          }
        }
      } else {
        // Fallback for demo/local mode
        const savedWishes = localStorage.getItem('graduation-wishes');
        if (savedWishes) {
          setWishes(JSON.parse(savedWishes));
        }
      }
    };

    fetchWishes();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newWish: Wish = {
      id: Date.now(),
      name: form.name || 'Anonim',
      message: form.message,
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    };

    // Optimistic UI update
    const updatedWishes = [newWish, ...wishes];
    setWishes(updatedWishes);
    localStorage.setItem('graduation-wishes', JSON.stringify(updatedWishes));

    // Send to Google Sheets
    if (graduationConfig.scriptUrl && graduationConfig.scriptUrl.includes('script.google.com')) {
      try {
        const formData = new FormData();
        formData.append('timestamp', new Date().toISOString());
        formData.append('name', form.name);
        formData.append('message', form.message);

        await fetch(graduationConfig.scriptUrl, {
          method: 'POST',
          body: formData,
          mode: 'no-cors' // Important for GAS Web App
        });

        // Note: With no-cors we can't check response status, so we assume success if no error thrown
        alert('Ucapan berhasil dikirim dan tersimpan!');
      } catch (error) {
        console.error('Error submitting to Google Sheets:', error);
        alert('Ucapan terkirim secara lokal, namun gagal tersimpan ke server.');
      }
    } else {
      alert('Ucapan berhasil dikirim (Mode Demo/Lokal)!');
    }

    setForm({
      name: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 px-4 bg-[#1a202c]">
      <div className="max-w-2xl mx-auto">
        {/* Form Section */}
        <div className="bg-[#2d3748] p-8 rounded-[3rem] shadow-2xl border-4 border-white ring-1 ring-gray-200 mb-12" data-aos="fade-up">
          <div className="text-center mb-8">
            <MessageCircle className="w-12 h-12 text-[#E6D5B8] mx-auto mb-4" />
            <h2 className="font-script text-3xl text-[#E6D5B8] mb-2">Ucapan & Doa</h2>
            <p className="text-gray-300 text-sm">Berikan ucapan selamat dan doa restu Anda.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#1a202c] border border-white/10 text-white focus:border-[#E6D5B8] focus:ring-1 focus:ring-[#E6D5B8] outline-none transition-all placeholder-gray-500"
                placeholder="Nama Anda"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Ucapan & Doa</label>
              <textarea
                name="message"
                rows={3}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#1a202c] border border-white/10 text-white focus:border-[#E6D5B8] focus:ring-1 focus:ring-[#E6D5B8] outline-none transition-all resize-none placeholder-gray-500"
                placeholder="Tulis ucapan selamat..."
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#E6D5B8] text-[#1a202c] font-bold py-3 rounded-xl hover:bg-[#d4c3a3] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg mt-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <span>Mengirim...</span>
              ) : (
                <>
                  <Send size={18} />
                  Kirim Ucapan
                </>
              )}
            </button>
          </form>
        </div>

        {/* Wishes List Section */}
        <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
          <h3 className="font-script text-3xl text-center text-[#E6D5B8] mb-6">Doa Restu ({wishes.length})</h3>

          <div className="max-h-[500px] overflow-y-auto space-y-4 px-2 scrollbar-hide">
            {wishes.length === 0 ? (
              <p className="text-center text-gray-500 italic">Belum ada ucapan. Jadilah yang pertama mengirim!</p>
            ) : (
              wishes.map((wish) => (
                <div key={wish.id} className="bg-[#2d3748] p-6 rounded-2xl shadow-lg border border-white/10 hover:border-[#E6D5B8]/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1a202c] p-3 rounded-full border border-white/5">
                      <User size={20} className="text-[#E6D5B8]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-[#E6D5B8] text-lg">{wish.name}</h4>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
                        <Clock size={12} />
                        <span>{wish.date}</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed italic">"{wish.message}"</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};