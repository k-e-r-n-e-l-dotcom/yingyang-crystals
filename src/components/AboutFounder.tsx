import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import GlowButton from './GlowButton';

interface AboutFounderProps {
  onBookDiscovery: () => void;
}

export default function AboutFounder({ onBookDiscovery }: AboutFounderProps) {
  const credentials = [
    'Certified Numerologist',
    'Certified Tarot Reader',
    'Reiki Grandmaster',
    'Crystal Specialist',
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/30 to-neon/30 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <img
                src="/madhuri_healing.jpeg"
                alt="Madhuri - Spiritual Guide and Healer"
                className="relative rounded-3xl w-full aspect-[3/4] object-cover glass-strong border-2 border-gold/30 shadow-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-strong rounded-3xl p-6 md:p-8 lg:p-12 border border-gold/20">
              <motion.div
                className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4 md:mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Sparkles className="w-4 h-4 text-neon" />
                <span className="text-sm text-gray-300">Meet Your Guide</span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                Bridging Ancient Wisdom{' '}
                <span className="text-gold text-glow-gold">with Modern Psychology</span>
              </h2>

              <p className="text-lg md:text-xl text-neon font-semibold mb-6 md:mb-8">
                Your Guide to Clarity, Healing, and Abundance
              </p>

              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  My approach focuses on healing the whole self—body, mind, and spirit.
                  Every reading is personalized, compassionate, and rooted in authenticity.
                  Whether you're seeking answers, healing, or transformation, you're in a safe space.
                </p>

                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  I blend the timeless wisdom of Vedic Numerology and Vastu with transformative practices
                  like Reiki energy healing and Neuro-Linguistic Programming. This unique combination
                  creates powerful breakthroughs that honor both ancient traditions and modern science.
                </p>
              </div>

              <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-gold flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-200 font-medium">{credential}</span>
                  </motion.div>
                ))}
              </div>

              <div className="relative mb-6 md:mb-8">
                <div className="text-2xl md:text-3xl font-display text-gold italic">
                  ~ Madhuri
                </div>
              </div>

              <GlowButton onClick={onBookDiscovery} size="lg" className="w-full sm:w-auto">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Book a Discovery Session</span>
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
