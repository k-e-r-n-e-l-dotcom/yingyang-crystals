import { motion } from 'framer-motion';
import { Sparkles, Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="about" className="relative py-16 pb-24 md:pb-16 border-t border-white/10 bg-black/80 backdrop-blur-md">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-purple-900/20 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* COLUMN 1: BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-display font-bold text-white">YingYang Crystals</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Guiding souls toward spiritual awakening, emotional healing, and conscious living with authenticity and compassion.
            </p>
          </motion.div>

          {/* COLUMN 2: SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-display font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {['Vedic Numerology', 'Tarot Card Reading', 'Kundli Analysis', 'Reiki Healing', 'NLP Coaching', 'One on One Counselling'].map(
                (service) => (
                  <li key={service}>
                    <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors">
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* COLUMN 3: QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-display font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#shop" className="text-gray-400 hover:text-amber-400 transition-colors">Crystal Shop</a></li>
              <li><a href="#community" className="text-gray-400 hover:text-amber-400 transition-colors">Community</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</a></li>
              <li>
                <a
                  href="https://wa.me/918218803183?text=Hi%2C%20I%20have%20a%20question"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </motion.div>

          {/* COLUMN 4: CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-display font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <a
                  href="https://wa.me/918218803183?text=Hi%2C%20I%27m%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  +91 8218803183
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Instagram className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <a
                  href="https://www.instagram.com/reiki_spiritual_healer?igsh=MWtzZjI3cDk4Mzd3OA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  @reiki_spiritual_healer
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span>India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Copyright & Custom Badge */}
        <motion.div
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

            {/* Left: Copyright */}
            <div className="text-gray-400 text-center md:text-left order-2 md:order-1">
              <p>© {new Date().getFullYear()} <span className="text-white font-semibold">YingYang Crystals & Services</span>.</p>
              <p className="text-xs mt-1 opacity-60">All rights reserved.</p>
            </div>

            {/* Right: Custom Message */}
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2.5 rounded-full border border-white/10 shadow-[0_0_15px_rgba(168,85,247,0.15)] order-1 md:order-2">
              <span className="text-purple-200 font-medium tracking-wide text-xs sm:text-sm whitespace-nowrap">
                Made with love in the <span className="text-amber-400 font-bold">Land of Spirituality</span> 🕉️
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </footer>
  );
}