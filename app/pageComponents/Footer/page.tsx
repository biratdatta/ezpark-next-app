// components/Footer.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/icons/paramarsh.png'
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Icons for social media

const Footer: React.FC = () => {
  return (
    <footer className=" w-full py-6 mt-8">
      <div className="border-t border-black mb-4" />
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left Section: Logo and Company Info */}
        <div className="flex items-center">
          {/* Company Logo */}
          <Image
            src={Logo}
            alt="Company Logo"
            width={40}
            height={40}
          />
          <span className="ml-3 text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Paramarsh Dev All rights reserved.
          </span>
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
