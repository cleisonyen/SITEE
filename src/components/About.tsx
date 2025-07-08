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
              Your Experience is Our
              <span className="text-green-600 block">Priority</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              EBL Tours International was born from the passion to show the natural beauties of Foz do Iguaçu. 
              With over a decade of experience, we are specialists in creating unforgettable moments 
              for our clients from around the world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Excellence</h3>
                  <p className="text-gray-600 text-sm">Recognized for the quality of our services</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Safety</h3>
                  <p className="text-gray-600 text-sm">All safety protocols followed</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Passion</h3>
                  <p className="text-gray-600 text-sm">Genuine love for what we do</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Punctuality</h3>
                  <p className="text-gray-600 text-sm">Always on time as agreed</p>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/5545999999999?text=Hello!%20I'd%20like%20to%20know%20more%20about%20EBL%20Tours%20International%20and%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Contact Us
            </a>
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