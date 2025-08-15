import { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { Phone, Menu, X } from 'lucide-react';
interface HeaderProps {
  openModal: () => void;
}
export function Header({
  openModal
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'shadow-sm py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/royal-logo.png" alt="Royal Debt Relief" className="h-10 w-auto object-contain" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-[#4A5568] hover:text-[#8B1538] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8B1538] after:transition-all hover:after:w-full">
              Services
            </a>
            <a href="#" className="text-sm font-medium text-[#4A5568] hover:text-[#8B1538] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8B1538] after:transition-all hover:after:w-full">
              How It Works
            </a>
            <a href="#" className="text-sm font-medium text-[#4A5568] hover:text-[#8B1538] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8B1538] after:transition-all hover:after:w-full">
              About
            </a>
            <a href="#" className="text-sm font-medium text-[#4A5568] hover:text-[#8B1538] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8B1538] after:transition-all hover:after:w-full">
              Blog
            </a>
            <a href="#" className="text-sm font-medium text-[#4A5568] hover:text-[#8B1538] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8B1538] after:transition-all hover:after:w-full">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="tel:+18001234567" className="hidden md:flex items-center text-[#8B1538] font-medium hover-float">
              <Phone size={16} className="mr-2" />
              <span>1-800-123-4567</span>
            </a>
            <Button onClick={openModal} className="relative overflow-hidden group">
              <span className="relative z-10">Get Free Quote</span>
              <span className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Button>
            <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fade-in">
          <div className="container mx-auto px-4 space-y-3">
            <a href="#" className="block text-sm font-medium text-[#4A5568] hover:text-[#8B1538] py-2">
              Services
            </a>
            <a href="#" className="block text-sm font-medium text-[#4A5568] hover:text-[#8B1538] py-2">
              How It Works
            </a>
            <a href="#" className="block text-sm font-medium text-[#4A5568] hover:text-[#8B1538] py-2">
              About
            </a>
            <a href="#" className="block text-sm font-medium text-[#4A5568] hover:text-[#8B1538] py-2">
              Blog
            </a>
            <a href="#" className="block text-sm font-medium text-[#4A5568] hover:text-[#8B1538] py-2">
              Contact
            </a>
            <a href="#" className="block text-sm font-medium text-[#4A5568] hover:text-[#8B1538] py-2">
              Client Portal
            </a>
            <a href="tel:+18001234567" className="flex items-center text-[#8B1538] font-medium py-2">
              <Phone size={16} className="mr-2" />
              <span>1-800-123-4567</span>
            </a>
            <Button onClick={openModal} className="w-full mt-2">
              Get Free Quote
            </Button>
          </div>
        </div>}
    </header>;
}