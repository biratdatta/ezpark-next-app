// components/QRCodeGenerator.tsx
import React from "react";
import QRCode from "qrcode.react";

// Define the types within the same file
type BookingDetails = {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  [key: string]: string; // Extendable for additional fields
};

interface QRCodeGeneratorProps {
  booking: BookingDetails;
}


const generate = () => {
  console.log('QR CODE GENERATED');
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ booking }) => {
  const bookingData = JSON.stringify(booking);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-lg font-bold">Your Booking QR Code</h2>
      <QRCode value={bookingData} size={256} />

      <button type="button" onClick={generate}> QR CODE</button>
      <p className="text-sm text-gray-600">
        Scan this QR code to view your booking details.
      </p>
    </div>
  );
};

export default QRCodeGenerator;
