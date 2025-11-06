import React, { useEffect } from "react";

interface UserAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const UserAdminModal = ({ isOpen, onClose, children }: UserAdminModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with subtle animation */}
      <div
        className="absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content with BRB styling */}
      <div className="relative bg-[#111] border border-[#333] rounded-xl p-0 max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col shadow-2xl shadow-[#00FF66]/10 transform transition-all duration-300 scale-95 opacity-0 animate-modal-in">
        {/* Header Bar */}
        <div className="bg-[#1a1a1a] border-b border-[#333] px-6 py-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-[#00FF66]">
            User Management
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-[#00FF66] transition-colors p-1 rounded-full hover:bg-[#222]"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto bg-[#111]">{children}</div>

        {/* Footer */}
        <div className="bg-[#1a1a1a] border-t border-[#333] px-6 py-3 text-xs text-gray-400">
          BetBetter101 Admin Panel • User Management
        </div>
      </div>
    </div>
  );
};

export default UserAdminModal;
