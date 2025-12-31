'use client';

import { useState } from 'react';
import InspectionHeader from './InspectionHeader';
import StatusCards from './StatusCards';
import InspectionTable from './InspectionTable';

const mockInspections = [
  {
    id: 'INS-001',
    customerName: 'Ahmed Al-Mansouri',
    vehicleInfo: 'Toyota Camry 2022 - ABC 1234',
    status: 'completed',
    supervisor: 'Mohammed Hassan',
    createdBy: 'Admin',
    createdAt: '2025-12-28',
    issues: 3,
    estimatedCost: 2500,
  },
  {
    id: 'INS-002',
    customerName: 'Fatima Al-Zaabi',
    vehicleInfo: 'Honda Accord 2021 - XYZ 5678',
    status: 'in-progress',
    supervisor: 'Ali Ahmed',
    createdBy: 'Manager',
    createdAt: '2025-12-29',
    issues: 5,
    estimatedCost: 3200,
  },
  {
    id: 'INS-003',
    customerName: 'Khalid Al-Shamsi',
    vehicleInfo: 'BMW X5 2023 - DEF 9012',
    status: 'in-progress',
    supervisor: 'Mohammed Hassan',
    createdBy: 'Admin',
    createdAt: '2025-12-30',
    issues: 2,
    estimatedCost: 4500,
  },
  {
    id: 'INS-004',
    customerName: 'Mariam Al-Hashimi',
    vehicleInfo: 'Mercedes C-Class 2020 - GHI 3456',
    status: 'not-started',
    supervisor: 'Sara Mohammed',
    createdBy: 'Manager',
    createdAt: '2025-12-31',
    issues: 0,
    estimatedCost: 0,
  },
  {
    id: 'INS-005',
    customerName: 'Salem Al-Dhaheri',
    vehicleInfo: 'Nissan Patrol 2022 - JKL 7890',
    status: 'completed',
    supervisor: 'Ali Ahmed',
    createdBy: 'Admin',
    createdAt: '2025-12-27',
    issues: 4,
    estimatedCost: 5200,
  },
  {
    id: 'INS-006',
    customerName: 'Noura Al-Kaabi',
    vehicleInfo: 'Lexus ES 2023 - MNO 2345',
    status: 'not-started',
    supervisor: 'Mohammed Hassan',
    createdBy: 'Manager',
    createdAt: '2025-12-31',
    issues: 0,
    estimatedCost: 0,
  },
];

export default function InspectionPage() {
  const [inspections, setInspections] = useState(mockInspections);
  const [activeStatus, setActiveStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInspections = inspections.filter((inspection) => {
    const matchesStatus = activeStatus === 'all' || inspection.status === activeStatus;
    const matchesSearch = 
      inspection.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inspection.vehicleInfo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inspection.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesSearch;
  });

  const stats = {
    notStarted: inspections.filter(i => i.status === 'not-started').length,
    inProgress: inspections.filter(i => i.status === 'in-progress').length,
    completed: inspections.filter(i => i.status === 'completed').length,
  };

  return (
    <div className="space-y-6">
      <InspectionHeader 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <StatusCards 
        stats={stats}
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
      />
      
      <InspectionTable 
        inspections={filteredInspections}
      />
    </div>
  );
}