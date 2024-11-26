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
     googleMapsLink: 'https://www.google.com/maps/place/Parking+Spot+A',
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
      { name: '4PM', inStock: true },
      { name: '6PM', inStock: false },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 117 },
  },
  '/product/2': {
    name: 'HSR LAYOUT',
    price: '₹34',
    googleMapsLink: 'https://www.google.com/maps/place/Parking+Spot+A',
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
      { name: '6PM', inStock: false },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 117 },
  },
  '/product/3': {
    name: 'HSR LAYOUT',
    price: '₹34',
    googleMapsLink: 'https://www.google.com/maps/place/Parking+Spot+A',
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
      { name: '6PM', inStock: false },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 117 },
  },
 '/product/4': {
    name: 'HSR LAYOUT',
    price: '₹34',
    googleMapsLink: 'https://www.google.com/maps/place/Parking+Spot+A',
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
      { name: '6PM', inStock: false },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 117 },
  },
  '/product/5': {
    name: 'HSR LAYOUT',
    price: '₹34',
    googleMapsLink: 'https://www.google.com/maps/place/Parking+Spot+A',
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
      { name: '6PM', inStock: false },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 117 },
  },
  '/product/6': {
    name: 'HSR LAYOUT',
    price: '₹34',
    googleMapsLink: 'https://www.google.com/maps/place/Parking+Spot+A',
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
      { name: '6PM', inStock: false },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 117 },
  },
  '/product/7': {
    name: 'HSR LAYOUT',
    price: '₹34',
    googleMapsLink: 'https://www.google.com/maps/place/Parking+Spot+A',
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
      { name: '6PM', inStock: false },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 117 },
  },
  '/product/8': {
    name: 'HSR LAYOUT',
    price: '₹34',
    googleMapsLink: 'https://www.google.com/maps/place/Parking+Spot+A',
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
      { name: '6PM', inStock: false },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 117 },
  },
  '/product/9': {
    name: 'HSR LAYOUT',
    price: '₹34',
    googleMapsLink: 'https://www.google.com/maps/place/Parking+Spot+A',
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
      { name: '6PM', inStock: false },
    ],
    description: 'Parking space for all types of vehicles.',
    highlights: ['Good security', 'Spacious', 'Easy access'],
    details: 'This is the best parking option in the area.',
    reviews: { average: 4, totalCount: 117 },
  },
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductPage() {
  const pathname = usePathname();
  const product = productData[pathname] || productData['/path1'];
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  useEffect(() => {
    setSelectedSize(product.sizes.find((size) => size.inStock) || product.sizes[0]);
  }, [pathname]);

  const handleBooking = () => {
    toast.success(`Booked ${selectedSize.name} at ${product.name} for ${product.price}`);
  };


  return (
    <div className="bg-white">
      <Toaster/>
      <div className="pt-6">
        <div className="mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
        </div>

     {/* Image Gallery */}
<div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
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


        {/* Product Information */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
  {/* Description Section */}
  <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
    <h2 className="text-2xl font-semibold text-gray-900">Description</h2>
    <p className="mt-4 text-base text-gray-700">{product.description}</p>

    {/* Highlights */}
    <h3 className="text-lg font-semibold text-gray-900 mt-10">Highlights</h3>
    <ul role="list" className="list-disc space-y-2 pl-4 text-sm text-gray-600">
      {product.highlights.map((highlight, index) => (
        <li key={index} className="text-gray-700">
          {highlight}
        </li>
      ))}
    </ul>

    {/* Details */}
    <h3 className="text-lg font-semibold text-gray-900 mt-10">Details</h3>
    <p className="mt-2 text-sm text-gray-700">{product.details}</p>
  </div>

  {/* Time Slot Selection */}
  <div className="mt-10 lg:row-span-3 lg:mt-0">
    {/* Rating Section */}
    <div className="flex items-center mb-6">
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

    {/* Time Schedule */}
    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-6">
      <RadioGroup.Label className="text-lg font-semibold text-gray-900">Time Schedule</RadioGroup.Label>
      <div className="grid grid-cols-4 gap-4 mt-4">
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

    {/* Book Button */}
    <button
      onClick={handleBooking}
      className="mt-10 w-full flex items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
    >
      Book Your Time Slot
    </button>

    {/* Google Maps Button */}
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
  );
}
