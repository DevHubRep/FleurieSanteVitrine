import Image from 'next/image';
import React from 'react';

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      image: '/img/4.png',
      title: 'Organic Hydrating Serum',
      price: '$49',
    },
    {
      id: 2,
      image: '/img/5.png',
      title: 'Organic Night Cream',
      price: '$59',
    },
    {
      id: 3,
      image: '/img/3.png',
      title: 'Hydration Gel',
      price: '$44',
    },
    {
      id: 4,
      image: '/img/1.png',
      title: 'Moisturizing Cream',
      price: '$60',
    },
  ];

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-start mb-8">Nos Produits</h2>

      {/* Container scroll horizontal en mobile, grid en desktop */}
      <div className="flex overflow-x-auto gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[250px] sm:min-w-0 border rounded-lg bg-[#f6f2f3] shadow-md text-center p-4 flex-shrink-0"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-xl font-bold text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
