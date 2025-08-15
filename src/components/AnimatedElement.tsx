import React, { useEffect, useState, useRef } from 'react';
interface AnimatedElementProps {
  children: React.ReactNode;
  animation: 'fade-up' | 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'zoom-in';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}
export function AnimatedElement({
  children,
  animation,
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.1
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold
    });
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [threshold]);
  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    switch (animation) {
      case 'fade-up':
        return 'animate-fade-up';
      case 'fade-in':
        return 'animate-fade-in';
      case 'slide-in-left':
        return 'animate-slide-in-left';
      case 'slide-in-right':
        return 'animate-slide-in-right';
      case 'zoom-in':
        return 'animate-zoom-in';
      default:
        return 'animate-fade-in';
    }
  };
  const style = {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  };
  return <div ref={elementRef} className={`${className} ${getAnimationClass()}`} style={style}>
      {children}
    </div>;
}