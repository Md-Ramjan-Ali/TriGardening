import Image from 'next/image';
import React from 'react';

const TriGardeningHero = () => {
  return (
    <div className="relative min-h-[88vh] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/trigardannigHero.jpeg"
          width={800}
          height={500}
          alt="Greenhouse"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[88vh] px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Trusted Partner in<br />
            Gardening
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
            Cultivating expertise, growing communities, and nurturing your<br className="hidden md:block" />
            green dreams for over a decade
          </p>

          {/* CTA Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Meet Our Team
          </button>
        </div>
      </div>

      {/* Optional: Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/20 to-transparent"></div>
    </div>
  );
};

export default TriGardeningHero;