'use client';

import { MdMoreVert, MdEdit, MdDelete, MdVisibility } from 'react-icons/md';
import { useState } from 'react';

export default function InspectionTable({ inspections }) {
  const [openMenu, setOpenMenu] = useState(null);

  const getStatusBadge = (status) => {
    const styles = {
      'not-started': 'bg-gray-100 text-gray-700 border border-gray-300',
      'in-progress': 'bg-blue-100 text-blue-700 border border-blue-300',
      'completed': 'bg-green-100 text-green-700 border border-green-300',
    };

    const labels = {
      'not-started': 'Not Started',
      'in-progress': 'In Progress',
      'completed': 'Completed',
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  if (inspections.length === 0) {
    return (
      <div className="bg-white rounded-xl p-12 text-center shadow-sm">
        <div className="text-gray-400 mb-4">
          <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <p className="text-gray-500 text-lg">The list has no elements</p>
        <p className="text-gray-400 text-sm mt-2">Start by adding your first inspection</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Inspection Details
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Inspection ID
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Supervisor
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Created By
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {inspections.map((inspection) => (
              <tr key={inspection.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-semibold text-gray-800">{inspection.customerName}</p>
                    <p className="text-sm text-gray-500">{inspection.vehicleInfo}</p>
                    {inspection.issues > 0 && (
                      <p className="text-xs text-orange-600 mt-1">
                        {inspection.issues} issues found
                      </p>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-mono text-sm font-medium text-blue-600">
                    {inspection.id}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {getStatusBadge(inspection.status)}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {inspection.supervisor}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {inspection.createdBy}
                </td>
                <td className="px-6 py-4 text-gray-500 text-sm">
                  {new Date(inspection.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <MdVisibility className="text-xl" />
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      <MdEdit className="text-xl" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <MdDelete className="text-xl" />
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
        {inspections.map((inspection) => (
          <div key={inspection.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <p className="font-semibold text-gray-800 mb-1">{inspection.customerName}</p>
                <p className="text-sm text-gray-500">{inspection.vehicleInfo}</p>
              </div>
              {getStatusBadge(inspection.status)}
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-sm mb-3">
              <div>
                <p className="text-gray-500 text-xs">ID</p>
                <p className="font-mono font-medium text-blue-600">{inspection.id}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Date</p>
                <p className="font-medium text-gray-700">
                  {new Date(inspection.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Supervisor</p>
                <p className="font-medium text-gray-700">{inspection.supervisor}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Created By</p>
                <p className="font-medium text-gray-700">{inspection.createdBy}</p>
              </div>
            </div>

            {inspection.issues > 0 && (
              <p className="text-xs text-orange-600 mb-3">
                {inspection.issues} issues found
              </p>
            )}

            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 text-blue-600 bg-blue-50 rounded-lg font-medium text-sm hover:bg-blue-100 transition-colors">
                View
              </button>
              <button className="flex-1 px-3 py-2 text-green-600 bg-green-50 rounded-lg font-medium text-sm hover:bg-green-100 transition-colors">
                Edit
              </button>
              <button className="px-3 py-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                <MdDelete className="text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}