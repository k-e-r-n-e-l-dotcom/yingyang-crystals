import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sparkles, Heart, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const services = [
    'Numerology Reading',
    'Tarot Card Reading',
    'Kundli Analysis',
    'Reiki Healing',
    'NLP Life Coaching',
    'Counseling Session',
    'Crystal Healing',
    'Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !feedbackText.trim() || rating === 0) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('customer_feedback').insert([
        {
          name: name.trim(),
          email: email.trim() || null,
          service: service || null,
          rating,
          feedback_text: feedbackText.trim(),
        },
      ]);

      if (error) throw error;

      setShowSuccess(true);
      setName('');
      setEmail('');
      setService('');
      setRating(0);
      setFeedbackText('');

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 glass-strong px-6 py-3 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="w-5 h-5 text-neon fill-neon animate-pulse" />
            <span className="text-gray-200 font-semibold">Your Voice Matters</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Share Your <span className="text-neon text-glow-purple">Magical Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your feedback helps us serve you better and inspires others on their spiritual journey
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-strong rounded-3xl p-8 md:p-12 border-2 border-gold/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gold/10 to-neon/10 rounded-full blur-3xl"></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Your Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full glass rounded-xl px-6 py-4 text-white placeholder-gray-500 border border-gold/20 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                    placeholder="Enter your name"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full glass rounded-xl px-6 py-4 text-white placeholder-gray-500 border border-gold/20 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Service Experienced (Optional)
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full glass rounded-xl px-6 py-4 text-white border border-gold/20 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all bg-slate-900/50"
                >
                  <option value="" className="bg-slate-900">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-slate-900">
                      {s}
                    </option>
                  ))}
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-semibold text-gray-200 mb-3">
                  Your Rating <span className="text-gold">*</span>
                </label>
                <div className="flex gap-2 justify-center md:justify-start">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-12 h-12 transition-all duration-200 ${
                          star <= (hoveredRating || rating)
                            ? 'text-gold fill-gold drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]'
                            : 'text-gray-600'
                        }`}
                      />
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Your Feedback <span className="text-gold">*</span>
                </label>
                <textarea
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  rows={6}
                  className="w-full glass rounded-xl px-6 py-4 text-white placeholder-gray-500 border border-gold/20 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all resize-none"
                  placeholder="Share your experience with us... How did our service transform your life?"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-gold to-neon text-slate-900 px-8 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-gold/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="w-6 h-6 animate-spin" />
                      Sending Your Magical Feedback...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      Submit Your Feedback
                    </>
                  )}
                </button>
              </motion.div>

              <p className="text-center text-sm text-gray-400 mt-4">
                Thank you for sharing your light! We are truly grateful for your kind words. 🙏✨
              </p>
            </form>
          </div>
        </motion.div>

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="glass-strong rounded-3xl p-12 max-w-md w-full border-2 border-gold/50 shadow-2xl pointer-events-auto text-center"
                initial={{ scale: 0.5, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.5, y: 50 }}
                transition={{ type: 'spring', duration: 0.6 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                >
                  <CheckCircle className="w-20 h-20 text-gold mx-auto mb-6" />
                </motion.div>

                <motion.h3
                  className="text-3xl font-display font-bold text-gold text-glow-gold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Thank You!
                </motion.h3>

                <motion.p
                  className="text-gray-200 text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Your magical feedback has been received. We truly appreciate you taking the time
                  to share your experience with us!
                </motion.p>

                <motion.div
                  className="flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Heart className="w-5 h-5 text-neon fill-neon animate-pulse" />
                  <Sparkles className="w-5 h-5 text-gold animate-pulse" />
                  <Heart className="w-5 h-5 text-neon fill-neon animate-pulse" />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
