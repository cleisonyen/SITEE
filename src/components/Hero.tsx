import React from 'react';
import { ArrowRight, Star, Users, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="/imgTop.jpg" 
          alt="Cataratas do Iguaçu" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Descubra as Maravilhas de
            <span className="text-green-400 block">Foz do Iguaçu</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Especialistas em turismo há mais de 10 anos, oferecemos experiências únicas 
            nas Cataratas do Iguaçu, Usina de Itaipu e muito mais!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={scrollToContact}
              className="btn-primary flex items-center justify-center space-x-2 text-lg"
            >
              <span>Reserve Agora</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary bg-white bg-opacity-20 border-white text-white hover:bg-white hover:text-green-600">
              Ver Pacotes
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 p-3 rounded-full">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">10.000+</div>
                <div className="text-gray-300">Clientes Satisfeitos</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 p-3 rounded-full">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-gray-300">Avaliação Média</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-gray-300">Destinos Únicos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;