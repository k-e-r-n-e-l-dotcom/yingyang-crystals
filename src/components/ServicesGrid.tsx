import React from 'react';

interface ServiceProps {
  onBookService: (service: any) => void;
}

const services = [
  {
    title: "Vedic Numerology",
    type: "numerology",
    icon: "🔢",
    desc: "Unlock the hidden meaning of your birth date and name. Discover your life path number.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Tarot Reading",
    type: "tarot",
    icon: "🃏",
    desc: "Gain clarity on your past, present, and future through the ancient wisdom of Tarot cards.",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Kundli Analysis",
    type: "kundli",
    icon: "⭐",
    desc: "Detailed Vedic numerology with vastu grid analysis to understand your destiny and dashas.",
    color: "from-amber-400 to-orange-500"
  },
  {
    title: "Reiki Healing",
    type: "reiki",
    icon: "✨",
    desc: "Balance your chakras and remove energy blockages with distance or in-person Reiki.",
    color: "from-green-400 to-emerald-600"
  },
  {
    title: "NLP Coaching",
    type: "nlp",
    icon: "🧠",
    desc: "Reprogram your subconscious mind to overcome fears and achieve your goals.",
    color: "from-indigo-500 to-violet-500"
  },
  {
    title: "One on One Counselling",
    type: "counseling",
    icon: "💎",
    desc: "Personalized life path solutions for Health, Career, Finance, and Relationships.",
    color: "from-rose-400 to-red-500"
  }
];

const ServicesGrid: React.FC<ServiceProps> = ({ onBookService }) => {
  return (
    <section id="services" className="py-20 px-4 bg-transparent">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Our Sacred Services
        </h2>
        <p className="text-center text-purple-200 mb-12 max-w-2xl mx-auto">
          Explore our holistic offerings designed to align your energy and illuminate your path.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
            >
              {/* Glowing Top Border */}
              <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r ${service.color}`} />

              <div className="flex flex-col h-full">
                <div className="text-5xl mb-6 bg-white/10 w-20 h-20 rounded-full flex items-center justify-center shadow-inner">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-8 flex-grow leading-relaxed">
                  {service.desc}
                </p>

                <button
                  onClick={() => onBookService(service)}
                  className={`w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r ${service.color} opacity-90 hover:opacity-100 hover:shadow-lg transition-all`}
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;