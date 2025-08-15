import { Button } from './ui/Button';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { AnimatedElement } from './AnimatedElement';
interface FooterProps {
  openModal: () => void;
}
export function Footer({
  openModal
}: FooterProps) {
  return <footer className="bg-white">
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-16">
          <AnimatedElement animation="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div>
                <img src="/royal-logo.png" alt="Royal Debt Relief" className="h-10 w-auto mb-6" />
                <p className="text-[#4A5568] mb-6">
                  Professional debt relief services helping thousands achieve
                  financial freedom.
                </p>
                <div className="flex space-x-3">
                  {[{
                  icon: <Facebook size={18} />,
                  color: '#1877F2'
                }, {
                  icon: <Twitter size={18} />,
                  color: '#1DA1F2'
                }, {
                  icon: <Instagram size={18} />,
                  color: '#E4405F'
                }, {
                  icon: <Youtube size={18} />,
                  color: '#FF0000'
                }, {
                  icon: <Linkedin size={18} />,
                  color: '#0A66C2'
                }].map((social, index) => <a key={index} href="#" className="hover-float flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 transition-colors" style={{
                  color: social.color
                }}>
                      {social.icon}
                    </a>)}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#2D3748] text-lg mb-6">
                  Recent Posts
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="group flex items-center text-[#4A5568] hover:text-[#8B1538]">
                      <span className="mr-2">
                        Smart Travel: 7 Credit Card Pitfalls
                      </span>
                      <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-center text-[#4A5568] hover:text-[#8B1538]">
                      <span className="mr-2">
                        Regain Control of Credit Card Bills
                      </span>
                      <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-center text-[#4A5568] hover:text-[#8B1538]">
                      <span className="mr-2">
                        Summer Road Trips on a Budget
                      </span>
                      <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#2D3748] text-lg mb-6">
                  Our Services
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                  <li>
                    <a href="#" className="text-[#4A5568] hover:text-[#8B1538] hover:underline transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2 text-[#8B1538]" />
                      Debt Settlement
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#4A5568] hover:text-[#8B1538] hover:underline transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2 text-[#8B1538]" />
                      Debt Consolidation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#4A5568] hover:text-[#8B1538] hover:underline transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2 text-[#8B1538]" />
                      Credit Card Debt Relief
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#4A5568] hover:text-[#8B1538] hover:underline transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2 text-[#8B1538]" />
                      Medical Debt Relief
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#4A5568] hover:text-[#8B1538] hover:underline transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2 text-[#8B1538]" />
                      Personal Loan Relief
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#2D3748] text-lg mb-6">
                  Contact Us
                </h3>
                <ul className="space-y-4">
                  <li className="flex hover-float">
                    <Phone size={18} className="text-[#8B1538] mr-3 flex-shrink-0 mt-1" />
                    <a href="tel:+18001234567" className="text-[#4A5568] hover:text-[#8B1538]">
                      1-800-123-4567
                    </a>
                  </li>
                  <li className="flex hover-float">
                    <Mail size={18} className="text-[#8B1538] mr-3 flex-shrink-0 mt-1" />
                    <a href="mailto:info@royaldebtrelief.com" className="text-[#4A5568] hover:text-[#8B1538]">
                      info@royaldebtrelief.com
                    </a>
                  </li>
                  <li className="flex">
                    <MapPin size={18} className="text-[#8B1538] mr-3 flex-shrink-0 mt-1" />
                    <span className="text-[#4A5568]">
                      123 Financial Street, Suite 100, New York, NY 10001
                    </span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button onClick={openModal} className="w-full">
                    Get Free Quote
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
      <div className="bg-[#1E3A5F] text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left mb-4 md:mb-0">
              © 2023 Royal Debt Relief. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-6">
              <a href="#" className="text-sm text-white hover:text-[#D4AF37] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-white hover:text-[#D4AF37] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-white hover:text-[#D4AF37] transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}