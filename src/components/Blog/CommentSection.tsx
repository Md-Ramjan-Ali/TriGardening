import Image from "next/image";

export default function CommentSection() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mt-10">
      <h3 className="text-lg font-semibold mb-3">Comments</h3>
      <textarea
        placeholder="Write your comment..."
        className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-green-600 outline-none"
      />
      <button className="mt-3 bg-[#2D5016] text-white px-6 py-2 rounded-md font-medium hover:bg-[#3b6a20]">
        Submit
      </button>

      <div className="mt-6">
        <div className="flex items-start gap-3">
          <Image
            src="/images/user.png"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-medium text-gray-800">Istmita Chowdhury</h4>
            <p className="text-gray-600 text-sm mt-1">
              এই ব্লগপোস্টটি খুবই উপকারী। আমার ঘরের গাছের যত্ন নেওয়ার টিপসগুলো
              একদম সহজভাবে বোঝানো হয়েছে।
            </p>
            <p className="text-xs text-gray-400 mt-1">4 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
