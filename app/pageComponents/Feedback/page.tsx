"use client";
import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [review, setReview] = useState('');
  const [message, setMessage] = useState<string | null>(null);  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const feedbackData = { name, email, rating, review };

    try {
      const response = await fetch('http://localhost:3001/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage(result.message);  
       setName('');
        setEmail('');
        setRating(null);
        setReview('');
      } else {
        setMessage('Failed to submit feedback. Please try again.'); // Handle failure
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-lg font-semibold text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-lg font-semibold text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-lg font-semibold text-gray-700">Rating</label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`focus:outline-none transition duration-200 ${
                  rating && rating >= star ? 'text-yellow-500' : 'text-gray-400'
                }`}
              >
                <StarIcon className="h-8 w-8" />
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="review" className="block mb-2 text-lg font-semibold text-gray-700">Review</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 border border-green-400 text-black rounded-md text-lg font-semibold hover:bg-green-500 transition duration-200"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-center text-gray-700">{message}</p>} {/* Display feedback message */}
    </div>
  );
};

export default Feedback;
