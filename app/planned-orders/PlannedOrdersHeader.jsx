'use client';

import { MdAdd, MdSearch, MdFilterList } from 'react-icons/md';

export default function PlannedOrdersHeader({ searchQuery, setSearchQuery }) {
  return (
    <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Planned Orders</h1>

        {/* Search and Actions */}
        <div className="flex flex-col sm:flex-row gap-3 flex-1 lg:max-w-2xl">
          {/* Search */}
          <div className="relative flex-1">
            <MdSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Add Button */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors font-medium whitespace-nowrap">
            <MdAdd className="text-xl" />
            Planned Orders
          </button>

          {/* Filter Button */}
          <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <MdFilterList className="text-xl text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}