import { motion } from 'framer-motion';
import { Star, Users, Award, Heart } from 'lucide-react';

export default function TrustIndicators() {
  const indicators = [
    { icon: Star, text: 'Trusted by 500+ Seekers' },
    { icon: Users, text: '1000+ Readings Completed' },
    { icon: Award, text: '5-Star Rated Service' },
    { icon: Heart, text: 'Transforming Lives Through Energy' },
    { icon: Star, text: 'Trusted by 500+ Seekers' },
    { icon: Users, text: '1000+ Readings Completed' },
    { icon: Award, text: '5-Star Rated Service' },
    { icon: Heart, text: 'Healing Hearts Since 2018' },
  ];

  return (
    <div className="relative overflow-hidden py-8 glass-strong border-y border-white/10">
      <div className="flex gap-8 animate-scroll">
        {indicators.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 px-6 whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <item.icon className="w-5 h-5 text-gold" />
            <span className="text-gray-300 font-medium">{item.text}</span>
            {index < indicators.length - 1 && (
              <Star className="w-4 h-4 text-gold ml-3 fill-gold" />
            )}
          </motion.div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
