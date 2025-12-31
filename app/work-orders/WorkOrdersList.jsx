'use client';

import { FaCar } from 'react-icons/fa';
import { MdLocationOn, MdLocalShipping, MdGarage, MdLocalGasStation } from 'react-icons/md';

export default function WorkOrdersList({ workOrders }) {
  const getOrderIdBgColor = (status) => {
    const colors = {
      'received': 'bg-gray-100',
      'in-progress': 'bg-orange-100',
      'ready': 'bg-blue-100',
      'awaiting-quality': 'bg-pink-100',
      'on-hold': 'bg-red-100',
      'delivered': 'bg-green-100',
      'cancelled': 'bg-red-100',
    };
    return colors[status] || 'bg-gray-100';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        {workOrders.map((order, index) => (
          <div
            key={order.id}
            className={`
              flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors
              ${index !== 0 ? 'border-t border-gray-100' : ''}
            `}
          >
            {/* Car Icon + Status Indicator */}
            <div className="relative flex-shrink-0">
              {order.status === 'on-hold' && (
                <div className="absolute -top-1 -left-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
              )}
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <FaCar className="text-2xl text-gray-700" />
              </div>
            </div>

            {/* Customer Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-800 truncate">{order.customerName}</h3>
              <p className="text-sm text-gray-500 truncate">
                {order.vehicleBrand} {order.vehicleModel}
              </p>
            </div>

            {/* Order ID */}
            <div className={`px-4 py-2 rounded-lg ${getOrderIdBgColor(order.status)} flex-shrink-0`}>
              <p className="font-bold text-sm text-gray-800">{order.id} /</p>
              <p className="font-bold text-sm text-gray-800">{order.customerId}</p>
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              <MdLocationOn className="text-xl text-gray-400" />
              <MdLocalShipping className="text-xl text-gray-400" />
              <MdGarage className="text-xl text-gray-400" />
              <MdLocalGasStation className="text-xl text-gray-400" />
            </div>

            {/* Service Advisor */}
            <div className="hidden lg:block flex-shrink-0">
              <div className="px-4 py-2 bg-blue-100 rounded-lg">
                <p className="text-sm font-semibold text-blue-700 whitespace-nowrap">
                  {order.serviceAdvisor}
                </p>
              </div>
            </div>

            {/* Payment Status */}
            <div className="hidden xl:block flex-shrink-0">
              <span className="text-orange-600 font-semibold">{order.paymentStatus}</span>
            </div>

            {/* Dates */}
            <div className="hidden xl:flex flex-col gap-1 flex-shrink-0 min-w-[140px]">
              <div className={`px-3 py-1.5 rounded ${order.isStarted ? 'bg-blue-50' : 'bg-blue-50'}`}>
                <p className="text-xs font-semibold text-blue-600">
                  {order.isStarted ? order.startDate : 'Not Started yet'}
                </p>
                {order.isStarted && (
                  <p className="text-xs text-blue-600">{order.startTime}</p>
                )}
              </div>
              <div className="px-3 py-1.5 bg-red-50 rounded">
                <p className="text-xs font-semibold text-red-600">
                  {order.isStarted ? order.dueDate : 'Not Started yet'}
                </p>
                {order.isStarted && (
                  <p className="text-xs text-red-600">{order.dueTime}</p>
                )}
              </div>
            </div>

            {/* Total Amount */}
            <div className="flex flex-col gap-1 flex-shrink-0 text-right min-w-[120px]">
              <p className="text-sm font-semibold text-gray-800">
                Total: {order.totalAmount.toFixed(1)} AED
              </p>
              <p className={`text-sm font-semibold ${order.dueAmount > 0 ? 'text-red-600' : 'text-gray-600'}`}>
                Due: {order.dueAmount.toFixed(1)} AED
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}