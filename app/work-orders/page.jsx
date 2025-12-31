'use client';

import { useState } from 'react';
import WorkOrdersHeader from './WorkOrdersHeader';
import WorkOrdersStatusCards from './WorkOrdersStatusCards';
import WorkOrdersList from './WorkOrdersList';
import WorkOrdersPagination from './WorkOrdersPagination';

// بيانات وهمية
const mockWorkOrders = [
  {
    id: 'WO-25-12-0066',
    customerId: 'C35631',
    customerName: 'Hafdafsad',
    vehicleBrand: 'Choverlet',
    vehicleModel: 'Malibu',
    plateNumber: '',
    status: 'received',
    serviceAdvisor: 'AHMAD FAHD ESMAEIL',
    paymentStatus: 'N/A',
    startDate: '2025-10-29',
    startTime: '23:49',
    dueDate: '2025-10-29',
    dueTime: '23:49',
    totalAmount: 1808.4,
    dueAmount: 1808.4,
    isStarted: false,
  },
  {
    id: 'WO-25-12-0063',
    customerId: 'C35631',
    customerName: 'Hafdafsad',
    vehicleBrand: 'Choverlet',
    vehicleModel: 'Malibu',
    plateNumber: '',
    status: 'received',
    serviceAdvisor: 'AFIF AHMAD AYASH',
    paymentStatus: 'N/A',
    startDate: '2025-10-29',
    startTime: '18:07',
    dueDate: '2025-10-29',
    dueTime: '18:38',
    totalAmount: 0,
    dueAmount: 0,
    isStarted: false,
  },
  {
    id: 'WO-25-10-8709',
    customerId: 'DUBAIQ41017',
    customerName: 'UBAIDI MOTORS FZCO',
    vehicleBrand: 'Land Rover',
    vehicleModel: 'Range Rover Velar',
    plateNumber: '',
    status: 'on-hold',
    serviceAdvisor: 'MOH.YAHYA MOKDAD',
    paymentStatus: 'N/A',
    startDate: '2025-10-29',
    startTime: '18:07',
    dueDate: '2025-10-29',
    dueTime: '18:38',
    totalAmount: 750,
    dueAmount: 750,
    isStarted: true,
  },
  {
    id: 'WO-25-10-8700',
    customerId: 'DUBAIF34889',
    customerName: 'Abduldaher',
    vehicleBrand: 'Hyundai',
    vehicleModel: 'Santafe',
    plateNumber: '',
    status: 'delivered',
    serviceAdvisor: 'MOH.YAHYA MOKDAD',
    paymentStatus: 'N/A',
    startDate: '2025-10-29',
    startTime: '17:39',
    dueDate: '2025-10-29',
    dueTime: '18:10',
    totalAmount: 350,
    dueAmount: 0,
    isStarted: true,
  },
  {
    id: 'WO-25-10-8678',
    customerId: 'DUBAIJ40075',
    customerName: 'Abdulla alsaadi',
    vehicleBrand: 'Honda',
    vehicleModel: 'Civic',
    plateNumber: '',
    status: 'delivered',
    serviceAdvisor: 'MOH.YAHYA MOKDAD',
    paymentStatus: 'N/A',
    startDate: '2025-10-29',
    startTime: '16:50',
    dueDate: '2025-10-29',
    dueTime: '17:21',
    totalAmount: 685,
    dueAmount: 0,
    isStarted: true,
  },
];

export default function WorkOrdersPage() {
  const [workOrders] = useState(mockWorkOrders);
  const [activeStatus, setActiveStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // حساب الإحصائيات
  const stats = {
    received: 3,
    inProgress: 44,
    ready: 17,
    awaitingQuality: 8,
    onHold: 0,
    delivered: 1388,
    cancelled: 10,
  };

  // فلترة البيانات
  const filteredWorkOrders = workOrders.filter((order) => {
    const matchesStatus = activeStatus === 'all' || order.status === activeStatus;
    const matchesSearch = 
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.vehicleBrand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.plateNumber.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesSearch;
  });

  // Pagination
  const totalItems = 1450;
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage + 1;
  const endIndex = Math.min(currentPage * rowsPerPage, totalItems);

  return (
    <div className="space-y-6">
      <WorkOrdersHeader 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        lastOrderNo="WO-25-12-0115"
      />
      
      <WorkOrdersStatusCards 
        stats={stats}
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
      />
      
      <WorkOrdersList 
        workOrders={filteredWorkOrders}
      />

      <WorkOrdersPagination
        currentPage={currentPage}
        totalPages={totalPages}
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={totalItems}
        rowsPerPage={rowsPerPage}
        onPageChange={setCurrentPage}
        onRowsPerPageChange={setRowsPerPage}
      />
    </div>
  );
}