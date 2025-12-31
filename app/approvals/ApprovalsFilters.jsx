'use client';

import { MdRadioButtonUnchecked, MdCheckCircle, MdCancel, MdAccessTime } from 'react-icons/md';

export default function ApprovalsFilters({ activeFilter, setActiveFilter }) {
  const filters = [
    { id: 'all', title: 'All', icon: MdRadioButtonUnchecked, color: 'bg-gray-600' },
    { id: 'approved', title: 'Approved', icon: MdCheckCircle, color: 'bg-green-600' },
    { id: 'rejected', title: 'rejected', icon: MdCancel, color: 'bg-red-600' },
    { id: 'pending', title: 'Pending', icon: MdAccessTime, color: 'bg-orange-500' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {filters.map((filter) => {
        const Icon = filter.icon;
        
        return (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`
              ${filter.color} text-white rounded-xl p-6 
              transition-all hover:shadow-lg
              ${activeFilter === filter.id ? 'ring-4 ring-offset-2 ring-blue-500 shadow-xl transform scale-105' : ''}
            `}
          >
            <div className="flex items-center justify-center gap-3">
              <Icon className="text-2xl" />
              <span className="font-bold text-lg">{filter.title}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}