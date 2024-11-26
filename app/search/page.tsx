'use client'

import React, { useEffect, useState } from 'react';
import ItemGrid from '@/app/pageComponents/ItemGrid/ItemGrid';
import Header from '@/app/pageComponents/Header/page';

const Home: React.FC = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:3001/items');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <div className="mt-20">
        <h1 className="text-2xl font-bold px-4 py-4">
          Discover Parking Spots around you ...
        </h1>
        <ItemGrid items={items} />
      </div>
    </main>
  );
};

export default Home;
