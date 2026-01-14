import { motion } from 'framer-motion';
import { Sparkles, Moon, Star } from 'lucide-react';
import GlowButton from './GlowButton';

export default function Hero() {
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-900">
      
      {/* 1. Dynamic Background (Fixes overlap by sitting behind) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 z-10" />
        <img
          src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=60&w=1920"
          alt="Cosmic Background"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* 2. Floating Icons (Preserved from your code) */}
      <motion.div
        className="absolute top-20 left-4 sm:left-10 text-yellow-400 opacity-20 hidden sm:block"
        animate={floatingAnimation}
      >
        <Star className="w-8 sm:w-12 h-8 sm:h-12" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-4 sm:right-10 text-purple-400 opacity-20 hidden sm:block"
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
      >
        <Moon className="w-12 sm:w-16 h-12 sm:h-16" />
      </motion.div>

      {/* 3. Main Content (Z-10 ensures it sits ON TOP of background) */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8"
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium text-slate-300">Guided by Ancient Wisdom</span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight px-4">
          Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">Destiny</span>
        </h1>

        {/* THE MYSTIC UNIVERSE BAR (Fixed: Under the headline) */}
        <div className="relative w-full max-w-lg mx-auto h-12 md:h-16 mb-8 rounded-full overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(147,51,234,0.3)]">
           <img
             src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=60&w=800"
             alt="Galaxy"
             className="absolute inset-0 w-full h-full object-cover animate-pulse opacity-80"
             loading="lazy"
             decoding="async"
           />
           <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
             <span className="text-white font-medium tracking-widest text-xs md:text-sm uppercase">& Heal Your Energy</span>
           </div>
        </div>

        {/* Description */}
        <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed px-4">
          Experience transformative spiritual guidance through Vedic Numerology, Tarot Reading, Reiki Healing, and Sacred Crystals.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4">
          <GlowButton
            href="https://wa.me/918218803183?text=Hi%2C%20I%27m%20ready%20to%20unlock%20my%20destiny"
            size="lg"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Get Personal Guidance</span>
          </GlowButton>

          <GlowButton
            href="#shop"
            variant="purple"
            size="lg"
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Explore Crystals</span>
          </GlowButton>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 border-t border-white/10 pt-8 px-4">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-yellow-400">500+</div>
            <div className="text-xs sm:text-sm text-slate-400">Lives Transformed</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-purple-400">5.0</div>
            <div className="text-xs sm:text-sm text-slate-400">Average Rating</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-yellow-400">1000+</div>
            <div className="text-xs sm:text-sm text-slate-400">Readings Done</div>
          </div>
        </div>

      </div>
    </section>
  );
}