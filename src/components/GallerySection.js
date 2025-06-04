import React from 'react';

const GallerySection = () => {
  const images = [
    "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0kJQj1S7fYZlcpNaeLVjJvm95wniIQo8GFd7H",
    "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0JdCAxripYIkKhaEN0eCX7zGogwrU3sn8TcHm",
    "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0jhtc84zprvgIPmTtsSNY2ecybAh5LloqCaQw",
    "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0NVY7PXd8ASzOYnuUx9evHl1k3cs0iWKGPRJ7",
    "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0oj5186gDjdvqUQH6XhKYIiaSc3LCtrM1fen0",
    "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0mCerktfIJbfOXQWPgDwNtHSspUETxakjAG2u"
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Trabajos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white p-2"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={img} 
                  alt={`Trabajo realizado por Publi Car Lujos ${index + 1}`}
                  className="w-full h-full object-contain hover:scale-100 transition duration-500"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

// DONE