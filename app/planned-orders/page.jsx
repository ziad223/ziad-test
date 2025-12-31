'use client';

import { useState } from 'react';
import PlannedOrdersHeader from './PlannedOrdersHeader';
import PlannedOrdersTable from './PlannedOrdersTable';
import Pagination from '../quotations/Pagination';

// بيانات وهمية
const mockPlannedOrders = [
  {
    id: 'PO-02617',
    customerName: 'ABU SAEED',
    hasInstallation: true,
    branch: 'Ras Al Khor 1(New Branch) - رأس الخور1',
    date: '2025-12-27',
    time: '12:43 PM',
    docStatus: 'draft',
    hasWorkOrder: false,
    actionType: 'start',
  },
  {
    id: 'PO-02616',
    customerName: 'CASH CUSTOMER - AL AIN BRANCH',
    hasInstallation: false,
    branch: '',
    date: '2025-12-22',
    time: '10:58 PM',
    docStatus: 'draft',
    hasWorkOrder: false,
    actionType: 'start',
  },
  {
    id: 'PO-02615',
    customerName: 'CASH CUSTOMER - TAMARA',
    hasInstallation: false,
    branch: '',
    date: '2025-12-22',
    time: '3:00 PM',
    docStatus: 'draft',
    hasWorkOrder: false,
    actionType: 'start',
  },
  {
    id: 'PO-02614',
    customerName: 'CASH CUSTOMER AL AIN - TABBY',
    hasInstallation: true,
    branch: 'Ras Al Khor 1(New Branch) - رأس الخور1',
    date: '2025-11-14',
    time: '9:24 PM',
    docStatus: 'submitted',
    hasWorkOrder: true,
    actionType: 'open',
  },
  {
    id: 'PO-02613',
    customerName: 'أحمد العيسي',
    hasInstallation: true,
    branch: 'Ras Al Khor 1(New Branch) - رأس الخور1',
    date: '2025-11-14',
    time: '9:23 PM',
    docStatus: 'submitted',
    hasWorkOrder: true,
    actionType: 'open',
  },
  {
    id: 'PO-02612',
    customerName: 'CASH CUSTOMER - AL AIN BRANCH',
    hasInstallation: false,
    branch: '',
    date: '2025-11-08',
    time: '3:53 PM',
    docStatus: 'draft',
    hasWorkOrder: true,
    actionType: 'open',
  },
  {
    id: 'PO-02611',
    customerName: 'CASH CUSTOMER - AL AIN BRANCH',
    hasInstallation: false,
    branch: '',
    date: '2025-11-08',
    time: '11:53 AM',
    docStatus: 'submitted',
    hasWorkOrder: true,
    actionType: 'open',
  },
  {
    id: 'PO-02610',
    customerName: 'CASH CUSTOMER - AL AIN BRANCH',
    hasInstallation: false,
    branch: '',
    date: '2025-11-01',
    time: '12:58 PM',
    docStatus: 'draft',
    hasWorkOrder: false,
    actionType: 'start',
  },
  {
    id: 'PO-02609',
    customerName: 'DALAS',
    hasInstallation: false,
    branch: '',
    date: '2025-10-29',
    time: '10:11 PM',
    docStatus: 'draft',
    hasWorkOrder: true,
    actionType: 'open',
  },
  {
    id: 'PO-02608',
    customerName: 'أحمد خالد الكتبي',
    hasInstallation: true,
    branch: 'Ras Al Khor 1(New Branch) - رأس الخور1',
    date: '2025-10-29',
    time: '10:04 PM',
    docStatus: 'draft',
    hasWorkOrder: false,
    actionType: 'start',
  },
];

export default function PlannedOrdersPage() {
  const [plannedOrders] = useState(mockPlannedOrders);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // فلترة البيانات
  const filteredOrders = plannedOrders.filter((order) => {
    const matchesSearch = 
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.branch.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  // Pagination
  const totalItems = 2604;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="space-y-6">
      <PlannedOrdersHeader 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <PlannedOrdersTable 
        orders={filteredOrders}
      />

      <div className="bg-white rounded-xl">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          startIndex={startIndex}
          endIndex={endIndex}
          totalItems={totalItems}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}