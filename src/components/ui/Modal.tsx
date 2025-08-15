import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}
export function Modal({
  isOpen,
  onClose,
  title,
  children
}: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  if (!isVisible && !isOpen) return null;
  return <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose}>
      <div className={`relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transition-all duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`} onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-[#1E3A5F]">{title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-9 w-9 rounded-full hover:bg-gray-100">
            <X size={18} />
          </Button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>;
}