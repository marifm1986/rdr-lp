import React from 'react';
import { DollarSign, Users, Layers, FileText, BarChart3, Clock, Check } from 'lucide-react';
import { AnimatedElement } from './AnimatedElement';
import { Button } from './ui/Button';

interface AdvantagesSectionProps {
  openModal: () => void;
}

export function AdvantagesSection({ openModal }: AdvantagesSectionProps) {
  const advantages = [{
    title: 'No Upfront Fees',
    description: "We don't charge any upfront fees for our debt relief services. You only pay when we successfully negotiate and settle your debts.",
    image: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: <DollarSign className="w-5 h-5" />,
    color: '#8B1538'
  }, {
    title: 'Client Care',
    description: "Our dedicated client care team provides personalized support throughout your debt relief journey. We're here to answer your questions and address your concerns.",
    image: 'https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: <Users className="w-5 h-5" />,
    color: '#D4AF37'
  }, {
    title: 'Multiple Programs',
    description: 'We offer a variety of debt relief programs tailored to fit your specific financial situation and budget. Our experts will help you choose the right program for you.',
    image: 'https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: <Layers className="w-5 h-5" />,
    color: '#1E3A5F'
  }, {
    title: 'Total Transparency',
    description: 'We believe in complete transparency. Our debt specialists will clearly explain all fees, terms, and expectations so you know exactly what to expect.',
    image: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: <FileText className="w-5 h-5" />,
    color: '#8B1538'
  }, {
    title: 'Account Management',
    description: 'Our professional account managers handle all negotiations with creditors on your behalf. We work diligently to secure the best possible settlements for your debts.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: <BarChart3 className="w-5 h-5" />,
    color: '#D4AF37'
  }, {
    title: 'Fast Debt Relief',
    description: 'Our proven debt relief strategies can help you become debt-free faster than you might think. Many clients see results within the first few months of enrollment.',
    image: 'https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: <Clock className="w-5 h-5" />,
    color: '#1E3A5F'
  }];
  return <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#D4AF37]/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B1538]/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      <div className="container mx-auto px-4 relative">
        <AnimatedElement animation="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-4">
              Royal Debt Relief Major Advantages
            </h2>
            <p className="text-[#4A5568] text-lg">
              Why thousands of clients choose us for their debt relief needs
            </p>
          </div>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => <AnimatedElement key={index} animation="fade-up" delay={0.1 * (index + 1)} className="h-full">
              <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img src={advantage.image} alt={advantage.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <div className="flex items-center">
                      <div className="bg-white text-[#8B1538] p-2 rounded-lg mr-3" style={{
                    color: advantage.color
                  }}>
                        {advantage.icon}
                      </div>
                      <h3 className="text-white font-bold">
                        {advantage.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-[#4A5568]">{advantage.description}</p>
                </div>
                <div className="px-6 pb-6">
                  <div className="flex items-center text-[#8B1538] font-medium" style={{
                color: advantage.color
              }}>
                    <Check size={16} className="mr-2" />
                    <span>Included in all plans</span>
                  </div>
                </div>
              </div>
            </AnimatedElement>)}
        </div>
        <AnimatedElement animation="fade-up" delay={1}>
          <div className="flex justify-center mt-12">
            <Button variant="primary" size="lg" className="hover-float" onClick={openModal}>
              Get Your Free Debt Relief Quote
            </Button>
          </div>
        </AnimatedElement>
      </div>
    </section>;
}