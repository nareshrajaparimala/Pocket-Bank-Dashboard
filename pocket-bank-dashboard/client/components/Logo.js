/**
 * Logo Component
 * Professional Pocket Bank logo with icon
 */

import { Wallet } from 'lucide-react';

export default function Logo({ size = 'md' }) {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className="flex items-center gap-2">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg shadow-lg">
        <Wallet className="text-white" size={size === 'lg' ? 32 : size === 'md' ? 24 : 20} />
      </div>
      <span className={`${sizes[size]} font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent`}>
        Pocket Bank
      </span>
    </div>
  );
}
