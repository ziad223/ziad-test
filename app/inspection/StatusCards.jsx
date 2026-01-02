'use client';

import { MdHourglassEmpty, MdCheckCircle, MdCircle } from 'react-icons/md';

export default function StatusCards({ stats, activeStatus, setActiveStatus }) {
  const statusCards = [
    {
      id: 'not-started',
      title: 'Not Started',
      count: stats.notStarted,
      icon: MdCircle,
      color: 'bg-gray-50',
      borderColor: 'border-gray-200',
      iconColor: 'text-gray-500',
      activeColor: 'bg-gray-100 border-gray-400',
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      count: stats.inProgress,
      icon: MdHourglassEmpty,
      color: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600',
      activeColor: 'bg-blue-100 border-blue-400',
    },
    {
      id: 'completed',
      title: 'Completed',
      count: stats.completed,
      icon: MdCheckCircle,
      color: 'bg-green-50',
      borderColor: 'border-green-200',
      iconColor: 'text-green-600',
      activeColor: 'bg-green-100 border-green-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {statusCards.map((card) => {
        const Icon = card.icon;
        const isActive = activeStatus === card.id;
        
        return (
          <button
            key={card.id}
            onClick={() => setActiveStatus(card.id === activeStatus ? 'all' : card.id)}
            className={`
              ${isActive ? card.activeColor : card.color}
              border-2 ${isActive ? card.activeColor.split(' ')[1] : card.borderColor}
              rounded-xl p-6 transition-all hover:shadow-lg cursor-pointer
              transform 
            `}
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`text-2xl ${card.iconColor}`} />
                  <span className="font-semibold text-gray-700">{card.title}</span>
                </div>
                <h3 className="text-4xl font-bold text-gray-800">{card.count}</h3>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}