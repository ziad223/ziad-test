'use client';

import { MdSearch, MdFilterList } from 'react-icons/md';

export default function ApprovalsHeader({ searchQuery, setSearchQuery }) {
  return (
    <div className="flex items-center gap-3">
      {/* Filter Icon */}
      <button className="p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
        <MdFilterList className="text-xl text-gray-600" />
      </button>

      {/* Search */}
      <div className="relative flex-1">
        <MdSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
        />
      </div>
    </div>
  );
}