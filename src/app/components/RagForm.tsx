'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ragSchema, RagFormData } from '../types/form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RagForm() {
  const router = useRouter();
  const [configs, setConfigs] = useState<RagFormData[]>([]); // Store multiple configurations

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RagFormData>({
    resolver: zodResolver(ragSchema),
  });

  const onPrevious = () => {
    router.push('/basic-config');
  };

  const onNext = (data: RagFormData) => {
    router.push('/workflows');
  };

  const handleAddConfig = (data: RagFormData) => {
    setConfigs((prevConfigs) => [...prevConfigs, data]); // Add new config to the array
    reset(); // Clear the form after adding
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit(onNext)} className="space-y-6">
        {/* Knowledge Base Name */}
        <div>
          <label className="block mb-1 font-medium">Knowledge Base Name</label>
          <input
            {...register('knowledgeBaseName')}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.knowledgeBaseName && (
            <p className="text-red-500 text-sm mt-1">{errors.knowledgeBaseName.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <input
            {...register('description')}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>

        {/* Pattern and Embeddings */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium">Pattern</label>
            <select
              {...register('pattern')}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Pattern</option>
              <option value="pattern1">Pattern 1</option>
              <option value="pattern2">Pattern 2</option>
              <option value="pattern3">Pattern 3</option>
            </select>
            {errors.pattern && (
              <p className="text-red-500 text-sm mt-1">{errors.pattern.message}</p>
            )}
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-medium">Embeddings</label>
            <select
              {...register('embeddings')}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Embeddings</option>
              <option value="embedding1">Embedding 1</option>
              <option value="embedding2">Embedding 2</option>
              <option value="embedding3">Embedding 3</option>
            </select>
            {errors.embeddings && (
              <p className="text-red-500 text-sm mt-1">{errors.embeddings.message}</p>
            )}
          </div>
        </div>

        {/* Metrics */}
        <div>
          <label className="block mb-1 font-medium">Metrics</label>
          <select
            {...register('metrics')}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Metrics</option>
            <option value="metric1">Metric 1</option>
            <option value="metric2">Metric 2</option>
            <option value="metric3">Metric 3</option>
          </select>
          {errors.metrics && (
            <p className="text-red-500 text-sm mt-1">{errors.metrics.message}</p>
          )}
        </div>

        {/* Vector DB */}
        <div>
          <label className="block mb-1 font-medium">Vector DB</label>
          <input
            {...register('vectorDb')}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.vectorDb && (
            <p className="text-red-500 text-sm mt-1">{errors.vectorDb.message}</p>
          )}
        </div>

        {/* Add Configuration Button */}
        <div>
          <button
            type="button"
            onClick={handleSubmit(handleAddConfig)} // Trigger form submission for adding config
            className="w-full p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
          >
            Add Configuration
          </button>
        </div>

        {/* Configuration Table */}
        {configs.length > 0 && (
          <div className="mt-4 border border-gray-300 rounded-md p-4">
            <div className="grid grid-cols-7 gap-2 text-sm font-medium text-gray-700">
              <div>KB Name</div>
              <div>Description</div>
              <div>Pattern</div>
              <div>Chunking</div>
              <div>Embeddings</div>
              <div>Metrics</div>
              <div>Vector DB</div>
              {configs.map((config, index) => (
                <React.Fragment key={index}>
                  <div>{config.knowledgeBaseName}</div>
                  <div>{config.description}</div>
                  <div>{config.pattern}</div>
                  <div>Default</div> {/* Static value for Chunking */}
                  <div>{config.embeddings}</div>
                  <div>{config.metrics}</div>
                  <div>{config.vectorDb}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </form>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={onPrevious}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleSubmit(onNext)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}