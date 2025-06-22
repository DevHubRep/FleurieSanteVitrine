"use client";

import { useState } from 'react';

const products = [
  { id: 1, image: '/path-to-product1.png', name: 'Produits' },
  { id: 2, image: '/path-to-product2.png', name: 'Produits' },
  { id: 3, image: '/path-to-product3.png', name: 'Produits' },
  { id: 4, image: '/path-to-product4.png', name: 'Produits' },
];

export default function InfiniteScrollProducts() {
  const [displayedProducts] = useState(products);

  return (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      {displayedProducts.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center rounded-2xl border bg-white p-4 shadow-lg"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-40 w-40 object-contain rounded-lg mb-4"
          />
          <p className="text-lg font-semibold text-gray-700">{product.name}</p>
        </div>
      ))}
    </div>
  );
}