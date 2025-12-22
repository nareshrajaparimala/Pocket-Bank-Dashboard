/**
 * UserProfileCard Component
 * Displays detailed user information and account stats
 */

'use client';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Calendar, CreditCard, Shield } from 'lucide-react';

export default function UserProfileCard() {
  const user = {
    name: "John Doe",
    email: "john.doe@pocketbank.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    memberSince: "January 2024",
    accountNumber: "**** **** **** 1234",
    accountType: "Premium",
    verified: true
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
      
      <div className="relative">
        {/* Profile Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-2xl font-bold text-gray-900">{user.name}</h3>
              {user.verified && (
                <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Shield size={12} />
                  Verified
                </div>
              )}
            </div>
            <p className="text-sm text-gray-500 font-medium">{user.accountType} Account</p>
          </div>
        </div>

        {/* User Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Mail className="text-blue-600" size={18} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Email</p>
              <p className="text-sm font-semibold text-gray-900">{user.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Phone className="text-green-600" size={18} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Phone</p>
              <p className="text-sm font-semibold text-gray-900">{user.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <MapPin className="text-purple-600" size={18} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Location</p>
              <p className="text-sm font-semibold text-gray-900">{user.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Calendar className="text-orange-600" size={18} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Member Since</p>
              <p className="text-sm font-semibold text-gray-900">{user.memberSince}</p>
            </div>
          </div>
        </div>

        {/* Account Number */}
        <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs opacity-75 mb-1">Account Number</p>
              <p className="text-lg font-mono font-bold tracking-wider">{user.accountNumber}</p>
            </div>
            <CreditCard size={32} className="opacity-50" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
