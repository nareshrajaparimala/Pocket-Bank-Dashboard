/**
 * Home Page
 * Landing page with hero section, features, and company info
 */

'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Shield, Zap, Globe, TrendingUp, Lock, Smartphone, 
  CreditCard, BarChart3, Clock, Award 
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: "Instant Transfers",
      description: "Send money in seconds with real-time processing"
    },
    {
      icon: <Shield className="text-blue-500" size={32} />,
      title: "Bank-Level Security",
      description: "256-bit encryption and multi-factor authentication"
    },
    {
      icon: <Globe className="text-green-500" size={32} />,
      title: "Global Access",
      description: "Access your account anywhere, anytime"
    },
    {
      icon: <TrendingUp className="text-purple-500" size={32} />,
      title: "Smart Analytics",
      description: "Track spending with intelligent insights"
    },
    {
      icon: <Smartphone className="text-pink-500" size={32} />,
      title: "Mobile First",
      description: "Optimized for all devices and platforms"
    },
    {
      icon: <CreditCard className="text-indigo-500" size={32} />,
      title: "Virtual Cards",
      description: "Create instant virtual cards for online shopping"
    }
  ];

  const stats = [
    { value: "1M+", label: "Active Users" },
    { value: "$50B+", label: "Transactions" },
    { value: "150+", label: "Countries" },
    { value: "99.9%", label: "Uptime" }
  ];

  const partners = [
    "Visa", "Mastercard", "PayPal", "Stripe", "AWS", "Google Cloud"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Banking Made
                <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  Simple & Secure
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Experience the future of digital banking with Pocket Bank. 
                Manage your finances effortlessly with cutting-edge technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/dashboard">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-3xl transition flex items-center gap-2"
                  >
                    Get Started
                    <Zap size={20} />
                  </motion.button>
                </Link>
                <Link href="#features">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"></div>
                    <div>
                      <p className="text-sm text-blue-100">Total Balance</p>
                      <p className="text-3xl font-bold">$12,500.00</p>
                    </div>
                  </div>
                  <Award className="text-yellow-300" size={32} />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-white/10 p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <TrendingUp size={20} />
                      </div>
                      <div>
                        <p className="text-sm">Income</p>
                        <p className="font-semibold">+$5,000</p>
                      </div>
                    </div>
                    <span className="text-green-400 text-sm">+12%</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                        <BarChart3 size={20} />
                      </div>
                      <div>
                        <p className="text-sm">Expenses</p>
                        <p className="font-semibold">-$2,500</p>
                      </div>
                    </div>
                    <span className="text-red-400 text-sm">-8%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Pocket Bank?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience banking reimagined with features designed for the modern world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-gray-500 text-sm font-semibold mb-8 uppercase tracking-wider">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join millions of users who trust Pocket Bank for their financial needs
            </p>
            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition inline-flex items-center gap-3"
              >
                Open Your Account
                <Clock size={24} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
