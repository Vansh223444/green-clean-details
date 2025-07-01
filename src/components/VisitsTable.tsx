
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Download, Image as ImageIcon } from 'lucide-react';

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
          <tr className="border-b border-slate-200">
            <th className="px-8 py-6 text-left text-base font-bold text-white bg-gradient-to-r from-[#04EF96] to-[#00C57D]">
              No. of Visit
            </th>
            <th className="px-8 py-6 text-left text-base font-bold text-white bg-gradient-to-r from-[#04EF96] to-[#00C57D]">
              Visit Date
            </th>
            <th className="px-8 py-6 text-left text-base font-bold text-white bg-gradient-to-r from-[#04EF96] to-[#00C57D]">
              Customer Name
            </th>
            <th className="px-8 py-6 text-left text-base font-bold text-white bg-gradient-to-r from-[#04EF96] to-[#00C57D]">
              Plant Size
            </th>
            <th className="px-8 py-6 text-left text-base font-bold text-white bg-gradient-to-r from-[#04EF96] to-[#00C57D]">
              Before Cleaning
            </th>
            <th className="px-8 py-6 text-left text-base font-bold text-white bg-gradient-to-r from-[#04EF96] to-[#00C57D]">
              After Cleaning
            </th>
            <th className="px-8 py-6 text-left text-base font-bold text-white bg-gradient-to-r from-[#04EF96] to-[#00C57D]">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {visitsData.map((visit, index) => (
            <tr key={index} className="hover:bg-gradient-to-r hover:from-slate-50 hover:to-transparent transition-all duration-300 group">
              <td className="px-8 py-6 text-base font-bold text-slate-800">
                <span className="bg-gradient-to-r from-[#04EF96] to-[#00C57D] text-white px-4 py-2 rounded-xl text-sm">
                  #{visit.visitNo.toString().padStart(3, '0')}
                </span>
              </td>
              <td className="px-8 py-6 text-base text-slate-700 font-medium">
                {new Date(visit.visitDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </td>
              <td className="px-8 py-6 text-base text-slate-700 font-medium">
                {visit.customerName}
              </td>
              <td className="px-8 py-6 text-base text-slate-700 font-medium">
                <span className="bg-slate-100 px-3 py-1 rounded-lg text-sm font-semibold">
                  {visit.plantSize}
                </span>
              </td>
              <td className="px-8 py-6">
                {visit.status === 'Completed' ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <ImageIcon className="w-6 h-6 text-slate-500" />
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center space-x-2 text-sm font-semibold border-2 hover:bg-[#04EF96] hover:text-white hover:border-[#04EF96] transition-all duration-300 rounded-xl"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </Button>
                  </div>
                ) : (
                  <span className="text-base text-slate-400 font-medium">Pending</span>
                )}
              </td>
              <td className="px-8 py-6">
                {visit.status === 'Completed' ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <ImageIcon className="w-6 h-6 text-slate-500" />
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center space-x-2 text-sm font-semibold border-2 hover:bg-[#04EF96] hover:text-white hover:border-[#04EF96] transition-all duration-300 rounded-xl"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </Button>
                  </div>
                ) : (
                  <span className="text-base text-slate-400 font-medium">Pending</span>
                )}
              </td>
              <td className="px-8 py-6">
                <Badge
                  className={`px-4 py-2 text-sm font-bold rounded-xl ${
                    visit.status === 'Completed'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-400 text-white shadow-lg'
                      : 'bg-gradient-to-r from-blue-500 to-indigo-400 text-white shadow-lg'
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
