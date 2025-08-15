import React from 'react';
import { Button } from './ui/Button';
import { MessageSquare, ArrowRight, Calendar } from 'lucide-react';
import { AnimatedElement } from './AnimatedElement';
interface ProcessSectionProps {
  openModal: () => void;
}
export function ProcessSection({
  openModal
}: ProcessSectionProps) {
  return <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#8B1538]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#1E3A5F]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      <div className="container mx-auto px-4 relative">
        <AnimatedElement animation="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-[#8B1538]/10 text-[#8B1538] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Simple Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-4">
              Three Simple Steps to Financial Freedom
            </h2>
            <p className="text-[#4A5568] text-lg">
              Our straightforward process will guide you toward becoming
              debt-free
            </p>
          </div>
        </AnimatedElement>
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#8B1538]/20 via-[#D4AF37]/20 to-[#1E3A5F]/20 -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <AnimatedElement animation="fade-up" delay={0.1} className="h-full">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 border border-gray-100 hover-float h-full">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#8B1538]/10 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-[#8B1538]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-[#8B1538]">
                  1. CONSULTATION
                </h3>
                <p className="text-[#4A5568] text-center">
                  We want to hear your story. Our debt specialists will listen
                  to your financial situation and help you understand your
                  options for debt relief.
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="fade-up" delay={0.3} className="h-full">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 border border-gray-100 md:mt-8 hover-float h-full">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-[#D4AF37]">
                  2. PERSONALIZED PLAN
                </h3>
                <p className="text-[#4A5568] text-center">
                  We'll create a personalized debt relief plan that fits your
                  unique situation. Our team will guide you through each step of
                  the process.
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="fade-up" delay={0.5} className="h-full">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 border border-gray-100 hover-float h-full">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#1E3A5F]/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-[#1E3A5F]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-[#1E3A5F]">
                  3. DEBT FREEDOM
                </h3>
                <p className="text-[#4A5568] text-center">
                  Our debt relief programs provide a clear timeline so you'll
                  know exactly when you'll be debt free. Start your journey to
                  financial freedom today.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
        <AnimatedElement animation="fade-up" delay={0.7}>
          <div className="flex justify-center mt-16">
            <Button size="lg" className="px-8 group relative overflow-hidden" onClick={openModal}>
              <span className="relative z-10">GET YOUR FREE CONSULTATION</span>
              <span className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Button>
          </div>
        </AnimatedElement>
      </div>
    </section>;
}