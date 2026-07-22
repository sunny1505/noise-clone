import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function AuthModal({ isOpen, onClose }) {

  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

      <div className="relative w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden">

        {/* Close Button */}

        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-2xl hover:text-red-500 transition"
        >
          <FaTimes />
        </button>

        {/* Header */}

        <div className="border-b">

          <div className="flex">

            <button
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-5 font-semibold transition ${
                isLogin
                  ? "border-b-2 border-black text-black"
                  : "text-gray-400"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-5 font-semibold transition ${
                !isLogin
                  ? "border-b-2 border-black text-black"
                  : "text-gray-400"
              }`}
            >
              Register
            </button>

          </div>

        </div>

        {/* Body */}

        <div className="p-8">

          {isLogin ? (

            <LoginModal
              switchToRegister={() => setIsLogin(false)}
              closeModal={onClose}
            />

          ) : (

            <RegisterModal
              switchToLogin={() => setIsLogin(true)}
              closeModal={onClose}
            />

          )}

        </div>

      </div>

    </div>

  );

}

export default AuthModal;