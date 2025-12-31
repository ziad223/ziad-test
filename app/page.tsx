'use client';

import { useState } from 'react';
import { 
  MdHourglassEmpty, 
  MdPauseCircleOutline,
  MdCheckCircle,
  MdLocalShipping,
  MdShoppingCart,
  MdReceipt,
  MdLogin,
  MdLogout,
  MdBuild,
  MdGarage,
  MdDescription,
  MdOutbond,
  MdCalendarToday,
  MdClose
} from 'react-icons/md';
import { FaCar, FaFileInvoice, FaClipboardCheck, FaCog } from 'react-icons/fa';

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState('Dec 31, 2025');

  // Work Orders Status Cards
  const workOrdersStatus = [
    { id: 1, title: 'Received', count: 0, icon: MdShoppingCart, color: 'bg-gray-100', iconColor: 'text-gray-500' },
    { id: 2, title: 'In progress', count: 0, icon: MdHourglassEmpty, color: 'bg-yellow-100', iconColor: 'text-yellow-600' },
    { id: 3, title: 'On Hold', count: 0, icon: MdPauseCircleOutline, color: 'bg-red-100', iconColor: 'text-red-500' },
    { id: 4, title: 'Ready', count: 0, icon: MdCheckCircle, color: 'bg-blue-100', iconColor: 'text-blue-500' },
    { id: 5, title: 'Quality', count: 0, icon: FaClipboardCheck, color: 'bg-purple-100', iconColor: 'text-purple-500' },
    { id: 6, title: 'Delivered', count: 0, icon: MdLocalShipping, color: 'bg-green-100', iconColor: 'text-green-500' },
    { id: 7, title: 'Total', count: 0, icon: MdCheckCircle, color: 'bg-cyan-100', iconColor: 'text-cyan-500' },
  ];

  // Overall Orders Cards
  const overallOrders = [
    { id: 1, title: 'Invoiced', count: 0, icon: MdReceipt },
    { id: 2, title: 'Checked in', count: 0, icon: MdLogin },
    { id: 3, title: 'Checked out', count: 0, icon: MdLogout },
    { id: 4, title: 'Work order in progress', count: 0, icon: MdHourglassEmpty },
    { id: 5, title: 'In garage', count: 0, icon: FaCar },
    { id: 6, title: 'Ready for delivery', count: 0, icon: MdCheckCircle },
    { id: 7, title: 'Insurance approval pending', count: 0, icon: MdDescription },
    { id: 8, title: 'Customer approval pending', count: 0, icon: FaClipboardCheck },
    { id: 9, title: 'Awaiting spare parts', count: 0, icon: FaCog },
    { id: 10, title: 'Vehicle in garage above 7 days', count: 0, icon: MdGarage },
    { id: 11, title: 'Booked & Vehicle with Customer', count: 0, icon: MdShoppingCart },
    { id: 12, title: 'Invoice and Not pait', count: 0, icon: FaFileInvoice },
    { id: 13, title: 'Work orders Invoiced and Vehicle not collected', count: 0, icon: MdCheckCircle },
    { id: 14, title: 'Vehicle outsourced', count: 0, icon: MdOutbond },
    { id: 15, title: 'Quotation', count: 0, icon: MdReceipt },
    { id: 16, title: 'Quotation refused', count: 0, icon: MdClose },
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="bg-white rounded-xl p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 md:mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Work Orders</h1>
          
          {/* Date Selector */}
          <div className="flex items-center gap-2 md:gap-3 bg-blue-50 px-3 md:px-4 py-2 rounded-lg w-full sm:w-auto">
            <MdCalendarToday className="text-blue-600 text-lg md:text-xl flex-shrink-0" />
            <span className="text-blue-600 font-medium text-sm md:text-base">{selectedDate}</span>
            <button className="text-blue-600 hover:text-blue-700 ml-auto">
              <MdClose className="text-lg md:text-xl" />
            </button>
          </div>
        </div>

        {/* Work Orders Status Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 md:gap-4">
          {workOrdersStatus.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`${item.color} rounded-xl p-4 md:p-6 text-center transition-all hover:shadow-md cursor-pointer`}
              >
                <div className="flex justify-center mb-2 md:mb-3">
                  <Icon className={`text-2xl md:text-4xl ${item.iconColor}`} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">{item.count}</h3>
                <p className="text-xs md:text-sm text-gray-600 font-medium">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Overall Orders Section */}
      <div>
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Overall Orders</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {overallOrders.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl p-4 md:p-6 text-center transition-all hover:shadow-lg cursor-pointer border border-gray-100"
              >
                <div className="flex justify-center mb-2 md:mb-3">
                  <Icon className="text-2xl md:text-4xl text-gray-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">{item.count}</h3>
                <p className="text-xs md:text-sm text-gray-600 font-medium leading-tight">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}