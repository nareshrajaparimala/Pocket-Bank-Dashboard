/**
 * SearchAndFilter Component
 * Professional advanced search and filtering with enhanced design
 */

'use client';
import { useState } from 'react';
import { 
  Search, SlidersHorizontal, Calendar, DollarSign, X, ChevronDown,
  Clock, CalendarDays, CalendarRange, CalendarClock,
  Coins, Banknote, Wallet, CreditCard, BadgeDollarSign
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchAndFilter({ onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [dateRange, setDateRange] = useState('all');
  const [amountRange, setAmountRange] = useState('all');

  const handleSearch = (value) => {
    setSearchTerm(value);
    onFilterChange({ searchTerm: value, dateRange, amountRange });
  };

  const handleDateChange = (value) => {
    setDateRange(value);
    onFilterChange({ searchTerm, dateRange: value, amountRange });
  };

  const handleAmountChange = (value) => {
    setAmountRange(value);
    onFilterChange({ searchTerm, dateRange, amountRange: value });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setDateRange('all');
    setAmountRange('all');
    onFilterChange({ searchTerm: '', dateRange: 'all', amountRange: 'all' });
  };

  const activeFiltersCount = (dateRange !== 'all' ? 1 : 0) + (amountRange !== 'all' ? 1 : 0);

  const dateOptions = [
    { value: 'all', label: 'All Time', Icon: Calendar },
    { value: 'today', label: 'Today', Icon: Clock },
    { value: 'week', label: 'This Week', Icon: CalendarDays },
    { value: 'month', label: 'This Month', Icon: CalendarRange },
    { value: 'year', label: 'This Year', Icon: CalendarClock }
  ];

  const amountOptions = [
    { value: 'all', label: 'All Amounts', Icon: Wallet },
    { value: '0-100', label: '$0 - $100', Icon: Coins },
    { value: '100-500', label: '$100 - $500', Icon: Banknote },
    { value: '500-1000', label: '$500 - $1,000', Icon: CreditCard },
    { value: '1000+', label: '$1,000+', Icon: BadgeDollarSign }
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition" size={20} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search transactions by description..."
            className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm hover:shadow-md"
          />
          {searchTerm && (
            <button
              onClick={() => handleSearch('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
            >
              <X size={18} />
            </button>
          )}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowFilters(!showFilters)}
          className={`relative px-6 py-3.5 rounded-xl font-semibold transition shadow-sm hover:shadow-md flex items-center gap-2 ${
            showFilters
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
              : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
          }`}
        >
          <SlidersHorizontal size={20} />
          <span className="hidden sm:inline">Filters</span>
          {activeFiltersCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
          <ChevronDown 
            size={16} 
            className={`transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`}
          />
        </motion.button>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <SlidersHorizontal size={20} className="text-blue-600" />
                  Advanced Filters
                </h3>
                {activeFiltersCount > 0 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={clearFilters}
                    className="text-sm text-red-600 hover:text-red-700 font-semibold flex items-center gap-1"
                  >
                    <X size={16} />
                    Clear All
                  </motion.button>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar size={16} className="text-blue-600" />
                    </div>
                    Date Range
                  </label>
                  <div className="space-y-2">
                    {dateOptions.map((option) => {
                      const IconComponent = option.Icon;
                      return (
                        <motion.button
                          key={option.value}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleDateChange(option.value)}
                          className={`w-full px-4 py-3 rounded-xl font-medium transition text-left flex items-center gap-3 ${
                            dateRange === option.value
                              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                              : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            dateRange === option.value ? 'bg-white/20' : 'bg-blue-50'
                          }`}>
                            <IconComponent size={18} className={dateRange === option.value ? 'text-white' : 'text-blue-600'} />
                          </div>
                          <span>{option.label}</span>
                          {dateRange === option.value && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="ml-auto w-2 h-2 bg-white rounded-full"
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <DollarSign size={16} className="text-green-600" />
                    </div>
                    Amount Range
                  </label>
                  <div className="space-y-2">
                    {amountOptions.map((option) => {
                      const IconComponent = option.Icon;
                      return (
                        <motion.button
                          key={option.value}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleAmountChange(option.value)}
                          className={`w-full px-4 py-3 rounded-xl font-medium transition text-left flex items-center gap-3 ${
                            amountRange === option.value
                              ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg'
                              : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            amountRange === option.value ? 'bg-white/20' : 'bg-green-50'
                          }`}>
                            <IconComponent size={18} className={amountRange === option.value ? 'text-white' : 'text-green-600'} />
                          </div>
                          <span>{option.label}</span>
                          {amountRange === option.value && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="ml-auto w-2 h-2 bg-white rounded-full"
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {activeFiltersCount > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-white rounded-xl border-2 border-blue-200"
                >
                  <p className="text-sm font-semibold text-gray-700 mb-2">Active Filters:</p>
                  <div className="flex flex-wrap gap-2">
                    {dateRange !== 'all' && (
                      <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center gap-1.5">
                        <Calendar size={14} />
                        {dateOptions.find(o => o.value === dateRange)?.label}
                      </span>
                    )}
                    {amountRange !== 'all' && (
                      <span className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1.5">
                        <DollarSign size={14} />
                        {amountOptions.find(o => o.value === amountRange)?.label}
                      </span>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
