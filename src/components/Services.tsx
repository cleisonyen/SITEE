import React from 'react';
import { Camera, Zap, Globe, TreePine, Car, Users } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Services = () => {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Iguazu Falls",
      description: "Explore one of the 7 Natural Wonders of the World with specialized guides",
      features: ["Brazilian and Argentine sides", "Ecological trails", "Professional photos"],
      image: "/1.jpg",
      whatsappMessage: "Hi! I'm interested in the Iguazu Falls tour. Could you provide more information about availability and pricing?"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Itaipu Dam",
      description: "Visit the world's second-largest hydroelectric power plant",
      features: ["Technical tour", "Central viewpoint", "Visitor center"],
      image: "/2.jpg",
      whatsappMessage: "Hello! I'd like to book the Itaipu Dam tour. Can you tell me about schedules and what's included?"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Three Borders Landmark",
      description: "Visit the point where Brazil, Argentina and Paraguay meet",
      features: ["Panoramic view", "Light show", "Local gastronomy"],
      image: "/3.jpg",
      whatsappMessage: "Hi! I'm interested in visiting the Three Borders Landmark. What's the best time to go?"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Bird Park",
      description: "Latin America's largest bird park with exotic species",
      features: ["Over 1,400 birds", "Immersive aviaries", "Butterfly house"],
      image: "/4.jpg",
      whatsappMessage: "Hello! I'd like to visit the Bird Park. Can you help me with tickets and information?"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "City Tour",
      description: "Discover the main tourist attractions of the city",
      features: ["Omar Ibn Al-Khattab Mosque", "Buddhist Temple", "St. John Baptist Cathedral"],
      image: "/5.jpg",
      whatsappMessage: "Hi! I'd like to book the City Tour. What cultural sites will we visit?"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Custom Packages",
      description: "We create exclusive itineraries according to your profile",
      features: ["Personalized itinerary", "Private guide", "Exclusive transportation"],
      image: "/6.jpg",
      whatsappMessage: "Hello! I'm looking for a custom tour package. Could you help me plan my trip?"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of tours and experiences to make your visit 
            to Foz do Iguaçu unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-green-500 p-2 rounded-lg mb-2 w-fit">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex space-x-2">
                  <WhatsAppButton
                    phoneNumber="5545999999999"
                    message={service.whatsappMessage}
                    className="flex-1 justify-center"
                    size="sm"
                  >
                    Book Now
                  </WhatsAppButton>
                  <button className="btn-secondary px-4 text-sm">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;