'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { RadioGroup } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/20/solid';
import Parking1 from '@/app/images/parking1.jpeg'
import Parking2 from '@/app/images/parking2.jpeg'
import Parking3 from '@/app/images/parking3.jpeg'
import Parking4 from '@/app/images/parking4.jpeg'
import toast, { Toaster } from 'react-hot-toast';

const productData = {
  '/product/1': {
    name: 'BTM LAYOUT',
     googleMapsLink: 'https://www.google.com/maps/place/BTM+Layout,+Bengaluru,+Karnataka/@12.9156079,77.6093908,20.54z/data=!4m6!3m5!1s0x3bae14fc91a93031:0xf0afe62576cbdc3f!8m2!3d12.9165757!4d77.6101163!16s%2Fm%2F02rqxr3?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
    price: '₹32',
    images: [
      { src: '/app/images/parking1.jpeg', alt: 'Image 1' },
      { src: '/app/images/parking2.jpeg', alt: 'Image 2' },
      { src: '/app/images/parking3.jpeg', alt: 'Image 3' },
      { src: '/app/images/parking4.jpeg', alt: 'Image 4' },
    ],
    sizes: [
      { name: '10AM', inStock: false },
      { name: '12PM', inStock: true },
      { name: '2PM', inStock: true },
      { name: '4PM', inStock: false },
      { name: '6PM', inStock: false },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 202 },
  },
  '/product/2': {
    name: 'HSR LAYOUT',
    price: '₹34',
    googleMapsLink: 'https://www.google.com/maps/place/HSR+Layout,+Bengaluru,+Karnataka/@12.9172017,77.6411376,17.99z/data=!4m6!3m5!1s0x3bae1491bfdc6ecd:0xf232718439fbc879!8m2!3d12.9121181!4d77.6445548!16zL20vMDd2ZjQ4?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
    images: [
      { src: '/app/images/parking1.jpg', alt: 'Image 1' },
      { src: '/images/parking2.jpg', alt: 'Image 2' },
      { src: '/images/parking3.jpg', alt: 'Image 3' },
      { src: '/images/parking4.jpg', alt: 'Image 4' },
    ],
    sizes: [
      { name: '10AM', inStock: true },
      { name: '12PM', inStock: true },
      { name: '2PM', inStock: true },
      { name: '4PM', inStock: true },
      { name: '6PM', inStock: false },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 127 },
  },
  '/product/3': {
    name: 'Cubbon Park',
    price: '₹44',
    googleMapsLink: 'https://www.google.com/maps/place/Shri+Ch%C4%81marajendra+(Cubbon)+Park/@12.9769779,77.5944986,17.54z/data=!4m6!3m5!1s0x3bae1673e7d0672f:0xc62ca5a6e943dfb8!8m2!3d12.9779291!4d77.5951549!16zL20vMGJtN2Q1?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
    images: [
      { src: '/app/images/parking1.jpg', alt: 'Image 1' },
      { src: '/images/parking2.jpg', alt: 'Image 2' },
      { src: '/images/parking3.jpg', alt: 'Image 3' },
      { src: '/images/parking4.jpg', alt: 'Image 4' },
    ],
    sizes: [
      { name: '10AM', inStock: false },
      { name: '12PM', inStock: true },
      { name: '2PM', inStock: true },
      { name: '4PM', inStock: true },
      { name: '6PM', inStock: true },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 1417 },
  },
 '/product/4': {
    name: 'Indranagar',
    price: '₹54',
    googleMapsLink: 'https://www.google.com/maps/place/Indiranagar,+Bengaluru,+Karnataka/@12.9710555,77.6379537,19.89z/data=!4m6!3m5!1s0x3bae16a418770391:0xb50f46b826501036!8m2!3d12.9783692!4d77.6408356!16zL20vMDZ5M3Zj?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
    images: [
      { src: '/app/images/parking1.jpg', alt: 'Image 1' },
      { src: '/images/parking2.jpg', alt: 'Image 2' },
      { src: '/images/parking3.jpg', alt: 'Image 3' },
      { src: '/images/parking4.jpg', alt: 'Image 4' },
    ],
    sizes: [
      { name: '10AM', inStock: true },
      { name: '12PM', inStock: true },
      { name: '2PM', inStock: true },
      { name: '4PM', inStock: true },
      { name: '6PM', inStock: false },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 127 },
  },
  '/product/5': {
    name: 'Jayanagar',
    price: '₹46',
    googleMapsLink: ' https://www.google.com/maps/place/Jayanagar,+Bengaluru,+Karnataka/@12.9290492,77.5835672,16.12z/data=!4m6!3m5!1s0x3bae15986765d7d9:0xbba2fea7014e5087!8m2!3d12.9308107!4d77.5838577!16zL20vMDRjMzBx?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
    images: [
      { src: '/app/images/parking1.jpg', alt: 'Image 1' },
      { src: '/images/parking2.jpg', alt: 'Image 2' },
      { src: '/images/parking3.jpg', alt: 'Image 3' },
      { src: '/images/parking4.jpg', alt: 'Image 4' },
    ],
    sizes: [
      { name: '10AM', inStock: false },
      { name: '12PM', inStock: false },
      { name: '2PM', inStock: true },
      { name: '4PM', inStock: true },
      { name: '6PM', inStock: false },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 1171 },
  },
  '/product/6': {
    name: 'Kormangala',
    price: '₹60',
    googleMapsLink: 'https://www.google.com/maps/place/Koramangala,+Bengaluru,+Karnataka/@12.933864,77.6267024,21z/data=!4m6!3m5!1s0x3bae144ed898fc2d:0x1681f38e8c00ae56!8m2!3d12.9352403!4d77.624532!16zL20vMDZibTR6?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
    images: [
      { src: '/app/images/parking1.jpg', alt: 'Image 1' },
      { src: '/images/parking2.jpg', alt: 'Image 2' },
      { src: '/images/parking3.jpg', alt: 'Image 3' },
      { src: '/images/parking4.jpg', alt: 'Image 4' },
    ],
    sizes: [
      { name: '10AM', inStock: false },
      { name: '12PM', inStock: true },
      { name: '2PM', inStock: true },
      { name: '4PM', inStock: false },
      { name: '6PM', inStock: false },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 1171 },
  },
  '/product/7': {
    name: 'Sarjapur',
    price: '₹50',
    googleMapsLink: 'https://www.google.com/maps/place/Motherhood+parking/@12.9109118,77.6818431,17z/data=!4m10!1m2!2m1!1sSarjapur+Main+Rd+parking!3m6!1s0x3bae130c896a93db:0xb4d832230ae54fdd!8m2!3d12.9185716!4d77.6726076!15sChhTYXJqYXB1ciBNYWluIFJkIHBhcmtpbmdaGiIYc2FyamFwdXIgbWFpbiByZCBwYXJraW5nkgELcGFya2luZ19sb3SaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTTJiRFZMVWtobkVBReABAPoBBAgAED8!16s%2Fg%2F11hzv0nfcm?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
    images: [
      { src: '/app/images/parking1.jpg', alt: 'Image 1' },
      { src: '/images/parking2.jpg', alt: 'Image 2' },
      { src: '/images/parking3.jpg', alt: 'Image 3' },
      { src: '/images/parking4.jpg', alt: 'Image 4' },
    ],
    sizes: [
      { name: '10AM', inStock: true },
      { name: '12PM', inStock: true },
      { name: '2PM', inStock: true },
      { name: '4PM', inStock: true },
      { name: '6PM', inStock: false },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 1173 },
  },
  '/product/8': {
    name: 'Lal Bagh- Spot B',
    price: '₹20',
    googleMapsLink: 'https://www.google.com/maps/place/WHXR%2BPF7+Lalbagh+Parking,+Lal+Bagh+Rd,+Mavalli,+Bengaluru,+Karnataka+560004/@12.9493785,77.5882535,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15c6ad8ea68d:0x20820f0f170c9ca8!8m2!3d12.9492854!4d77.5912237!16s%2Fg%2F11cknf599c?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
    images: [
      { src: '/app/images/parking1.jpg', alt: 'Image 1' },
      { src: '/images/parking2.jpg', alt: 'Image 2' },
      { src: '/images/parking3.jpg', alt: 'Image 3' },
      { src: '/images/parking4.jpg', alt: 'Image 4' },
    ],
    sizes: [
      { name: '10AM', inStock: false },
      { name: '12PM', inStock: false },
      { name: '2PM', inStock: false },
      { name: '4PM', inStock: true },
      { name: '6PM', inStock: false },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 1137 },
  },
  '/product/9': {
    name: 'NS Palya',
    price: '₹19',
    googleMapsLink: 'https://www.google.com/maps/place/Parking/@12.9493777,77.5702288,14z/data=!4m10!1m2!2m1!1sNS+Palya+Parking!3m6!1s0x3bae1502c08d7713:0x219cfedd2186e137!8m2!3d12.9124534!4d77.6062749!15sChBOUyBQYWx5YSBQYXJraW5nkgEUcHVibGljX3Bhcmtpbmdfc3BhY2XgAQA!16s%2Fg%2F11c7ss02s1?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
    images: [
      { src: '/app/images/parking1.jpg', alt: 'Image 1' },
      { src: '/images/parking2.jpg', alt: 'Image 2' },
      { src: '/images/parking3.jpg', alt: 'Image 3' },
      { src: '/images/parking4.jpg', alt: 'Image 4' },
    ],
    sizes: [
      { name: '10AM', inStock: false },
      { name: '12PM', inStock: false },
      { name: '2PM', inStock: true },
      { name: '4PM', inStock: true },
      { name: '6PM', inStock: true },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 1174 },
  },
    '/product/10': {
    name: 'Sarjapur',
    price: '₹14',
    googleMapsLink: 'https://www.google.com/maps/place/Car+Parking,Sarjapur+Cricket+Arena/@12.9493251,77.4260195,11z/data=!4m10!1m2!2m1!1sSarjapur+Parking!3m6!1s0x3bae73bd1966eba3:0x8f14362baf2fec0e!8m2!3d12.8695625!4d77.7588125!15sChBTYXJqYXB1ciBQYXJraW5nkgELcGFya2luZ19sb3TgAQA!16s%2Fg%2F11v67hql4v?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
    images: [
      { src: '/app/images/parking1.jpg', alt: 'Image 1' },
      { src: '/images/parking2.jpg', alt: 'Image 2' },
      { src: '/images/parking3.jpg', alt: 'Image 3' },
      { src: '/images/parking4.jpg', alt: 'Image 4' },
    ],
    sizes: [
      { name: '10AM', inStock: true },
      { name: '12PM', inStock: true },
      { name: '2PM', inStock: true },
      { name: '4PM', inStock: true },
      { name: '6PM', inStock: true },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 1157 },
  },
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}


