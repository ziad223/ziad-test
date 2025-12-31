'use client';

import { 
  MdRadioButtonUnchecked, 
  MdHourglassEmpty, 
  MdCheckCircle, 
  MdDonutLarge,
  MdCancel,
  MdAccessTime
} from 'react-icons/md';

export default function QuotationStatusCards({ stats, activeStatus, setActiveStatus }) {
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
      id: 'open',
      title: 'Open',
      count: stats.open,
      icon: MdHourglassEmpty,
      color: 'bg-blue-50',
      borderColor: 'border-blue-300',
      iconColor: 'text-blue-600',
      textColor: 'text-blue-700',
    },
    {
      id: 'ordered',
      title: 'Ordered',
      count: stats.ordered,
      icon: MdCheckCircle,
      color: 'bg-green-50',
      borderColor: 'border-green-300',
      iconColor: 'text-green-600',
      textColor: 'text-green-700',
    },
    {
      id: 'partially-ordered',
      title: 'Partially Ordered',
      count: stats.partiallyOrdered,
      icon: MdDonutLarge,
      color: 'bg-yellow-50',
      borderColor: 'border-yellow-300',
      iconColor: 'text-yellow-600',
      textColor: 'text-yellow-700',
    },
    {
      id: 'cancelled',
      title: 'Cancelled',
      count: stats.cancelled,
      icon: MdCancel,
      color: 'bg-red-50',
      borderColor: 'border-red-300',
      iconColor: 'text-red-600',
      textColor: 'text-red-700',
    },
    {
      id: 'expired',
      title: 'Expired',
      count: stats.expired,
      icon: MdAccessTime,
      color: 'bg-orange-50',
      borderColor: 'border-orange-300',
      iconColor: 'text-orange-600',
      textColor: 'text-orange-700',
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
              border-2 ${isActive ? 'border-current shadow-lg' : card.borderColor}
              rounded-xl p-4 transition-all hover:shadow-md cursor-pointer
              ${isActive ? 'transform scale-105' : ''}
            `}
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon className={`text-xl ${card.iconColor}`} />
              <span className={`font-semibold text-sm ${card.textColor}`}>
                {card.title}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{card.count}</h3>
          </button>
        );
      })}
    </div>
  );
}