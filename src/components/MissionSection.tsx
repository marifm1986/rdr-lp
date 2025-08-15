import React, { useEffect, useState } from 'react';
import { ShieldCheck, ArrowRight, Target, Users, DollarSign } from 'lucide-react';

interface MissionSectionProps {
  openModal: () => void;
}

export function MissionSection({ openModal }: MissionSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ clients: 0, years: 0, debt: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 FPS
      const stepDuration = duration / steps;
      
      const targets = { clients: 25000, years: 15, debt: 500 };
      const increments = {
        clients: targets.clients / steps,
        years: targets.years / steps,
        debt: targets.debt / steps
      };
      
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        
        setCounters({
          clients: Math.min(Math.floor(increments.clients * currentStep), targets.clients),
          years: Math.min(Math.floor(increments.years * currentStep), targets.years),
          debt: Math.min(Math.floor(increments.debt * currentStep), targets.debt)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  const statsData = [
    {
      icon: <Users className="w-8 h-8" />,
      value: counters.clients,
      suffix: '+',
      label: 'Clients Helped',
      color: 'text-blue-400'
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: counters.years,
      suffix: '+',
      label: 'Years Experience',
      color: 'text-green-400'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: counters.debt,
      suffix: 'M+',
      label: 'Debt Resolved',
      color: 'text-purple-400'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[25s] ease-linear"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")',
            transform: isVisible ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 to-[#8B1538]/85" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <div className={`bg-white/20 backdrop-blur-sm p-6 rounded-full border border-white/30 shadow-lg transform transition-all duration-1000 ${isVisible ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-180 opacity-0'}`}
                   style={{ transitionDelay: '0.2s' }}>
                <ShieldCheck className="w-16 h-16 text-[#D4AF37] animate-pulse" />
              </div>
            </div>
            
            <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: '0.4s' }}>
              OUR MISSION
            </h2>
          </div>

          {/* Mission Statement */}
          <div className="mb-12">
            <div className={`bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20 shadow-2xl hover:bg-white/15 hover:scale-105 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                 style={{ transitionDelay: '0.6s' }}>
              <p className="text-xl md:text-2xl text-white leading-relaxed text-center font-light">
                At Royal Debt Relief, our mission is to provide professional,
                ethical, and effective debt relief solutions that help our
                clients regain financial stability and peace of mind. We are
                committed to transparency, integrity, and exceptional client
                service in everything we do.
              </p>
            </div>
          </div>

          {/* Animated Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {statsData.map((stat, index) => (
              <div 
                key={index}
                className={`bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center hover:bg-white/15 hover:scale-110 hover:-translate-y-2 transition-all duration-500 group transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${0.8 + index * 0.2}s` }}
              >
                <div className={`${stat.color} mb-4 flex justify-center transform group-hover:scale-125 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#D4AF37] mb-2 group-hover:text-white transition-colors duration-300">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                  {stat.label}
                </div>
                
                {/* Progress bar animation */}
                <div className="mt-3 w-full bg-white/20 rounded-full h-1 overflow-hidden">
                  <div 
                    className="h-full bg-[#D4AF37] transition-all duration-2000 ease-out"
                    style={{ 
                      width: isVisible ? '100%' : '0%',
                      transitionDelay: `${1.2 + index * 0.2}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Animated CTA Button */}
          <div className="flex justify-center">
            <button 
              onClick={openModal}
              className={`group relative bg-[#D4AF37] hover:bg-white text-[#1E3A5F] font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-2xl flex items-center gap-3 overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: '1.4s' }}
            >
              <span className="relative z-10">START YOUR JOURNEY TODAY</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 relative z-10" />
              
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Animated Trust Indicators */}
          <div className={`mt-12 flex flex-col md:flex-row items-center justify-center gap-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
               style={{ transitionDelay: '1.6s' }}>
            <div className="flex items-center gap-4 text-white hover:text-[#D4AF37] transition-colors duration-300 group">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37] group-hover:scale-125 transition-transform duration-300" />
              <span>Licensed & Accredited</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30" />
            <div className="flex items-center gap-4 text-white hover:text-[#D4AF37] transition-colors duration-300 group">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37] group-hover:scale-125 transition-transform duration-300" />
              <span>No Upfront Fees</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30" />
            <div className="flex items-center gap-4 text-white hover:text-[#D4AF37] transition-colors duration-300 group">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37] group-hover:scale-125 transition-transform duration-300" />
              <span>100% Confidential</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Decorative Elements */}
      <div className={`absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full opacity-30 transition-all duration-3000 ${isVisible ? 'animate-spin' : ''}`} 
           style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
      <div className={`absolute bottom-10 right-10 w-32 h-32 border border-[#D4AF37]/30 rounded-full opacity-40 transition-all duration-4000 ${isVisible ? 'animate-pulse' : ''}`} />
      <div className={`absolute top-1/2 right-20 w-16 h-16 bg-[#D4AF37]/10 rounded-full opacity-50 transition-all duration-5000 ${isVisible ? 'animate-bounce' : ''}`} 
           style={{ animationDelay: '1s' }} />
      
      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 border border-[#D4AF37]/20 rounded-full animate-ping" 
           style={{ animationDelay: '2s', animationDuration: '3s' }} />
      <div className="absolute bottom-1/4 left-3/4 w-12 h-12 bg-white/5 rounded-full animate-pulse" 
           style={{ animationDelay: '3s', animationDuration: '4s' }} />

      {/* Custom CSS for additional animations */}
      <style>{`
        @keyframes slideInFromBottom {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes scaleIn {
          0% { transform: scale(0) rotate(180deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes numberCount {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
        
        @keyframes shine {
          0% { background-position: -200px 0; }
          100% { background-position: 200px 0; }
        }
      `}</style>
    </section>
  );
}