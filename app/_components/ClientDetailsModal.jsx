'use client';

import { useState } from 'react';
import { MdClose, MdQrCodeScanner, MdKeyboard, MdKeyboardArrowDown } from 'react-icons/md';
import { FaIdCard, FaMapMarkerAlt, FaCar } from 'react-icons/fa';
import NewCustomerModal from './NewCustomerModal';

// بيانات وهمية
const mockCustomers = [
  'CASH CUSTOMER AL AIN - TABBY',
  'CASH CUSTOMER - AL AIN BRANCH',
  'CASH CUSTOMER - TAMARA',
  '111 MOTORS FOR USED AUTOMOBILE TRADING CO LLC',
  '555063330.0',
  'AUTO BODY CENTER ABC LLC',
  'ABDULAZEEM IRAQI & ABU FAJER',
];

const mockVehicles = [
  {
    id: 1,
    brand: 'Chevrolet',
    model: 'Captiva',
    plateNumber: 'g51784 / شسjshshsjsjsjsjaj',
    year: 2016,
  },
  {
    id: 2,
    brand: 'Lexus',
    model: 'LS460',
    plateNumber: 'a21113 / شسjshshshshshshsuiisa',
    year: 2003,
  },
];

export default function ClientDetailsModal({ isOpen, onClose }) {
  const [activeStep, setActiveStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isNewCustomerModalOpen, setIsNewCustomerModalOpen] = useState(false);

  if (!isOpen) return null;

  const steps = [
    { id: 1, title: 'Client Details', icon: FaIdCard },
    { id: 2, title: 'Visit Type', icon: FaMapMarkerAlt },
    { id: 3, title: 'Check The Car', icon: FaCar },
  ];

  const filteredCustomers = mockCustomers.filter(customer =>
    customer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasVehicles = selectedCustomer && searchQuery;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full md:w-[600px] lg:w-[700px] bg-white z-50 shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-blue-600">Client Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <MdClose className="text-2xl text-gray-600" />
          </button>
        </div>

        {/* Steps Indicator */}
        <div className="px-6 py-6">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              const isCompleted = activeStep > step.id;

              return (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center mb-2
                        ${isActive ? 'bg-blue-600 text-white' : ''}
                        ${isCompleted ? 'bg-green-600 text-white' : ''}
                        ${!isActive && !isCompleted ? 'bg-gray-200 text-gray-400' : ''}
                      `}
                    >
                      <Icon className="text-xl" />
                    </div>
                    <span
                      className={`
                        text-xs font-semibold text-center
                        ${isActive ? 'text-blue-600' : ''}
                        ${!isActive ? 'text-gray-400' : ''}
                      `}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`
                        h-0.5 flex-1 mx-2 mt-[-30px]
                        ${isCompleted ? 'bg-green-600' : 'bg-gray-200'}
                      `}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <MdQrCodeScanner className="text-2xl text-blue-600" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-12 py-3.5 border-2 border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <MdKeyboard className="text-2xl text-gray-400" />
              </div>
            </div>
          </div>

          {/* Customer Selection Dropdown */}
          <div className="mb-6 relative">
            <button
              onClick={() => setIsCustomerDropdownOpen(!isCustomerDropdownOpen)}
              className="w-full px-4 py-3.5 border-2 border-blue-600 rounded-lg text-left text-gray-400 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className={selectedCustomer ? 'text-gray-900' : 'text-gray-400'}>
                {selectedCustomer || 'Select Customer'}
              </span>
              <MdKeyboardArrowDown className="text-xl text-gray-600" />
            </button>

            {/* Dropdown List */}
            {isCustomerDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto z-20">
                {filteredCustomers.map((customer, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedCustomer(customer);
                      setIsCustomerDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <span className="text-gray-700 font-medium">{customer}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* New Customer Button */}
          <button 
            onClick={() => setIsNewCustomerModalOpen(true)}
            className="w-full text-blue-600 font-bold text-lg mb-8 hover:text-blue-700 transition-colors text-right"
          >
            + New Customer
          </button>

          {/* Vehicles List or Empty State */}
          {!hasVehicles ? (
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-400 text-lg">You don't have any vehicles</p>
            </div>
          ) : (
            <div className="space-y-4">
              {mockVehicles.map((vehicle) => (
                <button
                  key={vehicle.id}
                  onClick={() => setSelectedVehicle(vehicle.id)}
                  className={`
                    w-full p-4 rounded-lg border-2 transition-all text-left
                    ${selectedVehicle === vehicle.id 
                      ? 'border-blue-600 bg-blue-50 shadow-md' 
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }
                  `}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-blue-600">
                      {vehicle.brand} {vehicle.model}
                    </h3>
                    <span className="text-gray-600 font-semibold">{vehicle.year}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{vehicle.plateNumber}</p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Labels */}
        <div className="grid grid-cols-2 border-t border-gray-200 mt-8">
          <div className="px-6 py-3 bg-gray-50 border-r border-gray-200">
            <p className="text-gray-500 text-sm">Company</p>
          </div>
          <div className="px-6 py-3 bg-gray-50">
            <p className="text-gray-500 text-sm">Company</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            disabled={!selectedVehicle}
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>

      {/* New Customer Modal */}
      <NewCustomerModal
        isOpen={isNewCustomerModalOpen}
        onClose={() => setIsNewCustomerModalOpen(false)}
      />
    </>
  );
}