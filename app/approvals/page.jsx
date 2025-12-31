'use client';

import { useState } from 'react';
import ApprovalsHeader from './ApprovalsHeader';
import ApprovalsFilters from './ApprovalsFilters';
import ApprovalsGrid from './ApprovalsGrid';

// بيانات وهمية
const mockApprovals = [
  {
    id: 'WO-25-08-0019',
    type: 'Credit',
    status: 'approved',
    customerName: 'IDEAL MOTOR REPAIRING',
    customerType: 'Individual',
    totalAmount: 120,
    discountValue: null,
  },
  {
    id: 'WO-25-08-0031',
    type: 'Credit',
    status: 'approved',
    customerName: 'IBRAHIM AL HAMMADI GARAGE',
    customerType: 'Individual',
    totalAmount: 987,
    discountValue: null,
  },
  {
    id: 'WO-25-08-0075',
    type: 'Fixed Discount',
    status: 'rejected',
    customerName: 'TegenieTegenie',
    customerType: 'Individual',
    totalAmount: 21,
    discountValue: 1,
  },
  {
    id: 'WO-25-08-0113',
    type: 'Credit',
    status: 'approved',
    customerName: 'LAITH AL OBAIDI MOTORS',
    customerType: 'Individual',
    totalAmount: 7990,
    discountValue: null,
  },
  {
    id: 'WO-25-08-0122',
    type: 'Credit',
    status: 'approved',
    customerName: 'IDEAL MOTORS AUTO REPAIRING',
    customerType: 'Individual',
    totalAmount: 125,
    discountValue: null,
  },
  {
    id: 'WO-25-08-0152',
    type: 'Percentage Discount',
    status: 'rejected',
    customerName: 'Majid Tani',
    customerType: 'Individual',
    totalAmount: 210,
    discountValue: 10,
  },
  {
    id: 'WO-25-08-0154',
    type: 'Credit',
    status: 'approved',
    customerName: 'IBRAHIM LORD LAND',
    customerType: 'Individual',
    totalAmount: 300,
    discountValue: null,
  },
  {
    id: 'WO-25-08-0194',
    type: 'Credit',
    status: 'approved',
    customerName: 'Patric',
    customerType: 'Individual',
    totalAmount: 630,
    discountValue: null,
  },
  {
    id: 'WO-25-08-0189',
    type: 'Credit',
    status: 'approved',
    customerName: 'Patric',
    customerType: 'Individual',
    totalAmount: 2624,
    discountValue: null,
  },
  {
    id: 'WO-25-08-0296',
    type: 'Credit',
    status: 'approved',
    customerName: 'IDEAL MOTORE AUTO REPAIRING',
    customerType: 'Individual',
    totalAmount: 125,
    discountValue: null,
  },
  {
    id: 'WO-25-08-0115',
    type: 'Credit',
    status: 'approved',
    customerName: 'Dubai Police',
    customerType: 'Individual',
    totalAmount: 200,
    discountValue: null,
  },
  {
    id: 'WO-25-08-0624',
    type: 'Credit',
    status: 'approved',
    customerName: 'AL SAFA ROAD CONTRACTING LLC',
    customerType: 'Company',
    totalAmount: 660,
    discountValue: null,
  },
  {
    id: 'WO-25-08-0174',
    type: 'Credit',
    status: 'approved',
    customerName: 'Hussin',
    customerType: 'Individual',
    totalAmount: 200,
    discountValue: null,
  },
  {
    id: 'WO-25-08-0608',
    type: 'Credit',
    status: 'approved',
    customerName: 'Abdul Halim عبد الحليم الكوجه',
    customerType: 'Individual',
    totalAmount: 150,
    discountValue: null,
  },
  {
    id: 'WO-25-08-0668',
    type: 'Credit',
    status: 'approved',
    customerName: 'AL SAFA ROAD CONTRACTING LLC',
    customerType: 'Company',
    totalAmount: 332,
    discountValue: null,
  },
  {
    id: 'WO-25-08-0668',
    type: 'Credit',
    status: 'approved',
    customerName: 'AL SAFA ROAD CONTRACTING LLC',
    customerType: 'Company',
    totalAmount: 332,
    discountValue: null,
  },
  {
    id: 'WO-25-08-0001',
    type: 'Credit',
    status: 'approved',
    customerName: 'EMIRATES AUCTION LLC',
    customerType: 'Company',
    totalAmount: 1155,
    discountValue: null,
  },
  {
    id: 'WO-25-08-0002',
    type: 'Credit',
    status: 'approved',
    customerName: 'Dubai Police',
    customerType: 'Individual',
    totalAmount: 200,
    discountValue: null,
  },
];

export default function ApprovalsPage() {
  const [approvals] = useState(mockApprovals);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // فلترة البيانات
  const filteredApprovals = approvals.filter((approval) => {
    const matchesFilter = activeFilter === 'all' || approval.status === activeFilter;
    const matchesSearch = 
      approval.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      approval.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <ApprovalsHeader 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <ApprovalsFilters 
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      
      <ApprovalsGrid 
        approvals={filteredApprovals}
      />
    </div>
  );
}