// components/Footer.tsx
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/icons/paramarsh.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [city, setCity] = useState<string | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCity = async (latitude: number, longitude: number) => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPENCAGE_API_KEY;
        if (!apiKey) throw new Error('API key missing');

        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=47d970d8074247f4a87e60107f1cee2f`
        );

        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const components = data.results[0].components;
          const cityName =
            components._normalized_city ||
            components.city ||
            components.town ||
            components.village ||
            components.neighbourhood ||
            components.suburb;
          setCity(cityName || 'Location unavailable');
        } else {
          setLocationError('Location unavailable');
        }
      
      }
      
      catch (error) {
        console.error('Error fetching location:', error);
        setLocationError('Error fetching location');
      }
    };

    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchCity(latitude, longitude);
        },
        () => setLocationError('Location permission denied')
      );
    } else {
      setLocationError('Geolocation not supported');
    }
  }, []);

  return (
    <footer className="w-full py-6 mt-8">
      <div className="border-t border-black mb-4" />
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Image src={Logo} alt="Company Logo" width={40} height={40} />
          <span className="ml-3 text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Paramarsh Dev. All rights reserved.
          </span>
          {city ? (
            <span className="ml-3 text-sm text-gray-600">| {city}</span>
          ) : (
            locationError && (
              <span className="ml-3 text-sm text-gray-600">| {locationError}</span>
            )
          )}
        </div>

        <div className="flex items-center space-x-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-gray-600 hover:text-gray-900" size={24} />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-600 hover:text-gray-900" size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
