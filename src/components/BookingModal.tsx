import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Calendar, Clock } from 'lucide-react';
import GlowButton from './GlowButton';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    type: 'numerology' | 'tarot' | 'kundli' | 'reiki' | 'nlp' | 'counseling';
  } | null;
}

export default function BookingModal({ isOpen, onClose, service }: BookingModalProps) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [timeOfBirth, setTimeOfBirth] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setName('');
      setDob('');
      setTimeOfBirth('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const generateWhatsAppMessage = () => {
    if (!service) return '';

    const phoneNumber = '918218803183';
    let message = '';

    switch (service.type) {
      case 'numerology':
        message = `Hi, I'm ${name}. DOB: ${dob}. Interested in Numerology analysis.`;
        break;
      case 'tarot':
        message = `Hi, I'm ${name}. Seeking clarity. I would like to book a Tarot session.`;
        break;
      case 'kundli':
        message = `Namaste, I'm ${name}. DOB: ${dob}${timeOfBirth ? `, Time: ${timeOfBirth}` : ''}. Need detailed Vedic Kundli analysis.`;
        break;
      case 'reiki':
        message = `Hi, I'm ${name}. I am feeling low energy and inquiring about Reiki healing.`;
        break;
      case 'nlp':
        message = `Hi, I'm ${name}. I want to reprogram my mindset. Tell me about NLP coaching.`;
        break;
      case 'counseling':
        message = `Hi, I'm ${name}. I would like to book a 1-on-1 Counseling session.`;
        break;
    }

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter your name');
      return;
    }

    const requiresDOB = ['numerology', 'kundli'].includes(service?.type || '');
    if (requiresDOB && !dob) {
      alert('Please enter your date of birth');
      return;
    }

    const whatsappUrl = generateWhatsAppMessage();
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const requiresDOB = service?.type === 'numerology' || service?.type === 'kundli';
  const showTimeOfBirth = service?.type === 'kundli';

  return (
    <AnimatePresence>
      {isOpen && service && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pointer-events-none overflow-y-auto">
            <motion.div
              className="glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 max-w-2xl w-full border-2 border-gold/30 shadow-2xl pointer-events-auto my-4"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
            >
              <div className="flex justify-between items-start mb-5 sm:mb-6 gap-2">
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gold text-glow-gold mb-2">
                    Begin Your Journey
                  </h2>
                  <p className="text-sm sm:text-base text-gray-300">
                    Please provide details for your energy chart
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="glass-strong p-2 rounded-full hover:glow-gold transition-all duration-300 flex-shrink-0"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-neon/20">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-neon" />
                  <h3 className="text-base sm:text-xl font-display font-bold">Selected Service</h3>
                </div>
                <p className="text-lg sm:text-2xl text-gold font-semibold">{service.title}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full glass-strong rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-500 border border-white/10 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {requiresDOB && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold" />
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full glass-strong rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-500 border border-white/10 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                      required
                    />
                  </div>
                )}

                {showTimeOfBirth && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-neon" />
                      Time of Birth (Optional)
                    </label>
                    <input
                      type="time"
                      value={timeOfBirth}
                      onChange={(e) => setTimeOfBirth(e.target.value)}
                      className="w-full glass-strong rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-500 border border-white/10 focus:border-neon/50 focus:outline-none focus:ring-2 focus:ring-neon/20 transition-all"
                    />
                    <p className="text-xs text-gray-400 mt-2">
                      Providing birth time enables more accurate planetary analysis
                    </p>
                  </div>
                )}

                <motion.div
                  className="pt-2 sm:pt-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
                  >
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span>Analyze My Chart Now</span>
                  </button>
                </motion.div>
              </form>

              <p className="text-center text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6">
                Your information is confidential and will only be used for your reading
              </p>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
