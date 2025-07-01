
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
      bgColor: '#04EF9615',
      gradient: 'from-emerald-500 to-green-400'
    },
    {
      title: 'Completed Cleanings',
      value: '18',
      icon: RotateCcw,
      color: '#00C57D',
      bgColor: '#00C57D15',
      gradient: 'from-green-500 to-emerald-400'
    },
    {
      title: 'Remaining Cleanings',
      value: '6',
      icon: Clock,
      color: '#6366F1',
      bgColor: '#6366F115',
      gradient: 'from-indigo-500 to-purple-400'
    },
    {
      title: 'Previous Cleaning Date',
      value: 'Dec 15, 2024',
      icon: Calendar,
      color: '#8B5CF6',
      bgColor: '#8B5CF615',
      gradient: 'from-purple-500 to-indigo-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {summaryData.map((item, index) => (
        <Card key={index} className="group border-0 hover:shadow-2xl transition-all duration-500 rounded-2xl bg-gradient-to-br from-white to-slate-50 hover:scale-105 overflow-hidden">
          <CardHeader className="pb-4 pt-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xs font-bold text-slate-600 uppercase tracking-wider leading-tight">
                {item.title}
              </CardTitle>
              <div 
                className={`p-4 rounded-2xl shadow-lg bg-gradient-to-r ${item.gradient} group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon 
                  className="w-6 h-6 text-white drop-shadow-sm" 
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0 pb-6">
            <div className="text-4xl font-bold text-slate-800 tracking-tight mb-2">{item.value}</div>
            <div className="h-1 bg-gradient-to-r from-slate-200 to-transparent rounded-full group-hover:from-slate-300 transition-colors duration-300"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceSummary;
