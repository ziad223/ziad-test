'use client';

import { FaCar } from 'react-icons/fa';

export default function QuotationTable({ quotations }) {
  const getStatusStyle = (status) => {
    const styles = {
      'draft': 'bg-gray-100 text-gray-800',
      'open': 'bg-blue-100 text-blue-800',
      'ordered': 'bg-green-100 text-green-800',
      'partially-ordered': 'bg-yellow-100 text-yellow-800',
      'cancelled': 'bg-red-100 text-red-800',
      'expired': 'bg-orange-100 text-orange-800',
    };
    return styles[status] || 'bg-gray-100 text-gray-800';
  };

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
                Quotation ID.
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
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {quotations.map((quotation) => (
              <tr key={quotation.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <FaCar className="text-2xl text-gray-700" />
                    <div>
                      <p className="font-semibold text-gray-800">{quotation.customerName}</p>
                      <p className="text-sm text-gray-500">{quotation.vehicleType}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className={`inline-block px-4 py-2 rounded-full font-medium text-sm ${getStatusStyle(quotation.status)}`}>
                    {quotation.id} / {quotation.workOrderId}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${getAvatarColor(quotation.serviceAdvisor.color)}`}>
                      {getInitials(quotation.serviceAdvisor.name)}
                    </div>
                    <span className="text-gray-700 text-sm">{quotation.serviceAdvisor.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${getAvatarColor(quotation.createdBy.color)}`}>
                      {getInitials(quotation.createdBy.name)}
                    </div>
                    <span className="text-gray-700 text-sm">{quotation.createdBy.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600 text-sm">
                  {quotation.time} {new Date(quotation.date).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden divide-y divide-gray-200">
        {quotations.map((quotation) => (
          <div key={quotation.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start gap-3 mb-3">
              <FaCar className="text-2xl text-gray-700 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{quotation.customerName}</p>
                <p className="text-sm text-gray-500">{quotation.vehicleType}</p>
              </div>
            </div>

            <div className={`inline-block px-3 py-1.5 rounded-full font-medium text-xs ${getStatusStyle(quotation.status)} mb-3`}>
              {quotation.id}
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-500 text-xs mb-1">Service Advisor</p>
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${getAvatarColor(quotation.serviceAdvisor.color)}`}>
                    {getInitials(quotation.serviceAdvisor.name)}
                  </div>
                  <span className="text-gray-700 text-xs truncate">{quotation.serviceAdvisor.name}</span>
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">Date</p>
                <p className="text-gray-700 font-medium text-xs">
                  {quotation.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}