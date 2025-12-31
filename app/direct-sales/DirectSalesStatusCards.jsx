'use client';

import { 
  MdRadioButtonUnchecked, 
  MdCheckCircle, 
  MdDonutLarge,
  MdHourglassEmpty,
  MdWarning,
  MdAccessTime
} from 'react-icons/md';

export default function DirectSalesStatusCards({ stats, activeStatus, setActiveStatus }) {
  const statusCards = [
    {
      id: 'draft',
      title: 'Draft',
      count: stats.draft,
      icon: MdRadioButtonUnchecked,
      color: 'bg-white',
      borderColor: 'border-gray-300',
      iconColor: 'text-gray-600',
      textColor: 'text-gray-700',
    },
    {
      id: 'paid',
      title: 'Paid',
      count: stats.paid,
      icon: MdCheckCircle,
      color: 'bg-green-50',
      borderColor: 'border-green-300',
      iconColor: 'text-green-600',
      textColor: 'text-green-700',
    },
    {
      id: 'partially-paid',
      title: 'Partially Paid',
      count: stats.partiallyPaid,
      icon: MdDonutLarge,
      color: 'bg-yellow-50',
      borderColor: 'border-yellow-300',
      iconColor: 'text-yellow-600',
      textColor: 'text-yellow-700',
    },
    {
      id: 'ordered',
      title: 'Ordered',
      count: stats.ordered,
      icon: MdHourglassEmpty,
      color: 'bg-blue-50',
      borderColor: 'border-blue-300',
      iconColor: 'text-blue-600',
      textColor: 'text-blue-700',
    },
    {
      id: 'unpaid',
      title: 'Unpaid',
      count: stats.unpaid,
      icon: MdWarning,
      color: 'bg-orange-50',
      borderColor: 'border-orange-300',
      iconColor: 'text-orange-600',
      textColor: 'text-orange-700',
    },
    {
      id: 'overdue',
      title: 'Overdue',
      count: stats.overdue,
      icon: MdAccessTime,
      color: 'bg-red-50',
      borderColor: 'border-red-300',
      iconColor: 'text-red-600',
      textColor: 'text-red-700',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
      {statusCards.map((card) => {
        const Icon = card.icon;
        const isActive = activeStatus === card.id;
        
        return (
          <button
            key={card.id}
            onClick={() => setActiveStatus(card.id === activeStatus ? 'all' : card.id)}
            className={`
              ${card.color}
              border-2 ${isActive ? 'ring-2 ring-offset-2 ring-blue-500' : card.borderColor}
              rounded-xl p-4 transition-all hover:shadow-md cursor-pointer
              ${isActive ? 'transform scale-105 shadow-lg' : ''}
            `}
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon className={`text-lg ${card.iconColor}`} />
              <span className={`font-semibold text-xs ${card.textColor}`}>
                {card.title}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">{card.count}</h3>
          </button>
        );
      })}
    </div>
  );
}