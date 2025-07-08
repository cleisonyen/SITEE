import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: '/7.jpg', alt: 'Cataratas do Iguaçu - Vista panorâmica' },
    { src: '/8.jpg', alt: 'Usina de Itaipu - Vista aérea' },
    { src: '/9.jpg', alt: 'Marco das Três Fronteiras' },
    { src: '/10.jpg', alt: 'Parque das Aves - Tucano' },
    { src: '/11.jpg', alt: 'Cataratas - Trilha da Garganta do Diabo' },
    { src: '/12.jpg', alt: 'City Tour - Mesquita' },
    { src: '/13.jpg', alt: 'Cataratas - Lado argentino' },
    { src: '/14.jpg', alt: 'Itaipu - Turbinas' },
    { src: '/15.jpg', alt: 'Parque das Aves - Borboletário' },
    { src: '/16.jpg', alt: 'Marco - Show de luzes' },
    { src: '/17.jpg', alt: 'Cataratas - Arco-íris' },
    { src: '/18.jpg', alt: 'City Tour - Templo Budista' },
    { src: '/19.jpg', alt: 'Cataratas - Passeio de barco' },
    { src: '/20.jpg', alt: 'Vista geral de Foz do Iguaçu' }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Galeria de Fotos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja alguns dos momentos incríveis que nossos clientes vivenciaram 
            em nossos passeios
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              
              <img 
                src={images[selectedImage].src} 
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                <p className="text-sm">{images[selectedImage].alt}</p>
                <p className="text-xs text-gray-300 mt-1">
                  {selectedImage + 1} de {images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;