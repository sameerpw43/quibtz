'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCog, FaRobot, FaSitemap, FaLock, FaEye, FaUser } from 'react-icons/fa';

export default function Sidebar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);

  const navItems = [
    { name: 'Basic Config', path: '/basic-config', icon: <FaCog /> },
    { name: 'RAG', path: '/rag', icon: <FaRobot /> },
    { name: 'Workflows', path: '/workflows', icon: <FaSitemap /> },
    { name: 'Security Overview', path: '/security-overview', icon: <FaLock /> },
    { name: 'Overview', path: '/overview', icon: <FaEye /> },
  ];

  return (
    <div className="w-64 h-screen bg-gray-100 text-gray-700 flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-black">Qubitz</h1>
      </div>
      <div className="px-4 py-2 ">
        <h2 className="text-sm font-semibold text-gray-600">Configuration Steps</h2>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`flex items-center px-4 py-2 rounded-md transition-colors ${
              activeTab === item.path
                ? 'bg-gray-300 text-black'
                : 'text-gray-700 hover:bg-gray-200 hover:text-black'
            }`}
            onClick={() => setActiveTab(item.path)}
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <FaUser />
          <span className="text-gray-700">username</span>
        </div>
      </div>
    </div>
  );
}