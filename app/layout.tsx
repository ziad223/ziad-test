'use client';

import { useState, ReactNode } from 'react';
import Sidebar from './_components/Sidebar'
import Header from './_components/Header'

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>ziad test</title>
      </head>
      <body>
        <div className="min-h-screen bg-gray-50">
          <Sidebar 
          />
          
          <div className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-16'}`}>
            <Header />
            <main className="p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}