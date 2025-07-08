import React from 'react';
import { Award, Shield, Heart, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Sua Experiência é Nossa
              <span className="text-green-600 block">Prioridade</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A EBL Tours nasceu da paixão por mostrar as belezas naturais de Foz do Iguaçu. 
              Com mais de uma década de experiência, somos especialistas em criar momentos 
              inesquecíveis para nossos clientes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Excelência</h3>
                  <p className="text-gray-600 text-sm">Reconhecidos pela qualidade dos nossos serviços</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Segurança</h3>
                  <p className="text-gray-600 text-sm">Todos os protocolos de segurança seguidos</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Paixão</h3>
                  <p className="text-gray-600 text-sm">Amor genuíno pelo que fazemos</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Pontualidade</h3>
                  <p className="text-gray-600 text-sm">Sempre no horário combinado</p>
                </div>
              </div>
            </div>

            <button className="btn-primary">
              Conheça Nossa História
            </button>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="/top1.jpg" 
                alt="Cataratas do Iguaçu" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="/top2.jpg" 
                alt="Usina de Itaipu" 
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-8">
              <img 
                src="/top3.jpg" 
                alt="Marco das Três Fronteiras" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;