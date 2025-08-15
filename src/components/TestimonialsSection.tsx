import { useEffect, useState } from 'react';
import { Star, Quote, Shield, Award, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';

interface TestimonialsSectionProps {
  openModal: () => void;
}

export function TestimonialsSection({ openModal }: TestimonialsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ clients: 0, debt: 0, years: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const animateCounters = () => {
      const duration = 2500; // 2.5 seconds
      const steps = 60; // 60 FPS
      const stepDuration = duration / steps;
      
      const targets = { clients: 25000, debt: 500, years: 15 };
      const increments = {
        clients: targets.clients / steps,
        debt: targets.debt / steps,
        years: targets.years / steps
      };
      
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        
        setCounters({
          clients: Math.min(Math.floor(increments.clients * currentStep), targets.clients),
          debt: Math.min(Math.floor(increments.debt * currentStep), targets.debt),
          years: Math.min(Math.floor(increments.years * currentStep), targets.years)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateCounters, 1500);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Small Business Owner',
      quote: 'Royal Debt Relief helped me reduce my business debt by 45%. Their team was professional and supportive throughout the entire process. I can finally focus on growing my business again!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      debtReduced: '45%',
      category: 'Business'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      position: 'Healthcare Professional',
      quote: 'After accumulating medical debt from an unexpected illness, I felt overwhelmed. Royal Debt Relief created a personalized plan that helped me settle my debts for much less than I owed.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      debtReduced: '60%',
      category: 'Medical'
    },
    {
      id: 3,
      name: 'Jennifer Taylor',
      position: 'Marketing Director',
      quote: 'I was skeptical at first, but Royal Debt Relief delivered on their promises. Their debt settlement program saved me thousands and helped me rebuild my credit faster than I expected.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      debtReduced: '52%',
      category: 'Credit Cards'
    }
  ];

  const trustBadges = [
    {
      name: 'BBB Accredited',
      icon: <Shield className="w-8 h-8" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Trustpilot',
      icon: <Star className="w-8 h-8" />,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Google Reviews',
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      name: 'Certified',
      icon: <Award className="w-8 h-8" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#1E3A5F] via-[#2A4A6B] to-[#8B1538] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5 transition-transform duration-[30s] ease-linear"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")',
            transform: isVisible ? 'scale(1.1) rotate(1deg)' : 'scale(1)'
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#D4AF37]/20 rounded-full animate-spin" 
             style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#D4AF37]/10 rounded-full animate-pulse" 
             style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 rounded-full animate-bounce" 
             style={{ animationDelay: '1s', animationDuration: '4s' }} />
        
        {/* Additional floating particles */}
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-[#8B1538]/20 rounded-full animate-ping" 
             style={{ animationDelay: '2s', animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border border-white/5 rounded-full animate-pulse" 
             style={{ animationDelay: '3s', animationDuration: '5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className={`inline-block bg-[#8B1538] text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-lg transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
               style={{ transitionDelay: '0.2s' }}>
            Client Success Stories
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: '0.4s' }}>
            What Our Clients Say
          </h2>
          <p className={`text-gray-300 text-xl leading-relaxed transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
             style={{ transitionDelay: '0.6s' }}>
            Real stories from real people who regained their financial freedom
          </p>
          
          {/* First CTA Button */}
          <div className={`mt-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
               style={{ transitionDelay: '0.7s' }}>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-[#1E3A5F] hover:bg-[#D4AF37] hover:text-[#1E3A5F] border-white hover:border-[#D4AF37] transition-all duration-300 animate-pulse hover:animate-none hover:scale-110 hover:shadow-2xl hover:shadow-[#D4AF37]/50 relative group" 
              onClick={openModal}
            >
              <span className="relative z-10">Start Your Debt Relief Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#8B1538]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>

        {/* Animated Rating Display */}
        <div className="flex justify-center mb-16">
          <div className={`bg-white/15 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20 shadow-2xl hover:scale-105 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
               style={{ transitionDelay: '0.8s' }}>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={28} 
                    fill="#D4AF37" 
                    color="#D4AF37" 
                    className="mx-0.5 hover:scale-125 transition-transform duration-300"
                    style={{ 
                      animationDelay: `${i * 0.2}s`,
                      animation: isVisible ? 'starTwinkle 2s ease-in-out infinite alternate' : 'none'
                    }}
                  />
                ))}
              </div>
              <div className="text-center md:text-left">
                <span className="text-white text-3xl font-bold">4.9/5</span>
                <span className="text-gray-300 ml-3 text-lg">
                  based on 1,200+ reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Second CTA Button */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
             style={{ transitionDelay: '0.9s' }}>
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] via-[#8B1538] to-[#D4AF37] rounded-lg blur opacity-75 animate-pulse group-hover:opacity-100 transition duration-1000"></div>
            <Button 
              variant="primary" 
              size="lg" 
              className="relative bg-[#D4AF37] hover:bg-[#B8941F] border-[#D4AF37] hover:border-[#B8941F] text-[#1E3A5F] animate-bounce hover:animate-none hover:scale-110 hover:shadow-2xl hover:shadow-[#D4AF37]/60 group" 
              onClick={openModal}
            >
              <span className="relative z-10 font-bold">Get Free Quote Like These Clients</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>

        {/* Animated Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 h-full flex flex-col hover:transform hover:-translate-y-4 hover:rotate-1 transition-all duration-700 hover:shadow-2xl hover:shadow-[#D4AF37]/30 hover:bg-white/20 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${1.0 + index * 0.2}s` }}
            >
              {/* Category Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="bg-[#D4AF37] text-[#1E3A5F] px-3 py-1 rounded-full text-sm font-semibold group-hover:scale-110 transition-transform duration-300">
                  {testimonial.category}
                </div>
                <div className="bg-[#8B1538] text-white px-3 py-1 rounded-full text-sm font-bold group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#1E3A5F] transition-all duration-300">
                  {testimonial.debtReduced} Saved
                </div>
              </div>

              {/* Animated Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    fill="#D4AF37" 
                    color="#D4AF37" 
                    className="mr-1 group-hover:scale-125 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Quote with Animation */}
              <div className="mb-8 flex-grow relative">
                <Quote className="text-[#D4AF37] opacity-30 w-12 h-12 mb-4 absolute -top-2 -left-2 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500" />
                <p className="text-white italic leading-relaxed text-lg pl-6 relative z-10 group-hover:text-gray-100 transition-colors duration-300">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Animated Client Info */}
              <div className="flex items-center">
                <div className="mr-4 relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-3 border-[#D4AF37] shadow-lg group-hover:scale-125 group-hover:rotate-6 transition-all duration-500" 
                  />
                  <div className="absolute -bottom-1 -right-1 bg-[#8B1538] text-white rounded-full p-1 group-hover:scale-125 group-hover:bg-[#D4AF37] group-hover:text-[#1E3A5F] transition-all duration-300">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg group-hover:text-[#D4AF37] transition-colors duration-300">{testimonial.name}</h4>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Third CTA Button */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
             style={{ transitionDelay: '1.7s' }}>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 animate-glow group">
            <h3 className="text-2xl font-bold text-white mb-4 animate-fade-in">Ready to Join Them?</h3>
            <p className="text-gray-300 mb-6 animate-fade-in-delayed">Take the first step towards financial freedom today</p>
            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#8B1538] via-[#D4AF37] to-[#8B1538] rounded-lg blur-sm opacity-60 animate-pulse group-hover:opacity-100 transition duration-1000"></div>
              <Button 
                variant="primary" 
                size="lg" 
                className="relative bg-[#8B1538] hover:bg-[#6B1028] border-[#8B1538] hover:border-[#6B1028] animate-pulse hover:animate-none hover:scale-125 hover:shadow-2xl hover:shadow-[#8B1538]/60 group transform hover:rotate-1 transition-all duration-500" 
                onClick={openModal}
              >
                <span className="relative z-10 font-bold text-lg">Get Your Personalized Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>

        {/* Animated Trust Badges */}
        <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
             style={{ transitionDelay: '1.6s' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Trusted & Verified</h3>
            <p className="text-gray-300">Accredited by leading industry organizations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-6 text-center hover:transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${1.8 + index * 0.1}s` }}
              >
                <div className={`${badge.bgColor} rounded-full p-4 mx-auto mb-3 w-fit transition-all duration-300 hover:scale-110`}>
                  <div className={`${badge.color} transition-all duration-300 hover:scale-125`}>
                    {badge.icon}
                  </div>
                </div>
                <p className="font-semibold text-gray-800 text-sm">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Bottom Stats */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
             style={{ transitionDelay: '2.2s' }}>
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="text-4xl font-bold text-[#D4AF37] mb-2 group-hover:text-white transition-colors duration-300">
              {counters.clients.toLocaleString()}+
            </div>
            <div className="text-white group-hover:text-[#D4AF37] transition-colors duration-300">Happy Clients</div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="text-4xl font-bold text-[#D4AF37] mb-2 group-hover:text-white transition-colors duration-300">
              ${counters.debt}M+
            </div>
            <div className="text-white group-hover:text-[#D4AF37] transition-colors duration-300">Debt Resolved</div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="text-4xl font-bold text-[#D4AF37] mb-2 group-hover:text-white transition-colors duration-300">
              {counters.years}+
            </div>
            <div className="text-white group-hover:text-[#D4AF37] transition-colors duration-300">Years Experience</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`mt-16 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
             style={{ transitionDelay: '2.5s' }}>
          <div className="relative inline-block group">
            <div className="absolute -inset-3 bg-gradient-to-r from-[#D4AF37] via-white to-[#D4AF37] rounded-lg blur-lg opacity-70 animate-ping group-hover:opacity-100 transition duration-1000"></div>
            <Button 
              variant="primary" 
              size="lg" 
              className="relative hover-float bg-[#D4AF37] hover:bg-[#B8941F] border-[#D4AF37] hover:border-[#B8941F] animate-bounce hover:animate-none hover:scale-125 hover:shadow-2xl hover:shadow-[#D4AF37]/80 group transform hover:-rotate-2 transition-all duration-700" 
              onClick={openModal}
            >
              <span className="relative z-10 font-bold text-xl">Get Your Free Debt Relief Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            </Button>
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
            style={{ animationDuration: '5s' }}
          />
        </svg>
      </div>

      {/* Custom CSS for additional animations */}
      <style>{`
        @keyframes starTwinkle {
          0% { 
            filter: brightness(1) drop-shadow(0 0 0px #D4AF37); 
            transform: scale(1);
          }
          100% { 
            filter: brightness(1.4) drop-shadow(0 0 8px #D4AF37); 
            transform: scale(1.1);
          }
        }
        
        @keyframes slideInFromBottom {
          0% { transform: translateY(60px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(212, 175, 55, 0.3); }
          50% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.6); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
          75% { transform: scale(1.05); }
        }
        
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-fade-in-delayed {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }
        
        .animate-rainbow {
          background: linear-gradient(45deg, #D4AF37, #8B1538, #D4AF37, #8B1538);
          background-size: 400% 400%;
          animation: rainbow 3s ease infinite;
        }
      `}</style>
    </section>
  );
}