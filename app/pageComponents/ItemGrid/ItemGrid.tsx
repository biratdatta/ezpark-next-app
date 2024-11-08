// ItemGrid Component (Updated)
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GridItem {
  id: number;
  title: string;
  placeName: string;
  placeNumber: string;
  imageUrl: string;
}

interface ItemGridProps {
  items: GridItem[];
}

const colors = [
  'bg-orange-500', 'bg-green-500', 'bg-red-500', 'bg-blue-500',
  'bg-purple-500', 'bg-yellow-500', 'bg-teal-500', 'bg-pink-500'
];

const ItemGrid: React.FC<ItemGridProps> = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.placeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.placeNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by spot title, place name, or place number..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-h-[80vh] overflow-y-auto">
        {filteredItems.map(item => (
          <Link key={item.id} href={`/product/${item.id}`} passHref legacyBehavior>
            <a
              className={`relative overflow-hidden ${colors[item.id % colors.length]} rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer h-56`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-2 bg-black bg-opacity-30">
                <h3 className="text-white text-xl font-bold truncate w-full text-center">{item.title}</h3>
                <p className="text-white text-sm text-center">{item.placeName}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemGrid;
