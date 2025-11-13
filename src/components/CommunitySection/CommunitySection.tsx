import React from 'react';
import { Users, Youtube } from 'lucide-react';
import Image from 'next/image';

interface CommunityOption {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const communityOptions: CommunityOption[] = [
  {
    id: 1,
    icon: <Users className="w-12 h-12" />,
    title: "Facebook Community Forum",
    description: "Connect with 10,000+ gardeners across the Bangladesh. Ask questions, share tips, and celebrate your growing journey."
  },
  {
    id: 2,
    icon: <Youtube className="w-12 h-12" />,
    title: "Trigardening Youtube Channel",
    description: "Join us on YouTube for quick gardening tips, tricks, and guides to grow smarter."
  }
];

const CommunitySection = () => {
  return (
    <section className="py-16 px-4 bg-[#7A9B57]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4">
            Join Our TriGardening Community
          </h2>
          <p className="text-[#FFFFFF] text-lg max-w-3xl mx-auto leading-relaxed">
            We are dedicated to providing you with the knowledge, tools, and support needed for gardening success
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Community Options */}
          <div className="space-y-8">
            {communityOptions.map((option) => (
              <div
                key={option.id}
                className="flex gap-6 items-start group"
              >
                {/* Icon Container */}
                <div className="shrink-0">
                  <div className="w-16 h-16 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    <div className="text-white">
                      {option.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-white hover:bg-gray-100 text-[#2D5016] font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Join Our Community
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/CommunityImg.jpg"
                  width={400}
                  height={300}
                  alt="Garden Path"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-green-400/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;