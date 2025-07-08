import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'floating';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Hello! I'm interested in your tours.",
  className = '',
  children,
  size = 'md',
  variant = 'primary'
}) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-green-500 hover:bg-green-600 text-white',
    secondary: 'bg-white hover:bg-green-50 text-green-600 border border-green-500',
    floating: 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl'
  };

  const baseClasses = `
    inline-flex items-center justify-center space-x-2 
    font-semibold rounded-lg transition-all duration-200 
    transform hover:scale-105 focus:outline-none focus:ring-2 
    focus:ring-green-500 focus:ring-offset-2
  `;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {children && <span>{children}</span>}
    </a>
  );
};

export default WhatsAppButton;