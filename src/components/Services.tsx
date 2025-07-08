import React from 'react';
import { Camera, Zap, Globe, TreePine, Car, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Cataratas do Iguaçu",
      description: "Explore uma das 7 Maravilhas Naturais do Mundo com guias especializados",
      features: ["Lado brasileiro e argentino", "Trilhas ecológicas", "Fotos profissionais"],
      image: "/1.jpg"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Usina de Itaipu",
      description: "Conheça a maior usina hidrelétrica do mundo em funcionamento",
      features: ["Tour técnico", "Mirante central", "Centro de recepção"],
      image: "/2.jpg"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Marco das Três Fronteiras",
      description: "Visite o ponto onde Brasil, Argentina e Paraguai se encontram",
      features: ["Vista panorâmica", "Show de luzes", "Gastronomia local"],
      image: "/3.jpg"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Parque das Aves",
      description: "Maior parque de aves da América Latina com espécies exóticas",
      features: ["Mais de 1.400 aves", "Viveiros imersivos", "Borboletário"],
      image: "/4.jpg"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "City Tour",
      description: "Conheça os principais pontos turísticos da cidade",
      features: ["Mesquita Omar Ibn Al-Khattab", "Templo Budista", "Catedral São João Batista"],
      image: "/5.jpg"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pacotes Personalizados",
      description: "Criamos roteiros exclusivos de acordo com seu perfil",
      features: ["Roteiro personalizado", "Guia particular", "Transporte exclusivo"],
      image: "/6.jpg"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de passeios e experiências para tornar sua visita 
            a Foz do Iguaçu inesquecível
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
                
                <button className="w-full btn-primary">
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;