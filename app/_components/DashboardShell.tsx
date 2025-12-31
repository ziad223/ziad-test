'use client';

import { useState, ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function DashboardShell({
  children,
}: {
  children: ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'lg:ml-64' : 'lg:ml-16'
        }`}
      >
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
