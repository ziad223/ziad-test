'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MdDashboard,
  MdAssignment,
  MdReceipt,
  MdWork,
  MdPointOfSale,
  MdCalendarToday,
  MdThumbUp,
} from 'react-icons/md';

const menuItems = [
  { id: 1, title: 'Dashboard', icon: MdDashboard, href: '/' },
  { id: 2, title: 'Inspection', icon: MdAssignment, href: '/inspection' },
  { id: 3, title: 'Quotations', icon: MdReceipt, href: '/quotations' },
  { id: 4, title: 'Work Orders', icon: MdWork, href: '/work-orders' },
  { id: 5, title: 'Direct Sales', icon: MdPointOfSale, href: '/direct-sales' },
  { id: 6, title: 'Planned Orders', icon: MdCalendarToday, href: '/planned-orders' },
  { id: 7, title: 'Approvals', icon: MdThumbUp, href: '/approvals' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Overlay للموبايل */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`
          fixed top-0 left-0 h-full bg-white shadow-lg z-50
          transition-all duration-300 ease-in-out
          ${isOpen ? 'w-64' : 'w-16'}
          max-lg:${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <div className="h-16 md:h-20 flex items-center justify-center border-b px-4">
          {isOpen ? (
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold text-blue-600">kaleammos</span>
              <span className="bg-yellow-400 text-xs px-2 py-0.5 rounded font-semibold">PRO</span>
            </div>
          ) : (
            <span className="text-xl md:text-2xl font-bold text-blue-600">K</span>
          )}
        </div>

        {/* Menu */}
        <nav className="mt-4 md:mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
                className={`
                  flex items-center gap-4 px-4 py-3 md:py-3.5 transition-all duration-200
                  ${isActive
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                  }
                  ${!isOpen && 'justify-center'}
                `}
              >
                <Icon
                  className={`text-xl md:text-2xl flex-shrink-0 ${
                    isActive ? 'text-blue-600' : 'text-gray-500'
                  }`}
                />
                {isOpen && (
                  <span className="font-medium text-sm md:text-base whitespace-nowrap">
                    {item.title}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* زر الموبايل */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-40 bg-blue-600 text-white p-2 rounded-lg shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </>
  );
}
