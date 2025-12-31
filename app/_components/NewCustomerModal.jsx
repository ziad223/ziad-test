'use client';

import { useState } from 'react';
import { MdClose, MdPerson, MdLanguage, MdKeyboardArrowDown } from 'react-icons/md';
import { FaIdCard, FaMapMarkerAlt, FaCar } from 'react-icons/fa';

// قائمة الدول
const countries = [
  { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦', iso: 'SA' },
  { code: '+971', name: 'UAE', flag: '🇦🇪', iso: 'AE' },
  { code: '+965', name: 'Kuwait', flag: '🇰🇼', iso: 'KW' },
  { code: '+974', name: 'Qatar', flag: '🇶🇦', iso: 'QA' },
  { code: '+973', name: 'Bahrain', flag: '🇧🇭', iso: 'BH' },
  { code: '+968', name: 'Oman', flag: '🇴🇲', iso: 'OM' },
  { code: '+20', name: 'Egypt', flag: '🇪🇬', iso: 'EG' },
  { code: '+962', name: 'Jordan', flag: '🇯🇴', iso: 'JO' },
  { code: '+961', name: 'Lebanon', flag: '🇱🇧', iso: 'LB' },
  { code: '+964', name: 'Iraq', flag: '🇮🇶', iso: 'IQ' },
  { code: '+1', name: 'USA', flag: '🇺🇸', iso: 'US' },
  { code: '+44', name: 'UK', flag: '🇬🇧', iso: 'GB' },
];

export default function NewCustomerModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nameArabic: '',
    nameEnglish: '',
    phoneNumber: '',
    customerType: 'Individual',
    taxId: '',
  });

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isCustomerTypeDropdownOpen, setIsCustomerTypeDropdownOpen] = useState(false);
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  if (!isOpen) return null;

  const steps = [
    { id: 1, title: 'Client Details', icon: FaIdCard, active: true },
    { id: 2, title: 'Visit Type', icon: FaMapMarkerAlt, active: false },
    { id: 3, title: 'Check The Car', icon: FaCar, active: false },
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between rounded-t-2xl z-10">
            <h2 className="text-3xl font-bold text-blue-600">Client Details</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <MdClose className="text-3xl text-gray-600" />
            </button>
          </div>

          {/* Steps Indicator */}
          <div className="px-8 py-8">
            <div className="flex items-center justify-between mb-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = step.active;

                return (
                  <div key={step.id} className="flex items-center flex-1">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={`
                          w-16 h-16 rounded-full flex items-center justify-center mb-3
                          ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'}
                        `}
                      >
                        <Icon className="text-2xl" />
                      </div>
                      <span
                        className={`
                          text-sm font-semibold text-center
                          ${isActive ? 'text-blue-600' : 'text-gray-400'}
                        `}
                      >
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex-1 mx-4 mt-[-40px]">
                        <div className="border-t-2 border-dashed border-gray-400" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Row 1: Name in Arabic & Name in English */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-600 font-semibold mb-2">
                    Name in Arabic
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="اكتب اسمك هنا"
                      value={formData.nameArabic}
                      onChange={(e) => setFormData({...formData, nameArabic: e.target.value})}
                      className="w-full px-4 py-3.5 border-2 border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                      dir="rtl"
                    />
                    <MdLanguage className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-xl" />
                  </div>
                </div>

                <div>
                  <label className="block text-blue-600 font-semibold mb-2">
                    Name in English
                  </label>
                  <div className="relative">
                    <MdPerson className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-xl" />
                    <input
                      type="text"
                      placeholder="Name in English"
                      value={formData.nameEnglish}
                      onChange={(e) => setFormData({...formData, nameEnglish: e.target.value})}
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Phone Number, Customer Type, Tax ID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Phone Number */}
                <div>
                  <label className="block text-blue-600 font-semibold mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="border-2 border-blue-600 rounded-lg flex items-center">
                      <button
                        type="button"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        className="px-3 py-3.5 bg-white hover:bg-gray-50 transition-colors flex items-center gap-2 border-r-2 border-blue-600 flex-shrink-0"
                      >
                        <span className="text-xl">{selectedCountry.flag}</span>
                        <span className="font-bold text-gray-900">{selectedCountry.code}</span>
                        <MdKeyboardArrowDown className="text-blue-600" />
                      </button>

                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                        placeholder="5xxxxxxxx"
                        className="flex-1 px-4 py-3.5 focus:outline-none rounded-r-lg"
                      />
                    </div>

                    {isCountryDropdownOpen && (
                      <>
                        <div 
                          className="fixed inset-0 z-20"
                          onClick={() => setIsCountryDropdownOpen(false)}
                        />
                        <div className="absolute top-full left-0 mt-2 bg-white border-2 border-blue-600 rounded-lg shadow-xl max-h-80 overflow-y-auto z-30 min-w-[320px]">
                          {countries.map((country) => (
                            <button
                              key={country.iso}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(country);
                                setIsCountryDropdownOpen(false);
                              }}
                              className={`
                                w-full px-4 py-3 flex items-center gap-3 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0
                                ${selectedCountry.iso === country.iso ? 'bg-blue-50' : ''}
                              `}
                            >
                              <span className="text-2xl">{country.flag}</span>
                              <span className="flex-1 text-left font-medium text-gray-900">{country.name}</span>
                              <span className="font-bold text-blue-600">{country.code}</span>
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Customer Type */}
                <div>
                  <label className="block text-blue-600 font-semibold mb-2">
                    Customer Type
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsCustomerTypeDropdownOpen(!isCustomerTypeDropdownOpen)}
                      className="w-full px-4 py-3.5 border-2 border-blue-600 rounded-lg bg-white hover:bg-gray-50 transition-colors flex items-center justify-between font-semibold text-gray-900"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">
                          {formData.customerType === 'Individual' ? '👤' : '🏢'}
                        </span>
                        <span>{formData.customerType}</span>
                      </div>
                      <MdKeyboardArrowDown className="text-blue-600 text-xl" />
                    </button>

                    {isCustomerTypeDropdownOpen && (
                      <>
                        <div 
                          className="fixed inset-0 z-10"
                          onClick={() => setIsCustomerTypeDropdownOpen(false)}
                        />
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-blue-600 rounded-lg shadow-xl z-20">
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({...formData, customerType: 'Individual'});
                              setIsCustomerTypeDropdownOpen(false);
                            }}
                            className={`
                              w-full px-4 py-3 flex items-center gap-3 hover:bg-blue-50 transition-colors border-b border-gray-100
                              ${formData.customerType === 'Individual' ? 'bg-blue-50' : ''}
                            `}
                          >
                            <span className="text-xl">👤</span>
                            <span className="font-semibold text-gray-900">Individual</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({...formData, customerType: 'Company'});
                              setIsCustomerTypeDropdownOpen(false);
                            }}
                            className={`
                              w-full px-4 py-3 flex items-center gap-3 hover:bg-blue-50 transition-colors
                              ${formData.customerType === 'Company' ? 'bg-blue-50' : ''}
                            `}
                          >
                            <span className="text-xl">🏢</span>
                            <span className="font-semibold text-gray-900">Company</span>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Tax ID */}
                <div>
                  <label className="block text-blue-600 font-semibold mb-2">
                    Tax ID
                  </label>
                  <input
                    type="text"
                    placeholder="Tax ID"
                    value={formData.taxId}
                    onChange={(e) => setFormData({...formData, taxId: e.target.value})}
                    className="w-full px-4 py-3.5 border-2 border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
                  />
                </div>
              </div>

              {/* More Details Link */}
              <div className="flex justify-end">
                <button 
                  type="button"
                  onClick={() => setShowMoreDetails(!showMoreDetails)}
                  className="text-blue-600 font-bold text-lg hover:text-blue-700 transition-colors"
                >
                  {showMoreDetails ? '>> Hide Details' : '<< More Details'}
                </button>
              </div>

              {/* Additional Fields - Show when More Details is clicked */}
              {showMoreDetails && (
                <div className="space-y-6 border-t-2 border-gray-200 pt-6">
                  {/* Row 3: Email, Country, Address Line 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-blue-600 font-semibold mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-xl">
                          ✉️
                        </span>
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full pl-12 pr-4 py-3.5 border-2 border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-blue-600 font-semibold mb-2">
                        Country
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-xl">
                          🌍
                        </span>
                        <select
                          className="w-full appearance-none pl-12 pr-10 py-3.5 border-2 border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 bg-white"
                        >
                          <option>Country</option>
                          <option>Saudi Arabia</option>
                          <option>UAE</option>
                          <option>Kuwait</option>
                          <option>Qatar</option>
                        </select>
                        <MdKeyboardArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-xl pointer-events-none" />
                      </div>
                    </div>

                    {/* Address Line 1 */}
                    <div>
                      <label className="block text-blue-600 font-semibold mb-2">
                        Address Line 1
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-xl">
                          🏠
                        </span>
                        <input
                          type="text"
                          placeholder="Address Line 1"
                          className="w-full pl-12 pr-4 py-3.5 border-2 border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 4: State, Postal/Zip Code, Area/District, Building Number */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* State */}
                    <div>
                      <label className="block text-blue-600 font-semibold mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        placeholder="State"
                        className="w-full px-4 py-3.5 border-2 border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
                      />
                    </div>

                    {/* Postal/Zip Code */}
                    <div>
                      <label className="block text-blue-600 font-semibold mb-2">
                        Postal/Zip Code
                      </label>
                      <input
                        type="text"
                        placeholder="Postal/Zip Code"
                        className="w-full px-4 py-3.5 border-2 border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
                      />
                    </div>

                    {/* Area/District */}
                    <div>
                      <label className="block text-blue-600 font-semibold mb-2">
                        Area/District
                      </label>
                      <input
                        type="text"
                        placeholder="Area/District"
                        className="w-full px-4 py-3.5 border-2 border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
                      />
                    </div>

                    {/* Building Number */}
                    <div>
                      <label className="block text-blue-600 font-semibold mb-2">
                        Building Number
                      </label>
                      <input
                        type="text"
                        placeholder="Building Number"
                        className="w-full px-4 py-3.5 border-2 border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Cancel & Save Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-8 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Save
                </button>
              </div>

              {/* Empty Vehicles State */}
              <div className="bg-gray-100 rounded-lg p-8 text-center mt-8">
                <p className="text-gray-400 text-xl font-medium">You don't have any vehicles</p>
              </div>

              {/* New Vehicle Button */}
              <div className="flex justify-end">
                <button 
                  type="button"
                  className="text-gray-500 font-bold text-lg hover:text-gray-700 transition-colors"
                >
                  + New Vehicle
                </button>
              </div>

              {/* Next Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  disabled
                  className="px-12 py-3 bg-gray-300 text-gray-500 rounded-lg font-semibold cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Labels */}
          <div className="grid grid-cols-2 border-t border-gray-200">
            <div className="px-8 py-4 bg-gray-50 border-r border-gray-200">
              <p className="text-gray-500">Company</p>
            </div>
            <div className="px-8 py-4 bg-gray-50">
              <p className="text-gray-500">Company</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}