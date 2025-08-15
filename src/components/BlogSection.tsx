import React from 'react';
import { Button } from './ui/Button';
import { Calendar, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { AnimatedElement } from './AnimatedElement';
export function BlogSection() {
  const blogPosts = [{
    id: 1,
    title: 'Smart Travel: 7 Credit Card Pitfalls to Dodge This Summer',
    image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1600',
    excerpt: 'Discover how to avoid common credit card mistakes while traveling this summer to keep your finances in check.',
    date: 'June 15, 2023'
  }, {
    id: 2,
    title: 'How to Regain Control When Credit Card Bills Become Overwhelming',
    image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1600',
    excerpt: 'Learn effective strategies to take back control of your finances when credit card debt starts to feel unmanageable.',
    date: 'May 28, 2023'
  }, {
    id: 3,
    title: 'Summer Road Trips on a Budget: How to Save Big on Your Next Adventure',
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1600',
    excerpt: 'Plan an amazing summer road trip without breaking the bank with these money-saving tips and tricks.',
    date: 'May 10, 2023'
  }];
  return <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1E3A5F]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      <div className="container mx-auto px-4 relative">
        <AnimatedElement animation="fade-up">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <div className="inline-block bg-[#1E3A5F]/10 text-[#1E3A5F] px-4 py-1 rounded-full text-sm font-medium mb-4">
                Financial Insights
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-2">
                Latest From Our Blog
              </h2>
              <p className="text-[#4A5568]">
                Tips and strategies for managing your debt and finances
              </p>
            </div>
            <div className="flex space-x-2 mt-4 md:mt-0">
              <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors hover-float">
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors hover-float">
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => <AnimatedElement key={post.id} animation="fade-up" delay={0.2 * (index + 1)}>
              <div className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#8B1538] px-3 py-1 rounded-full text-xs font-medium">
                    <Calendar size={12} className="inline-block mr-1" />
                    {post.date}
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-[#2D3748] group-hover:text-[#8B1538] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#4A5568] mb-4">{post.excerpt}</p>
                </div>
                <div className="px-6 pb-6">
                  <Button variant="outline" size="sm" className="group-hover:bg-[#8B1538] group-hover:text-white group-hover:border-transparent transition-colors">
                    <span>READ MORE</span>
                    <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </AnimatedElement>)}
        </div>
        <AnimatedElement animation="fade-up" delay={0.8}>
          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg" className="hover-float">
              <span>View All Articles</span>
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </AnimatedElement>
      </div>
    </section>;
}