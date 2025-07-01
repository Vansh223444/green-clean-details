
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-8">
            <img 
              src="/lovable-uploads/de752e82-4b23-401c-972a-e0a717706091.png" 
              alt="Bridgeway" 
              className="h-20 w-auto drop-shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-3 tracking-tight">Customer Portal</h1>
          <p className="text-slate-600 text-lg font-medium">Welcome back! Sign in to access your dashboard</p>
        </div>

        <Card className="border-0 shadow-2xl backdrop-blur-lg bg-white/90 rounded-3xl overflow-hidden">
          <CardHeader className="space-y-3 pb-8 pt-10 px-10">
            <CardTitle className="text-3xl font-bold text-center text-slate-800">Sign In</CardTitle>
            <CardDescription className="text-center text-slate-600 text-lg">
              Enter your credentials to access your cleaning service dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="px-10 pb-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <Label htmlFor="email" className="text-slate-800 font-bold text-sm uppercase tracking-wider">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-14 h-14 border-2 border-slate-200 focus:border-[#04EF96] focus:ring-4 focus:ring-[#04EF96]/20 text-slate-800 rounded-2xl transition-all duration-300 text-lg"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label htmlFor="password" className="text-slate-800 font-bold text-sm uppercase tracking-wider">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-14 h-14 border-2 border-slate-200 focus:border-[#04EF96] focus:ring-4 focus:ring-[#04EF96]/20 text-slate-800 rounded-2xl transition-all duration-300 text-lg"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full font-bold py-6 h-16 text-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl rounded-2xl bg-gradient-to-r from-[#04EF96] to-[#00C57D] hover:from-[#00C57D] hover:to-[#04EF96] text-white shadow-xl"
              >
                Sign In to Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-slate-500 mt-10 font-medium">
          Need assistance? Contact our support team at <span className="text-[#04EF96] font-semibold">support@bridgeway.com</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
