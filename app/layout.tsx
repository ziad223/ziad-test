'use client';

import { useState } from 'react';
import Sidebar from './_components/Sidebar'
import Header from './_components/Header'

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html>
        <script src="https://cdn.tailwindcss.com"></script>
    
      <body>
  <div className="min-h-screen bg-gray-50">
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen}
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