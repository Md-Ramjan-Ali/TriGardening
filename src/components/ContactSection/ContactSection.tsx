"use client";
import React, { useState } from 'react';
import { Phone, Facebook, MessageCircle } from 'lucide-react';

interface ContactInfo {
  id: number;
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo: ContactInfo[] = [
  {
    id: 1,
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "01712-452342",
    link: "tel:01712452342"
  },
  {
    id: 2,
    icon: <Facebook className="w-6 h-6" />,
    label: "Facebook Page",
    value: "fb.com/gardening.tri",
    link: "/blog"
  },
  {
    id: 3,
    icon: <MessageCircle className="w-6 h-6" />,
    label: "Whatsapp",
    value: "01712-452342",
    link: "/blog"
  }
];

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill all fields');
      return;
    }
    console.log('Message sent:', formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D5016] mb-4">
            Get In Touch
          </h2>
          <p className="text-[#2D5016] text-lg max-w-2xl mx-auto">
            Have questions? We are here to help you grow your gardening knowledge
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                {/* Icon Container */}
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-[#7A9B57] rounded-full flex items-center justify-center group-hover:bg-[#7A9B57] transition-all duration-300 group-hover:scale-110 shadow-md">
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#2D5016] mb-1">
                    {info.label}
                  </h3>
                  <p className="text-[#2D5016] text-sm group-hover:text-green-600 transition-colors">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="space-y-5">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#7A9B57] hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;