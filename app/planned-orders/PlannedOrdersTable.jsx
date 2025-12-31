'use client';

import { MdContentCopy, MdPrint, MdPlayArrow } from 'react-icons/md';

export default function PlannedOrdersTable({ orders }) {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // يمكنك إضافة notification هنا
  };

  const getDocStatusBadge = (status) => {
    if (status === 'draft') {
      return (
        <span className="px-4 py-1.5 bg-red-50 text-red-600 rounded text-sm font-semibold">
          Draft
        </span>
      );
    }
    return (
      <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded text-sm font-semibold">
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
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Installation Services
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Branch
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Doc Status
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                {/* Order ID */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">{order.id}</span>
                    <button
                      onClick={() => copyToClipboard(order.id)}
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <MdContentCopy className="text-sm" />
                    </button>
                  </div>
                </td>

                {/* Customer Name */}
                <td className="px-6 py-4">
                  <span className="font-semibold text-gray-900">{order.customerName}</span>
                </td>

                {/* Installation Services */}
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={order.hasInstallation}
                    readOnly
                    className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                </td>

                {/* Branch */}
                <td className="px-6 py-4">
                  <span className="text-gray-700 text-sm">{order.branch || '-'}</span>
                </td>

                {/* Date */}
                <td className="px-6 py-4">
                  <div className="text-gray-700 text-sm">
                    {order.time} {new Date(order.date).toLocaleDateString('en-US', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                    })}
                  </div>
                </td>

                {/* Doc Status */}
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    {getDocStatusBadge(order.docStatus)}
                    {order.hasWorkOrder && (
                      <span className="text-xs text-green-600 font-semibold">
                        Work Order Created
                      </span>
                    )}
                  </div>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    {order.actionType === 'start' ? (
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors font-medium text-sm">
                        <MdPlayArrow className="text-lg" />
                        Start
                      </button>
                    ) : (
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm">
                        Open
                      </button>
                    )}
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
        {orders.map((order) => (
          <div key={order.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">{order.id}</span>
                <button
                  onClick={() => copyToClipboard(order.id)}
                  className="p-1 text-gray-400 hover:text-gray-600"
                >
                  <MdContentCopy className="text-sm" />
                </button>
              </div>
              {getDocStatusBadge(order.docStatus)}
            </div>

            <p className="font-semibold text-gray-900 mb-2">{order.customerName}</p>

            <div className="grid grid-cols-2 gap-3 text-sm mb-3">
              <div>
                <p className="text-gray-500 text-xs mb-1">Installation</p>
                <input
                  type="checkbox"
                  checked={order.hasInstallation}
                  readOnly
                  className="w-5 h-5 text-blue-600 rounded border-gray-300"
                />
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">Date</p>
                <p className="text-gray-700 font-medium text-xs">{order.time}</p>
              </div>
            </div>

            {order.hasWorkOrder && (
              <p className="text-xs text-green-600 font-semibold mb-3">
                Work Order Created
              </p>
            )}

            <div className="flex gap-2">
              {order.actionType === 'start' ? (
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors font-medium text-sm">
                  <MdPlayArrow className="text-lg" />
                  Start
                </button>
              ) : (
                <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm">
                  Open
                </button>
              )}
              <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <MdPrint className="text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}