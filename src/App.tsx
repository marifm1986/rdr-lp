import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProcessSection } from './components/ProcessSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { MissionSection } from './components/MissionSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { FormModal } from './components/FormModal';
import { NotificationModal } from './components/NotificationModal';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState<{
    isOpen: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
  }>({
    isOpen: false,
    type: 'success',
    title: '',
    message: ''
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const showNotification = (type: 'success' | 'error', title: string, message: string) => {
    setNotification({
      isOpen: true,
      type,
      title,
      message
    });
  };

  const closeNotification = () => {
    setNotification(prev => ({ ...prev, isOpen: false }));
  };

  return <div className="w-full min-h-screen bg-white text-[#2D3748]">
      <Header openModal={openModal} />
      <main>
        <HeroSection openModal={openModal} />
        <ProcessSection openModal={openModal} />
        <AdvantagesSection />
        <MissionSection openModal={openModal} />
        <TestimonialsSection />
        <BlogSection />
      </main>
      <Footer openModal={openModal} />
      <FormModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onNotification={showNotification}
      />
      <NotificationModal
        isOpen={notification.isOpen}
        onClose={closeNotification}
        type={notification.type}
        title={notification.title}
        message={notification.message}
      />
    </div>;
}