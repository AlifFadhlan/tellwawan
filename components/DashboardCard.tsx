import React from 'react';

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, count, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-3 flex flex-col justify-between h-40"> {/* Reduced padding and height */}
      <div className="flex justify-between items-center mb-2"> {/* Reduced bottom margin */}
        <div className="text-2xl font-bold text-gray-700">{count}</div>
        <div className="text-gray-500">{icon}</div>
      </div>
      <div className="text-gray-600">{title}</div>
    </div>
  );
};

export default DashboardCard;
