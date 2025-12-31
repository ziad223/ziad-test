'use client';

import { 
  MdKeyboardDoubleArrowLeft, 
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight 
} from 'react-icons/md';

export default function Pagination({ 
  currentPage, 
  totalPages, 
  startIndex, 
  endIndex, 
  totalItems,
  onPageChange 
}) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Results Info */}
        <div className="text-gray-600 font-medium">
          {startIndex} - {endIndex} Of {totalItems}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center gap-2">
          {/* First Page */}
          <button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MdKeyboardDoubleArrowLeft className="text-xl text-gray-600" />
          </button>

          {/* Previous Page */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MdKeyboardArrowLeft className="text-xl text-gray-600" />
          </button>

          {/* Next Page */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MdKeyboardArrowRight className="text-xl text-gray-600" />
          </button>

          {/* Last Page */}
          <button
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MdKeyboardDoubleArrowRight className="text-xl text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}