import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Star, Shield, Award } from 'lucide-react';

interface HeroSectionProps {
  openModal: () => void;
}

export function HeroSection({ openModal }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id='services' className="relative bg-gradient-to-r from-[#1E3A5F] to-[#0f1c2e] py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 transition-transform duration-[20s] ease-linear animate-pulse" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")'
          }}
        ></div>
        <div className="absolute inset-0 bg-[#1E3A5F]/30"></div>
        
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-[#D4AF37]/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-[#8B1538]/10 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 border border-white/10 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-3/5 text-white">
            {/* Badge */}
            <div className={`inline-block bg-[#8B1538] px-4 py-1 rounded-full text-sm font-medium mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                 style={{ transitionDelay: '0.1s' }}>
              Professional Debt Relief Services
            </div>
            
            {/* Main Heading */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                style={{ transitionDelay: '0.3s' }}>
              REGAIN YOUR{' '}
              <span className="text-[#D4AF37] relative">
                FINANCIAL FREEDOM
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#D4AF37] transform origin-left transition-transform duration-1000"
                      style={{ 
                        transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                        transitionDelay: '1.5s'
                      }}></span>
              </span>
            </h1>
            
            {/* Description */}
            <p className={`text-lg md:text-xl mb-8 text-gray-200 max-w-xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
               style={{ transitionDelay: '0.5s' }}>
              Get help from our expert debt relief specialists. We've helped
              thousands of people just like you reduce their debt and regain
              financial freedom.
            </p>
            
            {/* CTA Buttons */}
            <div className={`flex flex-wrap gap-4 mb-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                 style={{ transitionDelay: '0.7s' }}>
              <button 
                onClick={openModal}
                className="bg-[#8B1538] hover:bg-[#D4AF37] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl group relative overflow-hidden"
              >
                <span className="relative z-10">GET STARTED NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
             {/*  <button className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center group hover:scale-105 hover:-translate-y-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-2" />
              </button> */}
            </div>
            
            {/* Rating and Trust Badges */}
            <div className={`flex flex-col md:flex-row gap-6 items-start md:items-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                 style={{ transitionDelay: '0.9s' }}>
              <div className="flex items-center space-x-1 group">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    fill="#D4AF37" 
                    color="#D4AF37" 
                    className="transition-transform duration-300 hover:scale-125"
                    style={{ 
                      animationDelay: `${i * 0.1}s`,
                      animation: isVisible ? 'starGlow 2s ease-in-out infinite alternate' : 'none'
                    }}
                  />
                ))}
                <span className="ml-2 font-medium">4.9/5</span>
              </div>
              
              <div className="h-10 border-l border-white/20 hidden md:block"></div>
              
              <div className="flex space-x-4 items-center">
                {/* BBB Accredited Badge */}
                <div className="h-12 w-16 bg-white rounded p-2 flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-lg">
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-blue-600 mx-auto mb-1 animate-pulse" />
                    <div className="text-xs font-bold text-blue-600">BBB</div>
                  </div>
                </div>
                
                {/* Trustpilot Badge */}
                <div className="h-12 w-16 bg-white rounded p-2 flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-lg">
                  <div className="text-center">
                    <Award className="w-6 h-6 text-green-600 mx-auto mb-1 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="text-xs font-bold text-green-600">TRUST</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Info Card */}
          <div className="w-full lg:w-2/5">
            <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                 style={{ transitionDelay: '1.1s' }}>
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Choose Royal Debt Relief?
              </h3>
              <ul className="space-y-4">
                {[
                  'Reduce your debt by up to 50%',
                  'No upfront fees - only pay when we deliver results',
                  'Become debt-free in 24-48 months',
                  'One affordable monthly program payment',
                  'Dedicated debt relief specialist'
                ].map((item, index) => (
                  <li 
                    key={index} 
                    className={`flex items-start group hover:translate-x-2 transition-transform duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    style={{ transitionDelay: `${1.3 + index * 0.1}s` }}
                  >
                    <CheckCircle className="text-[#D4AF37] mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" size={18} />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                       style={{ transitionDelay: '1.8s' }}>
                    <p className="text-white/80 text-sm">Already helped</p>
                    <p className="text-white font-bold text-2xl">
                      <span className="animate-pulse">25,000+</span> Clients
                    </p>
                  </div>
                  <button 
                    onClick={openModal}
                    className={`bg-[#8B1538] hover:bg-[#D4AF37] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    style={{ transitionDelay: '2s' }}
                  >
                    Get Free Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            className="animate-pulse"
            style={{ animationDuration: '4s' }}
          />
        </svg>
      </div>

      {/* Custom CSS for additional animations */}
      <style>{`
        @keyframes starGlow {
          0% { filter: brightness(1); }
          100% { filter: brightness(1.3) drop-shadow(0 0 3px #D4AF37); }
        }
        
        @keyframes slideInFromLeft {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInFromRight {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeInUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}