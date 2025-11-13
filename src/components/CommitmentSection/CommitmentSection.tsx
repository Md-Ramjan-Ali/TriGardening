import React from 'react';
import Image from 'next/image';

interface CommitmentItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const commitmentItems: CommitmentItem[] = [
  {
    id: 1,
    image: "/images/commitment (1).png",
    title: "Plant Clinic Analysis",
    description: "Get expert diagnosis for plant problems with our comprehensive AI analysis service. Upload photos and receive detailed treatment plans."
  },
  {
    id: 2,
    image: "/images/commitment (2).png",
    title: "Expert Blog Content",
    description: "Access weekly articles, seasonal guides, and in-depth tutorials written by our certified horticulturists and plant specialists."
  },
  {
    id: 3,
    image: "/images/commitment (3).png",
    title: "Satisfaction Guarantee",
    description: "We stand behind our advice and products. If you're not completely satisfied, we'll work with you until we find the right solution."
  }
];

const CommitmentSection = () => {
  return (
    <section className="py-16 px-4 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-[#2D5016] mb-4">
            Our Commitment to You
          </h2>
          <p className="text-[#2D5016] text-lg max-w-3xl mx-auto leading-relaxed">
            We are dedicated to providing you with the knowledge, tools, and support needed for gardening success
          </p>
        </div>

        {/* Commitment Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {commitmentItems.map((item) => (
            <div
              key={item.id}
              className="text-center group"
            >
              {/* Icon Container */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <div className="">
                    <Image src={item.image} width={48} height={48} alt={item.title} />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#000000] mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#000000] leading-relaxed max-w-sm mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;