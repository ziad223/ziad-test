'use client';

import { FaCar } from 'react-icons/fa';
import { MdPrint } from 'react-icons/md';

export default function DirectSalesTable({ directSales }) {
  const getAvatarColor = (color) => {
    const colors = {
      blue: 'bg-blue-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500',
      red: 'bg-red-500',
      green: 'bg-green-500',
    };
    return colors[color] || 'bg-gray-500';
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getDocStatusBadge = (status) => {
    if (status === 'draft') {
      return (
        <span className="px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
          Draft
        </span>
      );
    }
    return (
      <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
        Submitted
      </span>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Details
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Direct Sales ID.
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Service advisor
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Created by
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Doc Status
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {directSales.map((sale) => (
              <tr key={sale.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <FaCar className="text-2xl text-gray-700 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">{sale.customerName}</p>
                      {sale.vehicleType && (
                        <p className="text-sm text-gray-500">{sale.vehicleType}</p>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className={`inline-block px-4 py-2 rounded-full ${sale.workOrderId ? 'bg-white border-2 border-gray-300' : 'bg-yellow-100'}`}>
                    <p className="font-bold text-sm text-gray-800">{sale.id} {sale.workOrderId ? '/' : ''}</p>
                    {sale.workOrderId && (
                      <p className="font-bold text-sm text-gray-800">{sale.workOrderId}</p>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  {sale.serviceAdvisor ? (
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${getAvatarColor(sale.serviceAdvisor.color)}`}>
                        {getInitials(sale.serviceAdvisor.name)}
                      </div>
                      <span className="text-gray-700 text-sm">{sale.serviceAdvisor.name}</span>
                    </div>
                  ) : (
                    <span className="text-gray-400">_</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${getAvatarColor(sale.createdBy.color)}`}>
                      {getInitials(sale.createdBy.name)}
                    </div>
                    <span className="text-gray-700 text-sm">{sale.createdBy.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600 text-sm">
                  {sale.time} {new Date(sale.date).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  })}
                </td>
                <td className="px-6 py-4">
                  {getDocStatusBadge(sale.docStatus)}
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <MdPrint className="text-xl" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden divide-y divide-gray-200">
        {directSales.map((sale) => (
          <div key={sale.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start gap-3 mb-3">
              <FaCar className="text-2xl text-gray-700 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{sale.customerName}</p>
                {sale.vehicleType && (
                  <p className="text-sm text-gray-500">{sale.vehicleType}</p>
                )}
              </div>
              {getDocStatusBadge(sale.docStatus)}
            </div>

            <div className={`inline-block px-3 py-1.5 rounded-full mb-3 ${sale.workOrderId ? 'bg-white border-2 border-gray-300' : 'bg-yellow-100'}`}>
              <p className="font-bold text-xs">{sale.id}</p>
              {sale.workOrderId && <p className="font-bold text-xs">{sale.workOrderId}</p>}
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm mb-3">
              {sale.serviceAdvisor && (
                <div>
                  <p className="text-gray-500 text-xs mb-1">Service Advisor</p>
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${getAvatarColor(sale.serviceAdvisor.color)}`}>
                      {getInitials(sale.serviceAdvisor.name)}
                    </div>
                    <span className="text-gray-700 text-xs truncate">{sale.serviceAdvisor.name}</span>
                  </div>
                </div>
              )}
              <div>
                <p className="text-gray-500 text-xs mb-1">Date</p>
                <p className="text-gray-700 font-medium text-xs">{sale.time}</p>
              </div>
            </div>

            <button className="w-full p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <MdPrint className="text-xl mx-auto" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}