"use client";

interface RegisterFormProps {
  onClose: () => void;
  switchToLogin: () => void; // 🔑 add this
}

export default function RegisterForm({ onClose, switchToLogin }: RegisterFormProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 relative shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Full Name" className="border p-2 rounded" />
          <input type="email" placeholder="Email" className="border p-2 rounded" />
          <input type="password" placeholder="Password" className="border p-2 rounded" />
          <button type="submit" className="bg-green-500 text-white py-2 rounded mt-2">Register</button>
        </form>

        <p className="text-sm mt-3">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={switchToLogin} // 🔑 call parent function
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
