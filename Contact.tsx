import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      // Basic validation simulation (checking if fields are filled)
      if (formData.name && formData.email && formData.message) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        // Reset success message after 5 seconds to allow sending another message
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#053b23] relative overflow-hidden">
       {/* Background decorations */}
       <div className="absolute top-0 left-0 w-96 h-96 bg-[#00d66b]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
       <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#022c19] rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

       <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div>
              <h2 className="font-display text-4xl font-bold text-white mb-4">
                Kontakt Os
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Har du brug for et uforpligtende tilbud, eller har du spørgsmål til vores ydelser? Udfyld formularen eller kontakt os direkte – vi sidder klar til at hjælpe dig.
              </p>
            </div>

            <div className="space-y-8 pt-4">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-[#00d66b]/10 border border-[#00d66b]/20 flex items-center justify-center shrink-0 group-hover:bg-[#00d66b] group-hover:text-[#022c19] transition-all duration-300">
                  <Phone className="text-[#00d66b] group-hover:text-[#022c19] w-6 h-6 transition-colors" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Ring til os</h3>
                  <p className="text-gray-400 text-sm mb-2">Man-Fre: 08:00 - 16:00</p>
                  <a href="tel:22651996" className="text-[#00d66b] hover:text-white transition-colors text-xl font-display font-bold">22 65 19 96</a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-[#00d66b]/10 border border-[#00d66b]/20 flex items-center justify-center shrink-0 group-hover:bg-[#00d66b] group-hover:text-[#022c19] transition-all duration-300">
                  <Mail className="text-[#00d66b] group-hover:text-[#022c19] w-6 h-6 transition-colors" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Send en mail</h3>
                  <p className="text-gray-400 text-sm mb-2">Vi svarer indenfor 24 timer</p>
                  <a href="mailto:lythejendomsservice@gmail.com" className="text-[#00d66b] hover:text-white transition-colors text-xl font-display font-bold break-all">lythejendomsservice@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-[#00d66b]/10 border border-[#00d66b]/20 flex items-center justify-center shrink-0 group-hover:bg-[#00d66b] group-hover:text-[#022c19] transition-all duration-300">
                  <MapPin className="text-[#00d66b] group-hover:text-[#022c19] w-6 h-6 transition-colors" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Vi dækker</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Midtjylland og Storkøbenhavn
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side - Glassmorphism */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative animate-in fade-in slide-in-from-right-8 duration-700">
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Navn</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d66b] focus:ring-1 focus:ring-[#00d66b] transition-all"
                        placeholder="Dit navn"
                      />
                   </div>
                   <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-300 ml-1">Telefon</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d66b] focus:ring-1 focus:ring-[#00d66b] transition-all"
                        placeholder="Dit nummer"
                      />
                   </div>
                </div>

                <div className="space-y-2">
                   <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
                   <input 
                     type="email" 
                     id="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     required
                     className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d66b] focus:ring-1 focus:ring-[#00d66b] transition-all"
                     placeholder="din@email.dk"
                   />
                </div>

                <div className="space-y-2">
                   <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Besked</label>
                   <textarea 
                     id="message"
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     required
                     rows={5}
                     className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d66b] focus:ring-1 focus:ring-[#00d66b] transition-all resize-none"
                     placeholder="Hvad kan vi hjælpe dig med?"
                   ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading' || status === 'success'}
                  className={`w-full py-4 rounded-xl font-bold text-[#022c19] transition-all duration-300 flex items-center justify-center gap-2 text-lg ${
                    status === 'success' 
                      ? 'bg-[#00d66b] cursor-default' 
                      : 'bg-[#00d66b] hover:bg-white hover:scale-[1.02] shadow-[0_0_20px_rgba(0,214,107,0.2)]'
                  }`}
                >
                  {status === 'loading' ? (
                    <span className="w-6 h-6 border-2 border-[#022c19] border-t-transparent rounded-full animate-spin"></span>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle2 className="w-6 h-6" />
                      Besked Modtaget!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Besked
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p className="text-center text-[#00d66b] text-sm animate-in fade-in">
                    Tak for din henvendelse. Vi vender tilbage hurtigst muligt.
                  </p>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm justify-center animate-in fade-in">
                    <AlertCircle className="w-4 h-4" />
                    <span>Der skete en fejl. Tjek venligst felterne og prøv igen.</span>
                  </div>
                )}
             </form>
          </div>
       </div>
    </section>
  );
};

export default Contact;