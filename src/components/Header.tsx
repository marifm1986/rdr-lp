// ...existing code...
import { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  openModal: () => void;
}

const NAV_ITEMS = [
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'how-it-works', label: 'How It Works', href: '#how-it-works' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'blog', label: 'Blog', href: '#blog' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function Header({ openModal }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(NAV_ITEMS[0].id);

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

  // Observe sections to auto-update active nav item
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const sections = NAV_ITEMS
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            setActive(id);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: [0.4, 0.6] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, itemId: string, href: string) => {
    e.preventDefault();
    const target = document.getElementById(itemId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(itemId);
    } else {
      // fallback to direct hash navigation if element not present
      window.location.hash = href;
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'shadow-sm py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/royal-logo.png" alt="Royal Debt Relief" className="h-10 w-auto object-contain" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id, item.href)}
                  className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8B1538] after:transition-all hover:after:w-full ${isActive ? 'text-[#8B1538] font-semibold after:w-full' : 'text-[#4A5568] hover:text-[#8B1538]'
                    }`}
                >
                  {item.label}
                </a>
              );
            })}
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
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fade-in">
          <div className="container mx-auto px-4 space-y-3">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id, item.href)}
                  className={`block text-sm font-medium py-2 ${isActive ? 'text-[#8B1538] font-semibold' : 'text-[#4A5568] hover:text-[#8B1538]'
                    }`}
                >
                  {item.label}
                </a>
              );
            })}
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
        </div>
      )}
    </header>
  );
}
// ...existing code...