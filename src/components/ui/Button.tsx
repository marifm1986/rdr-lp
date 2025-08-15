import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}
export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors';
  const variantStyles = {
    primary: 'bg-[#8B1538] text-white hover:bg-[#D4AF37]',
    secondary: 'border border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#8B1538] hover:text-white hover:border-transparent',
    accent: 'bg-[#D4AF37] text-white hover:bg-[#8B1538]'
  };
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };
  return <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ''}`} {...props}>
      {children}
    </button>;
}