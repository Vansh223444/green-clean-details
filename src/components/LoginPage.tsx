
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Lock } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/de752e82-4b23-401c-972a-e0a717706091.png" 
              alt="Bridgeway" 
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-3xl font-bold text-black mb-2 tracking-tight">Customer Portal</h1>
          <p className="text-gray-600 text-lg">Welcome back! Sign in to access your dashboard</p>
        </div>

        <Card className="border-0 shadow-2xl backdrop-blur-sm bg-white/95">
          <CardHeader className="space-y-2 pb-6">
            <CardTitle className="text-2xl font-bold text-center text-black">Sign In</CardTitle>
            <CardDescription className="text-center text-gray-600 text-base">
              Enter your credentials to access your cleaning service dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="email" className="text-black font-semibold text-sm uppercase tracking-wide">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-12 border-2 border-gray-200 focus:border-[#04EF96] focus:ring-2 focus:ring-[#04EF96]/20 text-black rounded-xl transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="password" className="text-black font-semibold text-sm uppercase tracking-wide">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 h-12 border-2 border-gray-200 focus:border-[#04EF96] focus:ring-2 focus:ring-[#04EF96]/20 text-black rounded-xl transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full font-bold py-4 h-12 text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg rounded-xl"
                style={{ backgroundColor: '#04EF96', color: 'white' }}
              >
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-500 mt-8 font-medium">
          Need assistance? Contact our support team
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
