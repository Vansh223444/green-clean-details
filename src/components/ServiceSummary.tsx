
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, CheckCircle2, Clock, RotateCcw } from 'lucide-react';

const ServiceSummary = () => {
  const summaryData = [
    {
      title: 'Total No. of Cleanings',
      value: '24',
      icon: CheckCircle2,
      color: '#04EF96'
    },
    {
      title: 'Completed Cleanings',
      value: '18',
      icon: RotateCcw,
      color: '#00C57D'
    },
    {
      title: 'Remaining Cleanings',
      value: '6',
      icon: Clock,
      color: '#6366F1'
    },
    {
      title: 'Previous Cleaning Date',
      value: 'Dec 15, 2024',
      icon: Calendar,
      color: '#6366F1'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {summaryData.map((item, index) => (
        <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow duration-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                {item.title}
              </CardTitle>
              <div 
                className="p-2 rounded-full"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <item.icon 
                  className="w-4 h-4" 
                  style={{ color: item.color }}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-2xl font-bold text-black">{item.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceSummary;
