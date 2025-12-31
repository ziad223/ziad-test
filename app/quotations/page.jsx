'use client';

import { useState } from 'react';
import QuotationHeader from './QuotationHeader';
import QuotationStatusCards from './QuotationStatusCards';
import QuotationTable from './QuotationTable';
import Pagination from './Pagination';

// بيانات وهمية
const mockQuotations = [
  {
    id: 'SAL-QTN-2025-00443',
    workOrderId: '',
    customerName: 'Hafdafsad',
    vehicleType: 'Choverlet',
    status: 'ordered',
    serviceAdvisor: { name: 'support', color: 'blue' },
    createdBy: { name: 'Kaleam Support', color: 'blue' },
    date: '2025-12-28',
    time: '2:09 PM',
    totalAmount: 2500,
  },
  {
    id: 'SAL-QTN-2025-00442',
    workOrderId: '',
    customerName: 'أحمد العيسي',
    vehicleType: 'McLaren Pickup',
    status: 'draft',
    serviceAdvisor: { name: 'MOHAMMAD FARZAT DARIZI', color: 'purple' },
    createdBy: { name: 'Kaleam Support', color: 'purple' },
    date: '2025-12-27',
    time: '6:51 PM',
    totalAmount: 3200,
  },
  {
    id: 'SAL-QTN-2025-00441',
    workOrderId: '',
    customerName: 'Muhammad',
    vehicleType: 'BMW Sedan',
    status: 'partially-ordered',
    serviceAdvisor: { name: 'support', color: 'orange' },
    createdBy: { name: 'Kaleam Support', color: 'orange' },
    date: '2025-12-27',
    time: '5:02 PM',
    totalAmount: 4500,
  },
  {
    id: 'SAL-QTN-2025-00440',
    workOrderId: '',
    customerName: 'Muhammad',
    vehicleType: 'BMW Sedan',
    status: 'cancelled',
    serviceAdvisor: { name: 'support', color: 'red' },
    createdBy: { name: 'Kaleam Support', color: 'red' },
    date: '2025-12-27',
    time: '5:01 PM',
    totalAmount: 1800,
  },
  {
    id: 'SAL-QTN-2025-00439',
    workOrderId: '',
    customerName: 'Ali Ahmed Ali',
    vehicleType: 'Toyota SUV',
    status: 'ordered',
    serviceAdvisor: { name: 'AHMAD FAHD ESMAEIL', color: 'green' },
    createdBy: { name: 'Kaleam Support', color: 'green' },
    date: '2025-12-25',
    time: '3:16 PM',
    totalAmount: 5200,
  },
  {
    id: 'SAL-QTN-2025-00438',
    workOrderId: '',
    customerName: 'Mr tarek',
    vehicleType: 'Mazda Sedan',
    status: 'partially-ordered',
    serviceAdvisor: { name: 'support', color: 'blue' },
    createdBy: { name: 'Kaleam Support', color: 'blue' },
    date: '2025-12-24',
    time: '9:49 PM',
    totalAmount: 2900,
  },
  {
    id: 'SAL-QTN-2025-00437',
    workOrderId: '',
    customerName: 'Ahmed Ibrahim Ali',
    vehicleType: 'Haval Sedan',
    status: 'ordered',
    serviceAdvisor: { name: 'support', color: 'purple' },
    createdBy: { name: 'Kaleam Support', color: 'purple' },
    date: '2025-12-24',
    time: '7:54 PM',
    totalAmount: 3400,
  },
  {
    id: 'SAL-QTN-2025-00436',
    workOrderId: '',
    customerName: 'Hafdafsad',
    vehicleType: 'Choverlet',
    status: 'cancelled',
    serviceAdvisor: { name: 'support', color: 'orange' },
    createdBy: { name: 'Kaleam Support', color: 'orange' },
    date: '2025-12-24',
    time: '7:45 PM',
    totalAmount: 1200,
  },
  {
    id: 'SAL-QTN-2025-00435',
    workOrderId: '',
    customerName: 'Hafdafsad',
    vehicleType: 'Choverlet',
    status: 'cancelled',
    serviceAdvisor: { name: 'support', color: 'red' },
    createdBy: { name: 'Kaleam Support', color: 'red' },
    date: '2025-12-24',
    time: '7:34 PM',
    totalAmount: 980,
  },
  {
    id: 'SAL-QTN-2025-00434',
    workOrderId: '',
    customerName: 'VIP RENT A CAR',
    vehicleType: 'Land Rover',
    status: 'partially-ordered',
    serviceAdvisor: { name: 'support', color: 'green' },
    createdBy: { name: 'Kaleam Support', color: 'green' },
    date: '2025-12-23',
    time: '3:18 PM',
    totalAmount: 6500,
  },
];

export default function QuotationsPage() {
  const [quotations] = useState(mockQuotations);
  const [activeStatus, setActiveStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // حساب الإحصائيات
  const stats = {
    draft: 261,
    open: 3,
    ordered: 13,
    partiallyOrdered: 7,
    cancelled: 14,
    expired: 145,
  };

  // فلترة البيانات
  const filteredQuotations = quotations.filter((quotation) => {
    const matchesStatus = activeStatus === 'all' || quotation.status === activeStatus;
    const matchesSearch = 
      quotation.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quotation.vehicleType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quotation.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesSearch;
  });

  // Pagination
  const totalItems = 443; // إجمالي البيانات
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="space-y-6">
      <QuotationHeader 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <QuotationStatusCards 
        stats={stats}
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
      />
      
      <QuotationTable 
        quotations={filteredQuotations}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={totalItems}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}