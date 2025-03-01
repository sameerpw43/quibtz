'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Workflows() {
  const router = useRouter();
  const [workflowReference, setWorkflowReference] = useState('');

  const onPrevious = () => {
    router.push('/rag'); // Navigates back to the rag page
  };

  const onNext = () => {
    router.push('/security-overview'); // Navigates to the security overview page
  };

  const handleAddWorkflow = () => {
    // Implement any additional functionality for adding a workflow if needed
    console.log('Add Workflow clicked');
  };

  return (
    <div className="p-6">
      {/* Header Box */}
      <div className="flex justify-between items-center bg-gray-200 p-4 rounded-md mb-4">
        <h2 className="text-xl font-medium">Work Flow</h2>
        <button
          type="button"
          onClick={handleAddWorkflow}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Work Flow
        </button>
      </div>

      {/* Workflow Input Box */}
      <div className="p-4 border rounded-md mb-4">
        <input
          type="text"
          value={workflowReference}
          onChange={(e) => setWorkflowReference(e.target.value)}
          placeholder="Type @ refrence for workflow"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
