import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Mic, MicOff, CalendarCheck, CheckCircle2, AlertCircle } from 'lucide-react';

type BookingStatus = 'idle' | 'listening' | 'processing' | 'success' | 'error';

const VoiceBooking: React.FC = () => {
  const [status, setStatus] = useState<BookingStatus>('idle');
  const [transcript, setTranscript] = useState('');
  const [isSupported, setIsSupported] = useState(true);
  const recognitionRef = useRef<any>(null);

  // Manual fallback form state
  const [showManualForm, setShowManualForm] = useState(false);
  const [manualTask, setManualTask] = useState('');
  const [manualDate, setManualDate] = useState('');

  // Check browser support on mount
  useEffect(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setIsSupported(false);
      setShowManualForm(true);
    }
  }, []);

  const startListening = useCallback(() => {
    if (!isSupported) return;

    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;

      recognition.lang = 'da-DK';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setStatus('listening');
        setTranscript('');
      };

      recognition.onresult = (event: any) => {
        const text = event.results[0][0].transcript;
        setTranscript(text);
        processCommand(text);
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error", event.error);
        setStatus('error');
      };

      recognition.onend = () => {
        // If we didn't go to processing (e.g. silence), reset to idle or keep error
        setStatus((prev) => (prev === 'listening' ? 'idle' : prev));
      };

      recognition.start();
    } catch (e) {
      console.error(e);
      setStatus('error');
    }
  }, [isSupported]);

  const processCommand = (text: string) => {
    setStatus('processing');
    
    // Simulate Processing Latency
    setTimeout(() => {
      // Very basic check logic
      const lowerText = text.toLowerCase();
      if (lowerText.includes('book') || lowerText.includes('tid') || lowerText.includes('aftale') || lowerText.length > 5) {
        setStatus('success');
        downloadIcsFile(text);
      } else {
        setStatus('error');
      }
    }, 2000);
  };

  const downloadIcsFile = (summary: string) => {
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 1); // Tomorrow
    eventDate.setHours(10, 0, 0);

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Lyth Ejendomsservice//NONSGML v1.0//EN
BEGIN:VEVENT
UID:${Date.now()}@lyth.dk
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${new Date(eventDate.getTime() + 60*60*1000).toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:Lyth Ejendomsservice: ${summary}
DESCRIPTION:Automatisk booking.
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'booking.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (manualTask && manualDate) {
      setStatus('success');
      downloadIcsFile(`${manualTask} den ${manualDate}`);
    }
  };

  return (
    <section id="booking" className="py-20 px-6 bg-gradient-to-r from-[#022c19] to-[#053b23] relative overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d66b]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0a4f32] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Side */}
        <div className="space-y-6">
          <h2 className="font-display text-4xl font-bold text-white">
            Book tid med <br />
            <span className="text-[#00d66b]">Din Stemme</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Spring telefonkøen over. Indtal blot, hvad du har brug for, og hvornår vi skal komme. Systemet tjekker kalenderen og bekræfter med det samme ved at sende dig en kalenderinvitation.
          </p>
          
          <ul className="space-y-4 pt-4">
            {['Øjeblikkelig bekræftelse', 'Integreret kalendersystem', 'Altid åbent (24/7)'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-200">
                <div className="w-6 h-6 rounded-full bg-[#00d66b]/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-[#00d66b]" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Voice Interface Card (Glassmorphism) */}
        <div className="relative">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden transition-all duration-500 hover:border-[#00d66b]/30">
            
            {/* Visualizer Bars */}
            <div className="h-16 flex items-center justify-center gap-2 mb-8">
               {[0.1, 0.2, 0.3, 0.4, 0.5].map((delay, idx) => (
                 <div
                   key={idx}
                   className={`w-2 bg-[#00d66b] rounded-full transition-all duration-300 ${
                     status === 'listening' 
                       ? 'animate-wave h-12' 
                       : status === 'processing' 
                       ? 'h-4 animate-pulse'
                       : 'h-2'
                   }`}
                   style={{ animationDelay: `${delay}s` }}
                 ></div>
               ))}
            </div>

            {/* Status Text */}
            <div className="min-h-[60px] mb-8">
               {status === 'idle' && (
                 <p className="text-xl font-medium text-white">Tryk på mikrofonen for at starte...</p>
               )}
               {status === 'listening' && (
                 <p className="text-xl font-medium text-[#00d66b] animate-pulse">Jeg lytter...</p>
               )}
               {status === 'processing' && (
                 <p className="text-xl font-medium text-gray-300">Behandler din anmodning...</p>
               )}
               {status === 'success' && (
                 <div className="space-y-2">
                   <p className="text-xl font-bold text-[#00d66b]">Aftale registreret!</p>
                   <p className="text-sm text-gray-400">Tjek dine downloads for kalenderfilen.</p>
                 </div>
               )}
               {status === 'error' && (
                 <div className="space-y-2">
                   <p className="text-lg font-bold text-red-400">Jeg forstod det ikke helt.</p>
                   <p className="text-sm text-gray-400">Prøv igen eller brug formularen herunder.</p>
                 </div>
               )}
            </div>

            {/* Main Action Button */}
            {!showManualForm ? (
               <div className="flex flex-col items-center gap-4">
                 <button
                   onClick={startListening}
                   disabled={status === 'processing' || status === 'listening'}
                   className={`w-20 h-20 rounded-full flex items-center justify-center text-[#022c19] transition-all duration-300 ${
                     status === 'listening' 
                       ? 'bg-red-500 scale-110 shadow-[0_0_30px_rgba(239,68,68,0.5)]' 
                       : 'bg-[#00d66b] hover:scale-105 shadow-[0_0_0_0_rgba(0,214,107,0.7)] hover:shadow-[0_0_0_10px_rgba(0,214,107,0)]'
                   }`}
                 >
                   {status === 'listening' ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                 </button>
                 
                 {status === 'error' && (
                    <button 
                      onClick={() => setShowManualForm(true)}
                      className="text-sm text-gray-400 underline hover:text-white mt-2"
                    >
                      Skift til manuel indtastning
                    </button>
                 )}
               </div>
            ) : (
              // Fallback Form
              <form onSubmit={handleManualSubmit} className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                   <input 
                     type="text" 
                     placeholder="Opgave (f.eks. Hækklipning)" 
                     required
                     value={manualTask}
                     onChange={(e) => setManualTask(e.target.value)}
                     className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00d66b] focus:ring-1 focus:ring-[#00d66b]"
                   />
                </div>
                <div>
                   <input 
                     type="date" 
                     required
                     value={manualDate}
                     onChange={(e) => setManualDate(e.target.value)}
                     className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00d66b] focus:ring-1 focus:ring-[#00d66b]"
                   />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#00d66b] text-[#022c19] font-bold py-3 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Bekræft Booking
                </button>
                <button 
                  type="button"
                  onClick={() => { setShowManualForm(false); setStatus('idle'); }}
                  className="text-xs text-gray-500 hover:text-white"
                >
                  Tilbage til stemmestyring
                </button>
              </form>
            )}

            {/* Transcript Display (Debug/Feedback) */}
            {transcript && !showManualForm && (
              <div className="mt-8 p-4 rounded-lg bg-black/20 border border-white/5">
                <p className="text-sm text-gray-400 italic">"{transcript}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceBooking;