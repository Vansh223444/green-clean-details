
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ServiceSummary from './ServiceSummary';
import VisitsTable from './VisitsTable';
import { LogOut, User, Calendar, Shield } from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard = ({ onLogout }: DashboardProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b border-slate-200/60 bg-white/90 backdrop-blur-lg shadow-lg sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center space-x-6">
              <img 
                src="/lovable-uploads/de752e82-4b23-401c-972a-e0a717706091.png" 
                alt="Bridgeway" 
                className="h-16 w-auto drop-shadow-lg"
              />
              <div className="border-l border-slate-300 pl-6">
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Customer Portal</h1>
                <p className="text-base text-slate-600 font-semibold">Professional Cleaning Service Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-4 bg-gradient-to-r from-slate-100 to-slate-50 rounded-2xl px-6 py-3 shadow-lg">
                <div className="p-2 bg-white rounded-xl shadow-sm">
                  <User className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-800 block">John Doe</span>
                  <span className="text-xs text-slate-500">Premium Member</span>
                </div>
              </div>
              <Button
                onClick={onLogout}
                variant="outline"
                size="lg"
                className="flex items-center space-x-3 border-2 border-slate-200 hover:bg-gradient-to-r hover:from-[#04EF96] hover:to-[#00C57D] hover:text-white hover:border-transparent transition-all duration-300 rounded-2xl px-8 py-3 shadow-lg"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-bold">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* AMC Plan Overview */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 tracking-tight mb-3">AMC Plan Overview</h2>
              <p className="text-slate-600 text-xl font-medium">Your annual maintenance contract details and benefits</p>
            </div>
            <Badge 
              className="px-6 py-3 text-white font-bold text-base rounded-2xl shadow-xl flex items-center space-x-2"
              style={{ backgroundColor: '#00C57D' }}
            >
              <Shield className="w-5 h-5" />
              <span>Active Premium Plan</span>
            </Badge>
          </div>

          <Card className="border-0 shadow-2xl backdrop-blur-lg bg-white/95 rounded-3xl overflow-hidden">
            <CardHeader style={{ backgroundColor: '#8B5CF6' }} className="text-white py-8 bg-gradient-to-r from-purple-500 to-indigo-600">
              <CardTitle className="flex items-center space-x-4 text-2xl">
                <div className="p-3 bg-white/20 rounded-2xl">
                  <Calendar className="w-8 h-8" />
                </div>
                <div>
                  <span className="block">Premium AMC Plan - 2024</span>
                  <span className="text-purple-100 text-sm font-normal">Complete Cleaning Solution</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10">
              <ServiceSummary />
            </CardContent>
          </Card>
        </div>

        {/* Visits History */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 tracking-tight mb-3">Cleaning Visits History</h2>
              <p className="text-slate-600 text-xl font-medium">Comprehensive log of all your cleaning services</p>
            </div>
          </div>
          
          <Card className="border-0 shadow-2xl backdrop-blur-lg bg-white/95 rounded-3xl overflow-hidden">
            <CardHeader className="py-8 bg-gradient-to-r from-[#04EF96] to-[#00C57D] text-white">
              <CardTitle className="text-2xl flex items-center space-x-3">
                <div className="p-3 bg-white/20 rounded-2xl">
                  <Calendar className="w-8 h-8" />
                </div>
                <span>Service Visit Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <VisitsTable />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
