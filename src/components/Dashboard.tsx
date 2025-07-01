
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ServiceSummary from './ServiceSummary';
import VisitsTable from './VisitsTable';
import { LogOut, User, Calendar } from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard = ({ onLogout }: DashboardProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/de752e82-4b23-401c-972a-e0a717706091.png" 
                alt="Bridgeway" 
                className="h-10 w-auto"
              />
              <div className="border-l border-gray-300 pl-4">
                <h1 className="text-2xl font-bold text-black tracking-tight">Customer Portal</h1>
                <p className="text-sm text-gray-600 font-medium">Cleaning Service Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-4 py-2">
                <User className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-semibold text-black">John Doe</span>
              </div>
              <Button
                onClick={onLogout}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 border-2 border-gray-200 hover:bg-gray-50 hover:border-[#04EF96] transition-all duration-200 rounded-full px-6 py-2"
              >
                <LogOut className="w-4 h-4" />
                <span className="font-medium">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* AMC Plan Overview */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-black tracking-tight">AMC Plan Overview</h2>
              <p className="text-gray-600 mt-2 text-lg">Your annual maintenance contract details</p>
            </div>
            <Badge 
              className="px-4 py-2 text-white font-bold text-sm rounded-full shadow-lg"
              style={{ backgroundColor: '#00C57D' }}
            >
              ✓ Active Plan
            </Badge>
          </div>

          <Card className="border-0 shadow-xl backdrop-blur-sm bg-white/95 rounded-2xl overflow-hidden">
            <CardHeader style={{ backgroundColor: '#6366F1' }} className="text-white py-6">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <Calendar className="w-6 h-6" />
                <span>Premium AMC Plan - 2024</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <ServiceSummary />
            </CardContent>
          </Card>
        </div>

        {/* Visits History */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-black tracking-tight">Cleaning Visits History</h2>
              <p className="text-gray-600 mt-2 text-lg">Detailed log of all cleaning services</p>
            </div>
          </div>
          
          <Card className="border-0 shadow-xl backdrop-blur-sm bg-white/95 rounded-2xl overflow-hidden">
            <CardHeader style={{ backgroundColor: '#04EF96' }} className="text-white py-6">
              <CardTitle className="text-xl">Service Visit Details</CardTitle>
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
