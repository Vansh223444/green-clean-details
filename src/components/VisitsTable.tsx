
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Download } from 'lucide-react';

const VisitsTable = () => {
  const visitsData = [
    {
      visitNo: 1,
      visitDate: '2024-01-15',
      customerName: 'John Doe',
      plantSize: 'Large (500+ sq ft)',
      status: 'Completed'
    },
    {
      visitNo: 2,
      visitDate: '2024-02-15',
      customerName: 'John Doe',
      plantSize: 'Large (500+ sq ft)',
      status: 'Completed'
    },
    {
      visitNo: 3,
      visitDate: '2024-03-15',
      customerName: 'John Doe',
      plantSize: 'Large (500+ sq ft)',
      status: 'Completed'
    },
    {
      visitNo: 4,
      visitDate: '2024-04-15',
      customerName: 'John Doe',
      plantSize: 'Large (500+ sq ft)',
      status: 'Completed'
    },
    {
      visitNo: 5,
      visitDate: '2024-05-15',
      customerName: 'John Doe',
      plantSize: 'Large (500+ sq ft)',
      status: 'Scheduled'
    }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 text-left text-sm font-semibold text-white bg-[#04EF96]">
              No. of Visit
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-white bg-[#04EF96]">
              Visit Date
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-white bg-[#04EF96]">
              Customer Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-white bg-[#04EF96]">
              Plant Size
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-white bg-[#04EF96]">
              Before Cleaning
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-white bg-[#04EF96]">
              After Cleaning
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-white bg-[#04EF96]">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {visitsData.map((visit, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 text-sm font-medium text-black">
                #{visit.visitNo.toString().padStart(3, '0')}
              </td>
              <td className="px-6 py-4 text-sm text-black">
                {new Date(visit.visitDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </td>
              <td className="px-6 py-4 text-sm text-black">
                {visit.customerName}
              </td>
              <td className="px-6 py-4 text-sm text-black">
                {visit.plantSize}
              </td>
              <td className="px-6 py-4">
                {visit.status === 'Completed' ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-600">IMG</span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center space-x-1 text-xs"
                    >
                      <Eye className="w-3 h-3" />
                      <span>View</span>
                    </Button>
                  </div>
                ) : (
                  <span className="text-sm text-gray-400">Pending</span>
                )}
              </td>
              <td className="px-6 py-4">
                {visit.status === 'Completed' ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-600">IMG</span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center space-x-1 text-xs"
                    >
                      <Eye className="w-3 h-3" />
                      <span>View</span>
                    </Button>
                  </div>
                ) : (
                  <span className="text-sm text-gray-400">Pending</span>
                )}
              </td>
              <td className="px-6 py-4">
                <Badge
                  className={`px-2 py-1 text-xs font-medium ${
                    visit.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {visit.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitsTable;
