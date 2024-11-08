import React from 'react';
import ItemGrid from '@/app/pageComponents/ItemGrid/ItemGrid';
import Header from '@/app/pageComponents/Header/page';
import MathTuition from '@/app/images/maps.jpeg';

interface EventItem {
  id: number;
  title: string;
  imageUrl: string;
}
const eventNames = [
  "Cubbon Park", "Lalbagh Botanical Garden", "UB City", "Orion Mall", "Bannerghatta National Park",
  "Commercial Street", "Brigade Road", "ISKCON Temple", "M.G. Road", "Vidhana Soudha",
  "Chitrakala Parishath", "Ranga Shankara", "National Gallery of Modern Art", "Phoenix Marketcity", "Innovative Film City",
  "Indiranagar 100 Feet Road", "Bangalore Palace", "Visvesvaraya Industrial & Technological Museum", "Wonderla Amusement Park", "Forum Mall Koramangala",
  "Jawaharlal Nehru Planetarium", "Toit Brewpub", "Skyye Lounge", "Church Street", "Artisans Cafe",
  "Chowdiah Memorial Hall", "Koshy's Restaurant", "St. Mark's Cathedral", "Christ University Auditorium", "Russell Market"
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
