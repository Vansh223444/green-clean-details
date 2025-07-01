
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, CheckCircle2, Clock, RotateCcw } from 'lucide-react';

const ServiceSummary = () => {
  const summaryData = [
    {
      title: 'Total No. of Cleanings',
      value: '24',
      icon: CheckCircle2,
      color: '#04EF96',
      bgColor: '#04EF9610'
    },
    {
      title: 'Completed Cleanings',
      value: '18',
      icon: RotateCcw,
      color: '#00C57D',
      bgColor: '#00C57D10'
    },
    {
      title: 'Remaining Cleanings',
      value: '6',
      icon: Clock,
      color: '#6366F1',
      bgColor: '#6366F110'
    },
    {
      title: 'Previous Cleaning Date',
      value: 'Dec 15, 2024',
      icon: Calendar,
      color: '#6366F1',
      bgColor: '#6366F110'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {summaryData.map((item, index) => (
        <Card key={index} className="border-2 border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 rounded-xl bg-white/50 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xs font-bold text-gray-600 uppercase tracking-wider leading-tight">
                {item.title}
              </CardTitle>
              <div 
                className="p-3 rounded-xl shadow-sm"
                style={{ backgroundColor: item.bgColor }}
              >
                <item.icon 
                  className="w-5 h-5" 
                  style={{ color: item.color }}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-bold text-black tracking-tight">{item.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceSummary;
