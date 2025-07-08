import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "5545999999999";
  const defaultMessage = "Hello! I'm interested in booking a tour with EBL Tours International. Could you please provide more information?";

  const quickMessages = [
    {
      text: "Tour Information",
      message: "Hi! I'd like to know more about your available tours and pricing."
    },
    {
      text: "Make a Reservation",
      message: "Hello! I'd like to make a reservation. Could you help me with availability?"
    },
    {
      text: "Iguazu Falls Tours",
      message: "Hi! I'm interested in the Iguazu Falls tours. What options do you have available?"
    },
    {
      text: "Custom Package",
      message: "Hello! I'm looking for a custom tour package. Could you help me plan my trip?"
    }
  ];

  const sendWhatsAppMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-xl border border-gray-200 w-80 max-w-sm">
          <div className="bg-green-500 text-white p-4 rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">EBL Tours</h3>
                <p className="text-sm opacity-90">How can we help you?</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 space-y-3">
            <p className="text-gray-600 text-sm">
              Choose a quick message or start a conversation:
            </p>
            
            {quickMessages.map((item, index) => (
              <button
                key={index}
                onClick={() => sendWhatsAppMessage(item.message)}
                className="w-full text-left p-3 bg-gray-50 hover:bg-green-50 rounded-lg transition-colors duration-200 text-sm"
              >
                {item.text}
              </button>
            ))}
            
            <button
              onClick={() => sendWhatsAppMessage(defaultMessage)}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Start Conversation
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;