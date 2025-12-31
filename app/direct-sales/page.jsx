'use client';

import { useState } from 'react';
import DirectSalesHeader from './DirectSalesHeader';
import DirectSalesTable from './DirectSalesTable';
import Pagination from '../quotations/Pagination';
import DirectSalesStatusCards from './DirectSalesStatusCards';
// بيانات وهمية
const mockDirectSales = [
  {
    id: '5sw',
    workOrderId: '',
    customerName: 'Hafdafsad',
    vehicleType: 'Choverlet',
    serviceAdvisor: { name: 'support', color: 'blue' },
    createdBy: { name: 'Kaleam Support', color: 'blue' },
    date: '2025-12-29',
    time: '6:35 PM',
    docStatus: 'draft',
  },
  {
    id: '22ww',
    workOrderId: '',
    customerName: 'GREEN AUTO WORKS',
    vehicleType: '',
    serviceAdvisor: null,
    createdBy: { name: 'Kaleam Support', color: 'purple' },
    date: '2025-12-29',
    time: '6:31 PM',
    docStatus: 'submitted',
  },
  {
    id: '22234r',
    workOrderId: '',
    customerName: 'AL SAFA ROAD CONTRACTING LLC',
    vehicleType: '',
    serviceAdvisor: null,
    createdBy: { name: 'Kaleam Support', color: 'orange' },
    date: '2025-12-29',
    time: '6:31 PM',
    docStatus: 'submitted',
  },
  {
    id: '121ree',
    workOrderId: '',
    customerName: 'AL SAFA ROAD CONTRACTING LLC',
    vehicleType: '',
    serviceAdvisor: null,
    createdBy: { name: 'Kaleam Support', color: 'red' },
    date: '2025-12-29',
    time: '6:31 PM',
    docStatus: 'submitted',
  },
  {
    id: '222',
    workOrderId: '',
    customerName: 'AL SAFA ROAD CONTRACTING LLC',
    vehicleType: '',
    serviceAdvisor: null,
    createdBy: { name: 'Kaleam Support', color: 'green' },
    date: '2025-12-29',
    time: '6:31 PM',
    docStatus: 'submitted',
  },
  {
    id: '121',
    workOrderId: '',
    customerName: 'AL SAFA ROAD CONTRACTING LLC',
    vehicleType: '',
    serviceAdvisor: null,
    createdBy: { name: 'Kaleam Support', color: 'blue' },
    date: '2025-12-29',
    time: '6:31 PM',
    docStatus: 'submitted',
  },
  {
    id: '22',
    workOrderId: '',
    customerName: 'AL SAFA ROAD CONTRACTING LLC',
    vehicleType: '',
    serviceAdvisor: null,
    createdBy: { name: 'Kaleam Support', color: 'purple' },
    date: '2025-12-29',
    time: '6:08 PM',
    docStatus: 'submitted',
  },
  {
    id: '3232',
    workOrderId: '',
    customerName: 'AL SAFA ROAD CONTRACTING LLC',
    vehicleType: '',
    serviceAdvisor: null,
    createdBy: { name: 'Kaleam Support', color: 'orange' },
    date: '2025-12-29',
    time: '6:08 PM',
    docStatus: 'submitted',
  },
  {
    id: 'Acc8',
    workOrderId: '',
    customerName: 'أحمد العيسي',
    vehicleType: 'McLaren Pickup',
    serviceAdvisor: { name: 'MOHAMMAD FARZAT DARIZI', color: 'red' },
    createdBy: { name: 'Kaleam Support', color: 'red' },
    date: '2025-12-28',
    time: '1:28 PM',
    docStatus: 'draft',
  },
  {
    id: 'ACC-SINV-2025-34108',
    workOrderId: '',
    customerName: '111 MOTORS FOR USED AUTOMOBILE TRADING CO LLC',
    vehicleType: '',
    serviceAdvisor: null,
    createdBy: { name: 'Kaleam Support', color: 'green' },
    date: '2025-12-27',
    time: '7:43 PM',
    docStatus: 'submitted',
  },
];

export default function DirectSalesPage() {
  const [directSales] = useState(mockDirectSales);
  const [activeStatus, setActiveStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // حساب الإحصائيات
  const stats = {
    draft: 94,
    paid: 29412,
    partiallyPaid: 0,
    ordered: 0,
    unpaid: 30,
    overdue: 3562,
  };

  // فلترة البيانات
  const filteredDirectSales = directSales.filter((sale) => {
    const matchesStatus = activeStatus === 'all' || sale.docStatus === activeStatus;
    const matchesSearch = 
      sale.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sale.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesSearch;
  });

  // Pagination
  const totalItems = 34124;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="space-y-6">
      <DirectSalesHeader 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <DirectSalesStatusCards 
        stats={stats}
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
      />
      
      <DirectSalesTable 
        directSales={filteredDirectSales}
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