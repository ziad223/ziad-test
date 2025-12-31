'use client';

import { 
  MdKeyboardDoubleArrowLeft, 
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowDown
} from 'react-icons/md';

export default function WorkOrdersPagination({ 
  currentPage, 
  totalPages, 
  startIndex, 
  endIndex, 
  totalItems,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange
}) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Results Info */}
        <div className="text-gray-700 font-semibold">
          {startIndex} - {endIndex} Of {totalItems}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center gap-2">
          {/* First Page */}
          <button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <MdKeyboardDoubleArrowLeft className="text-xl text-gray-600" />
          </button>

          {/* Previous Page */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <MdKeyboardArrowLeft className="text-xl text-gray-600" />
          </button>

          {/* Next Page */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <MdKeyboardArrowRight className="text-xl text-gray-600" />
          </button>

          {/* Last Page */}
          <button
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <MdKeyboardDoubleArrowRight className="text-xl text-gray-600" />
          </button>
        </div>

        {/* Rows Per Page */}
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Rows per page:</span>
          <div className="relative">
            <select
              value={rowsPerPage}
              onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <MdKeyboardArrowDown className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}