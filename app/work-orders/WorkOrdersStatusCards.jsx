'use client';

import { 
  MdRadioButtonUnchecked, 
  MdHourglassEmpty, 
  MdCheckCircle, 
  MdHighQuality,
  MdPauseCircleOutline,
  MdLocalShipping,
  MdCancel
} from 'react-icons/md';

export default function WorkOrdersStatusCards({ stats, activeStatus, setActiveStatus }) {
  const statusCards = [
    {
      id: 'received',
      title: 'Received',
      count: stats.received,
      icon: MdRadioButtonUnchecked,
      color: 'bg-gray-50',
      borderColor: 'border-gray-300',
      iconColor: 'text-gray-600',
      textColor: 'text-gray-700',
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      count: stats.inProgress,
      icon: MdHourglassEmpty,
      color: 'bg-orange-50',
      borderColor: 'border-orange-300',
      iconColor: 'text-orange-600',
      textColor: 'text-orange-700',
    },
    {
      id: 'ready',
      title: 'Ready',
      count: stats.ready,
      icon: MdCheckCircle,
      color: 'bg-blue-50',
      borderColor: 'border-blue-300',
      iconColor: 'text-blue-600',
      textColor: 'text-blue-700',
    },
    {
      id: 'awaiting-quality',
      title: 'Awaiting Quality',
      count: stats.awaitingQuality,
      icon: MdHighQuality,
      color: 'bg-pink-50',
      borderColor: 'border-pink-300',
      iconColor: 'text-pink-600',
      textColor: 'text-pink-700',
    },
    {
      id: 'on-hold',
      title: 'On Hold',
      count: stats.onHold,
      icon: MdPauseCircleOutline,
      color: 'bg-red-50',
      borderColor: 'border-red-300',
      iconColor: 'text-red-600',
      textColor: 'text-red-700',
    },
    {
      id: 'delivered',
      title: 'Delivered',
      count: stats.delivered,
      icon: MdLocalShipping,
      color: 'bg-green-50',
      borderColor: 'border-green-300',
      iconColor: 'text-green-600',
      textColor: 'text-green-700',
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
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
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