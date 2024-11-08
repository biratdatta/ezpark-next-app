import React from 'react';
import ItemGrid from '@/app/pageComponents/ItemGrid/ItemGrid';
import Header from '@/app/pageComponents/Header/page';
import MathTuition from '@/app/images/event1.jpeg';

interface EventItem {
  id: number;
  title: string;
  imageUrl: string;
}

const eventNames = [
  "Math Tuition", "Music Fest", "Art Expo", "Tech Summit", "Food Carnival",
  "Literature Fair", "Film Festival", "Fashion Week", "Dance Marathon", "Science Conference",
  "Comedy Night", "Wine Tasting", "Street Parade", "Rock Concert", "Theater Show",
  "Craft Market", "Book Signing", "Marathon Run", "Startup Pitch", "Gaming Expo",
  "Photography Workshop", "Cultural Gathering", "Charity Ball", "Eco Forum", "Magic Show",
  "Stand-up Comedy", "Poetry Slam", "Opera Night", "Jazz Evening", "Holiday Market"
];

const items: EventItem[] = eventNames.map((name, index) => ({
  id: index + 1,
  title: name,
  imageUrl: MathTuition.src
}));

const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="mt-20"> 
        <h1 className="text-2xl font-bold px-4 py-4">
          Discover Events around you ...
        </h1>
        <ItemGrid items={items} />
      </div>
    </main>
  );
};

export default Home;
