'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { basicConfigSchema, BasicConfigFormData } from '../types/form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BasicConfigForm() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<'datasets' | 'dataSources' | 'promptTemplate' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicConfigFormData>({
    resolver: zodResolver(basicConfigSchema),
  });

  const onNext = (data: BasicConfigFormData) => {
    router.push('/rag');
  };

  const closeModal = () => setModalOpen(null);

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit(onNext)} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">App Name</label>
            <input
              {...register('appName')}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.appName && (
              <p className="text-red-500 text-sm mt-1">{errors.appName.message}</p>
            )}
          </div>
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
        </div>
      </form>

      {/* Card with Buttons */}
      <div className="mt-6 p-4 bg-white border rounded-md shadow-sm">
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => setModalOpen('datasets')}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            Datasets
          </button>
          <button
            type="button"
            onClick={() => setModalOpen('dataSources')}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            Data Sources
          </button>
          <button
            type="button"
            onClick={() => setModalOpen('promptTemplate')}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            Prompt Template
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          type="button"
          disabled
          className="px-4 py-2 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed"
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

      {/* Datasets Modal */}
      {modalOpen === 'datasets' && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-[800px] bg-white border border-gray-300 shadow-lg rounded-md">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Data Set</h2>
            </div>
            <div className="p-4">
              <p className="mb-4">Choose how you want to import your dataset</p>
              <div className="border border-gray-300 rounded-md p-4">
                <div className="flex space-x-2">
                  <label className="flex-1 p-2 border border-gray-300 rounded-md flex items-center justify-center text-sm">
                    <input type="radio" name="dataset" className="mr-2" />
                    My Dataset
                  </label>
                  <label className="flex-1 p-2 border border-gray-300 rounded-md flex items-center justify-center text-sm">
                    <input type="radio" name="dataset" className="mr-2" />
                    Upload Your Own
                  </label>
                  <label className="flex-1 p-2 border border-gray-300 rounded-md flex items-center justify-center text-sm">
                    <input type="radio" name="dataset" className="mr-2" />
                    Import Dataset
                  </label>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2 text-sm font-medium text-gray-700">
                  <div>Name</div>
                  <div>Type</div>
                  <div>Size</div>
                  <div>Action</div>
                  <div>Sample</div>
                  <div>CSV</div>
                  <div>1MB</div>
                  <div><button className="text-blue-500">Edit</button></div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <button onClick={closeModal} className="text-gray-700">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Data Sources Modal */}
      {modalOpen === 'dataSources' && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-[800px] bg-white border border-gray-300 shadow-lg rounded-md">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Data Sources</h2>
            </div>
            <div className="p-4">
              <div className="border border-gray-300 rounded-md p-4">
                <div className="flex space-x-2">
                  <label className="flex-1 p-2 border border-gray-300 rounded-md flex items-center justify-center text-sm">
                    <input type="radio" name="dataSource" className="mr-2" />
                    My Data Sources
                  </label>
                  <label className="flex-1 p-2 border border-gray-300 rounded-md flex items-center justify-center text-sm">
                    <input type="radio" name="dataSource" className="mr-2" />
                    Add New
                  </label>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2 text-sm font-medium text-gray-700">
                  <div>Name</div>
                  <div>Source</div>
                  <div>Connector</div>
                  <div>Status</div>
                  <div>DB1</div>
                  <div>SQL</div>
                  <div>JDBC</div>
                  <div>Active</div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <button onClick={closeModal} className="text-gray-700">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Prompt Template Modal */}
      {modalOpen === 'promptTemplate' && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-[800px] bg-white border border-gray-300 shadow-lg rounded-md">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Prompt Template</h2>
            </div>
            <div className="p-4">
              <div className="border border-gray-300 rounded-md p-4">
                <div className="flex space-x-2">
                  <label className="flex-1 p-2 border border-gray-300 rounded-md flex items-center justify-center text-sm">
                    <input type="radio" name="promptTemplate" className="mr-2" />
                    My Template
                  </label>
                  <label className="flex-1 p-2 border border-gray-300 rounded-md flex items-center justify-center text-sm">
                    <input type="radio" name="promptTemplate" className="mr-2" />
                    Add New
                  </label>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2 text-sm font-medium text-gray-700">
                  <div>System</div>
                  <div>Human</div>
                  <div>Model</div>
                  <div>Industry</div>
                  <div>AI</div>
                  <div>User</div>
                  <div>GPT-3</div>
                  <div>Tech</div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <button onClick={closeModal} className="text-gray-700">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}