function generateBookingReference() {
  // Generate a random string of letters and numbers
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const length = 8;
  let reference = '';
  
  // Get current date in YYMMDD format
  const date = new Date();
  const dateString = date.getFullYear().toString().substr(-2) +
    String(date.getMonth() + 1).padStart(2, '0') +
    String(date.getDate()).padStart(2, '0');
  
  // Generate random characters
  for (let i = 0; i < length; i++) {
    reference += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  // Combine date and random string
  return `PKG-${dateString}-${reference}`;
}


export default function ProductPage() {
  const pathname = usePathname();
  const product = productData[pathname] || productData['/path1'];
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
     const [availableSpots, setAvailableSpots] = useState(0);
  const [totalSpots, setTotalSpots] = useState(0);
    const [bookingReference, setBookingReference] = useState('');

  useEffect(() => {
    setSelectedSize(product.sizes.find((size) => size.inStock) || product.sizes[0]);
  }, [pathname]);

 const handleBooking = () => {
    const reference = generateBookingReference();
    const currentDate = new Date().toLocaleDateString();
    
    // Create booking details object
    const bookingDetails = {
      reference,
      date: currentDate,
      location: product.name,
      timeSlot: selectedSize.name,
      price: product.price,
      status: 'Active'
    };
    
    // Save booking
    saveBooking(bookingDetails);
    
    // Show toast notification
    toast((t) => (
      <div>
        <p className="font-bold">Booking Confirmed!</p>
        <p>Location: {product.name}</p>
        <p>Time: {selectedSize.name}</p>
        <p>Price: {product.price}</p>
        <p className="mt-2 font-bold">Booking Reference: {reference}</p>
        <p className="text-sm text-gray-600 mt-1">Booking saved to your history</p>
      </div>
    ), {
      duration: 6000,
      style: {
        padding: '16px',
        borderRadius: '8px',
        background: '#fff',
        color: '#333',
      },
    });
  };

  const saveBooking = (bookingDetails) => {
  // Get existing bookings
  const existingBookings = JSON.parse(localStorage.getItem('parkingBookings') || '[]');
  
  // Add new booking
  const updatedBookings = [...existingBookings, bookingDetails];
  
  // Save to localStorage
  localStorage.setItem('parkingBookings', JSON.stringify(updatedBookings));
};




useEffect(() => {
    const fetchParkingSpots = () => {
      fetch('http://127.0.0.1:5001/api/parking_spots')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch parking spots data');
          }
          return response.json();
        })
        .then((data) => {
          setAvailableSpots(data.available_spots);
          setTotalSpots(data.total_spots);
        })
        .catch((error) => {
          console.error('Error fetching parking spots:', error);
          toast.error('Unable to load parking spots data');
        });
    };

    // Fetch data initially and then every 2 seconds
    fetchParkingSpots();
    const intervalId = setInterval(fetchParkingSpots, 5000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);



  

  return (
  <div className="bg-white">
    <Toaster />
    <div className="pt-6">
      {/* Main container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
          <p className="mt-2 text-xl text-gray-700">{product.price}</p>
        </div>

      

        {/* Image Gallery */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-x-8">
          {/* Large Image */}
          <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg hidden lg:block">
            <Image
              alt={product.images[0].alt}
              src={Parking1}
              className="w-full h-full object-cover object-center"
              width={300}
              height={400}
            />
          </div>

          {/* Vertical Stack of Two Images */}
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            {product.images.slice(1, 3).map((image, index) => (
              <div key={index} className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <Image
                  alt={image.alt}
                  src={Parking4}
                  className="w-full h-full object-cover object-center"
                  width={300}
                  height={200}
                />
              </div>
            ))}
          </div>

          {/* Single Image */}
          <div className="aspect-w-4 aspect-h-5 sm:aspect-w-3 sm:aspect-h-4 overflow-hidden rounded-lg">
            <Image
              alt={product.images[3].alt}
              src={Parking3}
              className="w-full h-full object-cover object-center"
              width={300}
              height={400}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-12 grid lg:grid-cols-3 lg:gap-x-8">
          {/* Description Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold text-gray-900">Description</h2>
            <p className="mt-4 text-base text-gray-700">{product.description}</p>

            {/* Highlights */}
            <h3 className="mt-10 text-3xl font-semibold text-gray-900">Highlights</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-lg text-gray-600">
              {product.highlights.map((highlight, index) => (
                <li key={index} className="text-gray-700">
                  {highlight}
                </li>
              ))}
            </ul>

            {/* Details */}
            <h3 className="mt-10 text-3xl font-semibold text-gray-900">Details</h3>
            <p className="mt-2 text-lg text-gray-700">{product.details}</p>
          </div>

          {/* Booking Section */}
          <div className="lg:mt-0">
            {/* Rating Section */}
            <div className="mb-6 flex items-center">
              {[...Array(5)].map((_, rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    product.reviews.average > rating ? 'text-yellow-500' : 'text-gray-300',
                    'h-5 w-5 flex-shrink-0'
                  )}
                />
              ))}
              <p className="sr-only">{product.reviews.average} out of 5 stars</p>
              <span className="ml-3 text-sm font-medium text-indigo-600">
                {product.reviews.totalCount} reviews
              </span>
            </div>

            {/* Parking Info */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900">Parking Information</h4>
              <p className="mt-2 text-base">
                <span className="font-semibold">Available Spots:</span> {availableSpots}
              </p>
              <p className="mt-1 text-base">
                <span className="font-semibold">Total Spots:</span> {totalSpots}
              </p>
            </div>

            {/* Time Schedule */}
            <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-6">
              <RadioGroup.Label className="text-lg font-semibold text-gray-900">
                Time Schedule
              </RadioGroup.Label>
              <div className="mt-4 grid grid-cols-4 gap-4">
                {product.sizes.map((size) => (
                  <RadioGroup.Option
                    key={size.name}
                    value={size}
                    disabled={!size.inStock}
                    className={({ checked }) =>
                      classNames(
                        size.inStock
                          ? 'cursor-pointer bg-white text-gray-900 shadow-sm hover:shadow-lg transition'
                          : 'cursor-not-allowed bg-gray-100 text-gray-300',
                        checked ? 'ring-2 ring-indigo-500' : '',
                        'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase'
                      )
                    }
                  >
                    <span>{size.name}</span>
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>

            {/* Booking Buttons */}
            <button
              onClick={handleBooking}
              className="mt-6 w-full flex items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
            >
              Book Your Time Slot
            </button>

            <a
              href={product.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full flex items-center justify-center rounded-md bg-yellow-500 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 transition"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

}
