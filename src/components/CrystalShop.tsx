import React from 'react';
const crystals = [
  {
    name: "Amethyst",
    energy: "Peace & Intuition",
    desc: "Invite divine tranquility into your life! This magnificent stone awakens your inner wisdom and creates a protective sanctuary of peace around you.",
    color: "bg-purple-900/40 border-purple-500/30"
  },
  {
    name: "Rose Quartz",
    energy: "Unconditional Love",
    desc: "Open your heart to infinite love and joy! This beautiful crystal radiates pure loving energy, attracting harmonious relationships and deep self-love.",
    color: "bg-pink-900/40 border-pink-500/30"
  },
  {
    name: "Citrine",
    energy: "Wealth & Abundance",
    desc: "Magnify your prosperity magnetism! This radiant gem attracts wealth, success, and golden opportunities while boosting your confidence and joy.",
    color: "bg-yellow-900/40 border-yellow-500/30"
  },
  {
    name: "Jade",
    energy: "Harmony & Balance",
    desc: "Welcome prosperity and perfect balance! This precious stone attracts good fortune, enhances emotional harmony, and accelerates your spiritual evolution.",
    color: "bg-green-900/40 border-green-500/30"
  },
  {
    name: "Pyrite",
    energy: "Manifestation & Wealth",
    desc: "The ultimate Money Magnet. It attracts cash flow, boosts career growth, and shields your finances from negative energy.",
    color: "bg-amber-900/40 border-amber-500/30"
  },
  {
    name: "Aventurine",
    energy: "Luck & Opportunity",
    desc: "Unlock limitless possibilities! This lucky stone opens doors to new opportunities, attracts prosperity, and brings positive outcomes to all your endeavors.",
    color: "bg-emerald-900/40 border-emerald-500/30"
  },
  {
    name: "Black Tourmaline",
    energy: "Protection",
    desc: "Create your energetic fortress! This supreme guardian stone transforms negative energy into positive vibrations while keeping you grounded and secure.",
    color: "bg-gray-800/60 border-gray-500/30"
  },
  {
    name: "Tiger's Eye",
    energy: "Courage & Confidence",
    desc: "Unleash your inner champion! This empowering stone ignites your courage, sharpens your clarity, and helps you achieve your most ambitious dreams.",
    color: "bg-orange-900/40 border-orange-500/30"
  },
  {
    name: "Lapis Lazuli",
    energy: "Wisdom & Truth",
    desc: "Awaken your highest wisdom! This celestial stone opens your third eye, amplifies your intellect, and guides you to your deepest truth.",
    color: "bg-blue-900/40 border-blue-500/30"
  }
];
const CrystalShop = () => {
  const handleWhatsAppInquiry = (crystalName: string) => {
    const phoneNumber = "918218803183";
    const message = `Hello, I am interested in buying the ${crystalName}. Please send me photos and price details.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
    <section id="shop" className="py-16 md:py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4">
            Crystal Energy Shop
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto px-4 mb-4">
            We hand-select high vibration crystals. Click below to inquire about current stock and pricing on WhatsApp.
          </p>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border-2 border-amber-400 rounded-xl backdrop-blur-sm">
            <p className="text-lg md:text-xl font-bold text-amber-300">
              ✨ 100% AFFORDABLE & ORIGINAL CRYSTALS ✨
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {crystals.map((crystal, index) => (
            <div
              key={index}
              className={`relative p-4 sm:p-6 md:p-8 rounded-2xl border backdrop-blur-sm ${crystal.color} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{crystal.name}</h3>
                  <span className="inline-block mt-2 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-white/10 rounded-full">
                    {crystal.energy}
                  </span>
                </div>
                {/* Decorative Sparkle */}
                <div className="text-2xl md:text-3xl animate-pulse">✦</div>
              </div>
              <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 border-l-2 border-white/20 pl-3 md:pl-4">
                {crystal.desc}
              </p>
              <button
                onClick={() => handleWhatsAppInquiry(crystal.name)}
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-colors shadow-lg shadow-green-900/20 text-sm sm:text-base"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>For More Info WhatsApp</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CrystalShop;