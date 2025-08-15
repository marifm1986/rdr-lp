import { Modal } from './ui/Modal';
import { CheckCircle, XCircle } from 'lucide-react';
import { Button } from './ui/Button';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  title: string;
  message: string;
}

export function NotificationModal({
  isOpen,
  onClose,
  type,
  title,
  message
}: NotificationModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="">
      <div className="text-center py-8 space-y-4">
        <div className="flex justify-center">
          {type === 'success' ? (
            <CheckCircle size={64} className="text-green-500" />
          ) : (
            <XCircle size={64} className="text-red-500" />
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">{message}</p>
        <Button 
          onClick={onClose} 
          variant="primary" 
          className="mt-4"
        >
          Close
        </Button>
      </div>
    </Modal>
  );
}
