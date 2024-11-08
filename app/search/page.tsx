import React from 'react';
import ItemGrid from '@/app/pageComponents/ItemGrid/ItemGrid';
import Header from '@/app/pageComponents/Header/page';
import Maps from '@/app/images/maps.jpeg';

const items = [
  { id: 1, title: "Cubbon Park - Spot 1", placeName: "Cubbon Park", placeNumber: "P001", imageUrl: Maps.src },
  { id: 2, title: "Cubbon Park - Spot 2", placeName: "Cubbon Park", placeNumber: "P002", imageUrl: Maps.src },
  { id: 3, title: "Lalbagh - Spot A", placeName: "Lalbagh Botanical Garden", placeNumber: "P003", imageUrl: Maps.src },
  { id: 4, title: "Lalbagh - Spot B", placeName: "Lalbagh Botanical Garden", placeNumber: "P004", imageUrl: Maps.src },
   { id: 5, title: "Cubbon Park - Spot 1", placeName: "Cubbon Park", placeNumber: "P001", imageUrl: Maps.src },
  { id: 6, title: "Cubbon Park - Spot 2", placeName: "Cubbon Park", placeNumber: "P002", imageUrl: Maps.src },
  { id: 7, title: "Lalbagh - Spot A", placeName: "Lalbagh Botanical Garden", placeNumber: "P003", imageUrl: Maps.src },
  { id: 8, title: "Lalbagh - Spot B", placeName: "Lalbagh Botanical Garden", placeNumber: "P004", imageUrl: Maps.src },
  
];

const Home: React.FC = () => {
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
