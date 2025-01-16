import {useState} from 'react';

interface ToastMessage {
  message: string;
  title: string;
  type: 'alerts' | 'success' | 'danger';
  duration?: number
}

export const useToast = () => {
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = ({message, title, type, duration}: ToastMessage) => {
    setToast({message, title, type, duration});

    setTimeout(() => {
      setToast(null);
    }, duration || 5000);
  };

  const removeToast = () => {
    setToast(null);
  };

  return {
    toast,
    showToast,
    removeToast,
  };
};

export default useToast;
