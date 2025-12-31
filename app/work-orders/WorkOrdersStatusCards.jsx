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
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-700',
      countColor: 'text-gray-900',
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      count: stats.inProgress,
      icon: MdHourglassEmpty,
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      countColor: 'text-orange-700',
    },
    {
      id: 'ready',
      title: 'Ready',
      count: stats.ready,
      icon: MdCheckCircle,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      countColor: 'text-blue-700',
    },
    {
      id: 'awaiting-quality',
      title: 'Awaiting Quality',
      count: stats.awaitingQuality,
      icon: MdHighQuality,
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-600',
      countColor: 'text-pink-700',
    },
    {
      id: 'on-hold',
      title: 'On Hold',
      count: stats.onHold,
      icon: MdPauseCircleOutline,
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600',
      countColor: 'text-red-700',
    },
    {
      id: 'delivered',
      title: 'Delivered',
      count: stats.delivered,
      icon: MdLocalShipping,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      countColor: 'text-green-700',
    },
    {
      id: 'cancelled',
      title: 'Cancelled',
      count: stats.cancelled,
      icon: MdCancel,
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600',
      countColor: 'text-red-700',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3">
      {statusCards.map((card) => {
        const Icon = card.icon;
        const isActive = activeStatus === card.id;
        
        return (
          <button
            key={card.id}
            onClick={() => setActiveStatus(card.id === activeStatus ? 'all' : card.id)}
            className={`
              ${card.bgColor}
              rounded-xl px-4 py-3 transition-all hover:shadow-md cursor-pointer
              ${isActive ? 'ring-2 ring-blue-500 shadow-lg' : ''}
              flex items-center gap-3
            `}
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <Icon className={`text-2xl ${card.iconColor}`} />
            </div>

            {/* Title + Count */}
            <div className="flex flex-col items-start flex-1 min-w-0">
              <span className={`text-xs font-semibold ${card.iconColor} whitespace-nowrap`}>
                {card.title}
              </span>
              <span className={`text-2xl font-bold ${card.countColor} leading-none mt-0.5`}>
                {card.count}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}