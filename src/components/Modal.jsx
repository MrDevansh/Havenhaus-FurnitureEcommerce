// src/components/Modal.jsx
import React from "react";

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-full max-w-lg mx-4 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#0D9488] text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
      <style>
        {`
        .animate-fadeIn { animation: fadeIn .2s ease; }
        @keyframes fadeIn { 0%{ transform: scale(.96); opacity:0 } 100%{ transform: scale(1); opacity:1} }
        `}
      </style>
    </div>
  );
};

export default Modal;
