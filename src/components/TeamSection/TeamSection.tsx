import { teamMembers } from '@/data/aboutPageData'
import Image from 'next/image'
import React from 'react'

export default function TeamSection() {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D5016] mb-4">
            Meet Our Gardening Experts
          </h2>
          <p className="text-[#2D5016] text-lg max-w-3xl mx-auto leading-relaxed">
            Our passionate team of horticulturists and plant specialists brings years of combined experience to help your garden flourish
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#F5F5DC] rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Profile Image */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={member.image}
                      width={128}
                      height={128}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-[#000000] mb-2">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-[#7A9B57] font-medium mb-4">
                {member.role}
              </p>

              {/* Description */}
              <p className="text-sm text-[#000000] leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
