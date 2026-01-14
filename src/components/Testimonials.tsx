import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      rating: 5,
      text: 'The numerology reading was mind-blowing! She accurately predicted my career change and the timing was spot on. Within 2 months, I got my dream job. Forever grateful!',
      service: 'Numerology Reading',
    },
    {
      id: 2,
      name: 'Rahul Mehta',
      location: 'Bangalore, India',
      rating: 5,
      text: 'The Reiki healing session was transformative. I felt energy blocks releasing and my chronic anxiety disappeared. After 5 years of struggling, I finally found peace.',
      service: 'Reiki Healing',
    },
    {
      id: 3,
      name: 'Anjali Patel',
      location: 'Delhi, India',
      rating: 5,
      text: 'Her tarot reading revealed truths I was avoiding. The guidance helped me make life-changing decisions about my relationship. Now I am happily married to my soulmate!',
      service: 'Tarot Reading',
    },
    {
      id: 4,
      name: 'Vikram Singh',
      location: 'Pune, India',
      rating: 5,
      text: 'My business was struggling for years. After the Kundli analysis and suggested remedies, things turned around completely. Revenue tripled in 6 months. Absolutely incredible!',
      service: 'Kundli Analysis',
    },
    {
      id: 5,
      name: 'Sneha Reddy',
      location: 'Hyderabad, India',
      rating: 5,
      text: 'The NLP coaching broke my self-limiting beliefs. I went from being stuck to achieving goals I never thought possible. She is a true life transformer!',
      service: 'NLP Life Coaching',
    },
    {
      id: 6,
      name: 'Arjun Kapoor',
      location: 'Chennai, India',
      rating: 5,
      text: 'The Black Tourmaline crystal she recommended changed everything. Negative energy cleared instantly and I feel protected. My entire family uses her crystals now!',
      service: 'Crystal Healing',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon rounded-full blur-3xl"></div>
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
            <Star className="w-5 h-5 text-gold fill-gold" />
            <span className="text-gray-200 font-semibold">Real Stories, Real Transformations</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Hear From Our <span className="text-gold text-glow-gold">Happy Souls</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands who have transformed their lives through our spiritual guidance and healing services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-strong rounded-2xl p-8 border border-gold/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/20 to-neon/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <Quote className="w-10 h-10 text-gold/40 mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>

                <p className="text-gray-200 leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>

                <div className="pt-6 border-t border-white/10">
                  <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                  <p className="text-neon text-sm font-semibold mt-1">{testimonial.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="glass-strong rounded-3xl p-10 max-w-4xl mx-auto border border-gold/20">
            <div className="flex flex-wrap justify-center gap-12 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-gold text-glow-gold mb-2">500+</div>
                <div className="text-gray-300 font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-neon text-glow-purple mb-2">5.0</div>
                <div className="text-gray-300 font-medium">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gold text-glow-gold mb-2">98%</div>
                <div className="text-gray-300 font-medium">Satisfaction Rate</div>
              </div>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              Be the next success story. Your transformation awaits.
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
