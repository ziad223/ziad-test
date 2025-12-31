'use client';

export default function ApprovalsGrid({ approvals }) {
  const getTypeBadge = (type) => {
    return (
      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-semibold">
        {type}
      </span>
    );
  };

  const getStatusBadge = (status) => {
    if (status === 'approved') {
      return (
        <span className="px-3 py-1 bg-green-600 text-white rounded text-xs font-bold">
          Approved
        </span>
      );
    }
    return (
      <span className="px-3 py-1 bg-red-600 text-white rounded text-xs font-bold">
        rejected
      </span>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {approvals.map((approval, index) => (
        <div
          key={`${approval.id}-${index}`}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100"
        >
          {/* Header with badges and Work Order ID */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {getTypeBadge(approval.type)}
              {getStatusBadge(approval.status)}
            </div>
            <span className="text-blue-600 font-bold text-sm">{approval.id}</span>
          </div>

          {/* Customer Info */}
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-gray-500 text-sm">👤</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 mb-1 truncate">
                {approval.customerName}
              </h3>
              <p className="text-sm text-gray-500">{approval.customerType}</p>
            </div>
          </div>

          {/* Discount Value (if exists) */}
          {approval.discountValue !== null && (
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
              <span className="text-gray-600 text-sm">Discount Value</span>
              <span className="font-semibold text-gray-900">{approval.discountValue} AED</span>
            </div>
          )}

          {/* Total Amount */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-gray-600 font-medium">Total:</span>
            <span className="text-green-600 font-bold text-lg">{approval.totalAmount} AED</span>
          </div>
        </div>
      ))}
    </div>
  );
}