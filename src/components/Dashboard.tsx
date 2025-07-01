
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ServiceSummary from './ServiceSummary';
import VisitsTable from './VisitsTable';
import { LogOut, User, Calendar, CheckCircle } from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard = ({ onLogout }: DashboardProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#04EF96' }}>
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-black">Customer Portal</h1>
                <p className="text-sm text-gray-600">Cleaning Service Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-black">John Doe</span>
              </div>
              <Button
                onClick={onLogout}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 border-gray-200 hover:bg-gray-50"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AMC Plan Overview */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-black">AMC Plan Overview</h2>
              <p className="text-gray-600 mt-1">Your annual maintenance contract details</p>
            </div>
            <Badge 
              className="px-3 py-1 text-white font-medium"
              style={{ backgroundColor: '#00C57D' }}
            >
              Active Plan
            </Badge>
          </div>

          <Card className="border border-gray-200 shadow-sm">
            <CardHeader style={{ backgroundColor: '#6366F1' }} className="text-white">
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Premium AMC Plan - 2024</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ServiceSummary />
            </CardContent>
          </Card>
        </div>

        {/* Visits History */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-black">Cleaning Visits History</h2>
              <p className="text-gray-600 mt-1">Detailed log of all cleaning services</p>
            </div>
          </div>
          
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader style={{ backgroundColor: '#04EF96' }} className="text-white">
              <CardTitle>Service Visit Details</CardTitle>
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
