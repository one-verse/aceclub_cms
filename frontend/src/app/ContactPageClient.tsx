"use client";

import React, { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";

interface Props {
  isModelShow: boolean;
  onClose: () => void;
}

const ContactPageClient: React.FC<Props> = ({
  isModelShow,
  onClose,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isModelShow);

  // Sync with parent
  useEffect(() => {
    setIsModalOpen(isModelShow);
  }, [isModelShow]);

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClose}
    >
      <div
        className="bg-white p-6 rounded shadow-lg w-full max-w-[40rem] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>

        <ContactForm />

        <button
          onClick={handleClose}
          className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ContactPageClient;
