'use client';
import React from "react";
import { motion } from "framer-motion";
import { Check, Package, Sparkles, TrendingUp } from "lucide-react"; // Added more icons for floating elements

// Assuming StatCard is defined elsewhere and has these props
interface StatCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

// Dummy StatCard for preview. Use your actual StatCard component.
const StatCard: React.FC<StatCardProps> = ({ label, value, change, isPositive }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
      <div className="text-xs text-slate-500 font-medium mb-1">{label}</div>
      <div className="text-2xl font-bold text-slate-900 mb-1">{value}</div>
      <div className={`text-xs font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>
        {change}
      </div>
    </div>
  );
};


export default function HeroSection() {
  return (
    <section className="relative min-h-screen mt-12 flex items-center justify-center bg-white overflow-hidden pb-12 px-6 pt-20">
      {/* Subtle Gradient Orbs - Added subtle animation */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], x: [0, 10, 0], y: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.05, 1], x: [0, -10, 0], y: [0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl"
      />
      
      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto text-center z-10">
        
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
            Empowering Your Sales,
            <br />
            <span className="text-indigo-700 font-bold ">Simplifying Your Workflow</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-600 mt-6 max-w-3xl mx-auto"
        >
          Streamline your billing process and boost productivity with automated address entry and smart order management.
        </motion.p>

        {/* CTA Buttons - Added subtle bounce on entry */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut", type: "spring", stiffness: 100, damping: 10 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <motion.button
            whileHover={{ y: -3, scale: 1.02 }} // Lift and slightly scale on hover
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-indigo-600 ease-in-out hover:bg-indigo-700 text-white rounded-md font-medium hover:cursor-pointer transition-all shadow-md hover:shadow-lg"
          >
            Get Started
          </motion.button>
          
          <motion.button
            whileHover={{ y: -3, scale: 1.02 }} // Lift and slightly scale on hover
            whileTap={{ scale: 0.98 }}
            className="group px-6 py-3 bg-white hover:bg-slate-300/20 cursor-pointer hover:text-indigo-600 ease-in-out text-slate-900 rounded-md font-medium border border-slate-300 transition-all shadow-md hover:shadow-lg"
          >
            Learn More
            <span className="ml-2 inline-block transform transition-transform group-hover:translate-x-1">→</span>
          </motion.button>
        </motion.div>

        {/* Feature Pills - Added subtle entry animation and a touch of interaction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}
            className="flex items-center gap-2 text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-200 cursor-pointer transition-all"
          >
            <Check className="w-5 h-5 text-indigo-600" />
            <span className="font-medium">Free Support</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}
            className="flex items-center gap-2 text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-200 cursor-pointer transition-all"
          >
            <Check className="w-5 h-5 text-indigo-600" />
            <span className="font-medium">Expert support is with you at every step</span>
          </motion.div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }} // More pronounced initial animation
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut", type: "spring", stiffness: 80, damping: 15 }} // Spring for a lively feel
          className="relative mt-16 max-w-5xl mx-auto"
        >
          {/* Floating Elements - Added more varied animations and icons */}
          <motion.div
            animate={{ 
              y: [0, -15, 0], // More vertical movement
              rotate: [0, 5, -5, 0], // More playful rotation
              x: [0, 5, -5, 0] // Slight horizontal drift
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.5
            }}
            className="absolute -left-12 top-20 hidden lg:block p-3 bg-white rounded-full shadow-lg border border-slate-100"
          >
             <Sparkles className="w-6 h-6 text-yellow-500" />
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, 15, 0], // More vertical movement
              rotate: [0, -5, 5, 0], // More playful rotation
              x: [0, -5, 5, 0] // Slight horizontal drift
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
              repeatDelay: 0.7
            }}
            className="absolute -right-16 bottom-24 hidden lg:block p-3 bg-white rounded-full shadow-lg border border-slate-100"
          >
             <TrendingUp className="w-6 h-6 text-green-500" />
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -10, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
              repeatDelay: 1
            }}
            className="absolute left-1/4 -top-10 hidden lg:block p-3 bg-white rounded-full shadow-lg border border-slate-100"
          >
             <Package className="w-6 h-6 text-indigo-500" />
          </motion.div>


          {/* Status Badge - Added bounce animation */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: -20 }} // Initial position for bounce
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, type: "spring", stiffness: 120, damping: 12 }}
            className="absolute -right-4 top-8 hidden md:block"
          >
            <div className="bg-indigo-100 text-indigo-700 px-4 m-8 py-2 rounded-lg shadow-lg shadow-indigo-500/30 flex items-center gap-2 border border-indigo-200">
              <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
              <span className="font-semibold text-sm">Active Orders</span>
            </div>
          </motion.div>

          {/* Main Dashboard Card */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xl shadow-indigo-600/20">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-8 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  <span className="text-sm font-medium opacity-90">Live Dashboard</span>
                </div>
                <span className="text-sm opacity-90">Oct 12, 2025</span>
              </div>
              <h3 className="text-2xl font-bold">Sales Overview</h3>
            </div>

            {/* Dashboard Content */}
            <div className="p-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <StatCard 
                  label="Monthly Sales" 
                  value="25.4k" 
                  change="+12.5%" 
                  isPositive={true}
                />
                <StatCard 
                  label="Revenue" 
                  value="$635,240" 
                  change="+8.2%" 
                  isPositive={true}
                />
                <StatCard 
                  label="Active Users" 
                  value="49 now" 
                  change="Live" 
                  isPositive={true}
                />
              </div>

              {/* Order List */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Recent Orders</h4>
                {[
                  { id: "#ORD-2847", customer: "Sarah Johnson", amount: "$1,240", status: "Completed" },
                  { id: "#ORD-2846", customer: "Michael Chen", amount: "$890", status: "Processing" },
                  { id: "#ORD-2845", customer: "Emma Williams", amount: "$2,150", status: "Completed" }
                ].map((order, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-indigo-300 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-indigo-600 font-semibold text-sm">
                          {order.customer.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 text-sm">{order.customer}</div>
                        <div className="text-xs text-slate-500">{order.id}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-slate-900">{order.amount}</div>
                      <div className={`text-xs ${order.status === "Completed" ? "text-green-600" : "text-amber-600"}`}>
                        {order.status}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-slate-600">
                  <Check className="w-4 h-4 text-indigo-600" />
                  <span>All insights in real-time</span>
                </div>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors">
                  View More →
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}