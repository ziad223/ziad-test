'use client';

import { useState } from 'react';
import { MdAdd, MdLanguage, MdBusiness, MdKeyboardArrowDown, MdQrCodeScanner } from 'react-icons/md';
import QRCodeModal from './QRCodeModal';
import LanguageModal from './LanguageModal';
import BranchModal from './BranchModal';
import ClientDetailsModal from './ClientDetailsModal';

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedBranch, setSelectedBranch] = useState('Ras Al Khor Mechanic');
  
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isBranchModalOpen, setIsBranchModalOpen] = useState(false);
  const [isClientDetailsOpen, setIsClientDetailsOpen] = useState(false);

  return (
    <>
      <header className="bg-white h-16 md:h-20 border-b shadow-sm sticky top-0 z-30">
        <div className="h-full px-4 md:px-6 flex items-center justify-between">
          <div></div>

          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={() => setIsClientDetailsOpen(true)}
              className="bg-blue-600 text-white px-3 md:px-6 py-2 md:py-2.5 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors font-medium text-sm md:text-base"
            >
              <MdAdd className="text-lg md:text-xl" />
              <span className="hidden sm:inline">Create Work Order</span>
              <span className="sm:hidden">Create</span>
            </button>

            <button 
              onClick={() => setIsQRModalOpen(true)}
              className="p-2 md:p-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <MdQrCodeScanner className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>

            <div className="relative hidden md:block">
              <button 
                onClick={() => setIsLanguageModalOpen(!isLanguageModalOpen)}
                className="bg-blue-50 text-blue-600 px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-blue-100 transition-colors font-medium"
              >
                <MdLanguage className="text-xl" />
                {selectedLanguage}
                <MdKeyboardArrowDown className="text-lg" />
              </button>
            </div>

            <div className="relative hidden lg:block">
              <button 
                onClick={() => setIsBranchModalOpen(!isBranchModalOpen)}
                className="bg-blue-50 text-blue-600 px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-blue-100 transition-colors font-medium max-w-[250px]"
              >
                <MdBusiness className="text-xl flex-shrink-0" />
                <span className="truncate text-sm">{selectedBranch}</span>
                <MdKeyboardArrowDown className="text-lg flex-shrink-0" />
              </button>
            </div>

            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:bg-blue-700 transition-colors text-sm md:text-base">
              M
            </div>
          </div>
        </div>
      </header>

      <QRCodeModal 
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />

      <LanguageModal 
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
        selectedLanguage={selectedLanguage}
        onSelect={setSelectedLanguage}
      />

      <BranchModal 
        isOpen={isBranchModalOpen}
        onClose={() => setIsBranchModalOpen(false)}
        selectedBranch={selectedBranch}
        onSelect={setSelectedBranch}
      />

      <ClientDetailsModal
        isOpen={isClientDetailsOpen}
        onClose={() => setIsClientDetailsOpen(false)}
      />
    </>
  );
}