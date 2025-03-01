'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SecurityOverview() {
  const router = useRouter();
  const [securityRef, setSecurityRef] = useState('');

  const onPrevious = () => {
    router.push('/workflows'); // Navigates back to the workflows page
  };

  const onNext = () => {
    router.push('/final-config'); // Adjust this route as needed for the next page
  };

  return (
    <div className="p-6">
      {/* Header with Security Overview title and Advance Option label */}

      {/* Input Box */}
      <div className="p-4 border rounded-md mb-4">
        <input
          type="text"
          value={securityRef}
          onChange={(e) => setSecurityRef(e.target.value)}
          placeholder="Type @ reference for security overview"
          className="w-full p-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrevious}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={onNext}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
