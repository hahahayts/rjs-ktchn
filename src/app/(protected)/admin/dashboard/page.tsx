"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Users,
  ShoppingBag,
  Activity,
  Bell,
  MoreHorizontal,
  Filter,
} from "lucide-react";

// Sample data
const salesData = [
  { name: "Mon", value: 4000 },
  { name: "Tue", value: 3000 },
  { name: "Wed", value: 5000 },
  { name: "Thu", value: 2780 },
  { name: "Fri", value: 6890 },
  { name: "Sat", value: 4390 },
  { name: "Sun", value: 3490 },
];

const recentOrders = [
  {
    id: "#ORD-5142",
    customer: "Alex Johnson",
    product: "Premium Plan",
    date: "Today, 10:45 AM",
    status: "Completed",
    amount: "$129.99",
  },
  {
    id: "#ORD-5141",
    customer: "Sarah Miller",
    product: "Annual Subscription",
    date: "Today, 09:23 AM",
    status: "Processing",
    amount: "$349.50",
  },
  {
    id: "#ORD-5140",
    customer: "Robert Chen",
    product: "Basic Plan",
    date: "Yesterday, 4:52 PM",
    status: "Completed",
    amount: "$49.99",
  },
  {
    id: "#ORD-5139",
    customer: "Emma Wilson",
    product: "Premium Plan",
    date: "Yesterday, 2:15 PM",
    status: "Cancelled",
    amount: "$129.99",
  },
];

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState("This Week");

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome, Admin!</h1>
          <p className="text-gray-600 mt-1">
            Here's an overview of what's happening today.
          </p>
        </div>
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <button className="px-2 py-1 text-sm flex items-center gap-1 bg-white border rounded-md">
            <Filter size={14} />
            <span>Filter</span>
          </button>
          <button className="px-4 py-2 bg-yellow-400 text-black font-medium rounded-md hover:bg-yellow-500 transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Revenue"
          value="$24,532"
          change="+12.5%"
          isPositive={true}
          icon={<DollarSign />}
          subtitle="vs previous week"
          color="bg-green-100"
          iconColor="text-green-600"
        />
        <StatsCard
          title="Total Users"
          value="1,429"
          change="+8.2%"
          isPositive={true}
          icon={<Users />}
          subtitle="vs previous week"
          color="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatsCard
          title="New Orders"
          value="342"
          change="-3.1%"
          isPositive={false}
          icon={<ShoppingBag />}
          subtitle="vs previous week"
          color="bg-yellow-100"
          iconColor="text-yellow-600"
        />
        <StatsCard
          title="Conversion Rate"
          value="3.6%"
          change="+2.4%"
          isPositive={true}
          icon={<Activity />}
          subtitle="vs previous week"
          color="bg-purple-100"
          iconColor="text-purple-600"
        />
      </div>

      {/* Charts & Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Sales Chart */}
        <div className="lg:col-span-8 bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Sales Overview</h2>
            <div className="flex items-center">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="text-sm border rounded-md px-2 py-1"
              >
                <option>This Week</option>
                <option>This Month</option>
                <option>This Quarter</option>
                <option>This Year</option>
              </select>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#FBBF24" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Notifications */}
        <div className="lg:col-span-4 bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold flex items-center gap-2">
              <Bell size={16} />
              Recent Notifications
            </h2>
            <button className="text-xs text-blue-600 hover:underline">
              View All
            </button>
          </div>
          <div className="space-y-4">
            <NotificationItem
              title="New user registered"
              time="35 min ago"
              description="Emma Wilson just created an account"
            />
            <NotificationItem
              title="New order placed"
              time="2 hours ago"
              description="Order #5142 was placed"
              highlight="#5142"
            />
            <NotificationItem
              title="Payment successful"
              time="5 hours ago"
              description="Payment for order #5138 was received"
              highlight="#5138"
            />
            <NotificationItem
              title="Product stock low"
              time="Yesterday"
              description="Premium Plan has low inventory"
              isAlert
            />
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
          <button className="text-sm text-blue-600 hover:underline">
            View All Orders
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b">
                <th className="pb-3 font-medium">Order ID</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Product</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Amount</th>
                <th className="pb-3 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {recentOrders.map((order) => (
                <tr key={order.id} className="text-sm">
                  <td className="py-4 font-medium">{order.id}</td>
                  <td className="py-4">{order.customer}</td>
                  <td className="py-4">{order.product}</td>
                  <td className="py-4 text-gray-500">{order.date}</td>
                  <td className="py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Processing"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 text-right font-medium">
                    {order.amount}
                  </td>
                  <td className="py-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Stats Card Component
function StatsCard({
  title,
  value,
  change,
  isPositive,
  icon,
  subtitle,
  color,
  iconColor,
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
          <div className="flex items-center mt-2 text-sm">
            <span
              className={`flex items-center ${
                isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              {isPositive ? (
                <ArrowUpRight size={14} />
              ) : (
                <ArrowDownRight size={14} />
              )}
              {change}
            </span>
            <span className="text-gray-500 ml-1">{subtitle}</span>
          </div>
        </div>
        <div
          className={`${color} ${iconColor} p-3 rounded-full h-12 w-12 flex items-center justify-center`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

// Notification Item Component
function NotificationItem({ title, time, description, highlight, isAlert }) {
  const renderDescription = () => {
    if (!highlight) return description;

    const parts = description.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="font-medium">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="border-l-4 pl-3 py-1 border-l-gray-200">
      <div className="flex justify-between">
        <h4 className="font-medium text-sm">{title}</h4>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
      <p
        className={`text-xs mt-1 ${isAlert ? "text-red-600" : "text-gray-600"}`}
      >
        {renderDescription()}
      </p>
    </div>
  );
}
