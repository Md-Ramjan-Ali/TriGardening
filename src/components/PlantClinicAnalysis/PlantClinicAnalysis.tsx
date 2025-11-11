import Image from "next/image";
import { FaCamera } from "react-icons/fa";

export default function PlantClinicAnalysis () {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left content */}
        <div className="lg:w-2/3 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2D5016] mb-4">
            Plant Clinic Analysis
          </h2>
          <p className="text-[#000000] mb-8 leading-relaxed">
            Upload a photo of your plant and get instant AI-powered diagnosis
            with treatment recommendations from our experts
          </p>
          <button className="flex items-center justify-center gap-3 bg-[#7A9B57] hover:bg-green-800 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 mx-auto md:mx-0">
            <FaCamera className="text-lg" />
            Diagnose Your Plant
          </button>
        </div>

        {/* Right image */}
        <div className=" lg:w-1/3 flex justify-end">
          <div className="w-64 h-64 relative rounded-2xl overflow-hidden">
            <Image
              src="/images/plantClinic.jpg" 
              alt="Plant leaves"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
