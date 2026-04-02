import React from 'react';
import Layout from '../components/Layout';

const SuperAdminDashboard: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Super Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Total Hospitals</h3>
            <p className="text-3xl font-bold text-blue-600">8</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Total Admins</h3>
            <p className="text-3xl font-bold text-green-600">12</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-yellow-600">1,245</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">System Health</h3>
            <p className="text-3xl font-bold text-green-600">98%</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">System Settings</h2>
            <div className="space-y-3">
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Manage All Admins
              </button>
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                System Configuration
              </button>
              <button className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                Audit Logs
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
            <div className="space-y-3">
              <div className="border-b pb-2">
                <p className="text-sm text-gray-600">Admin John added new hospital</p>
                <span className="text-xs text-gray-400">2 hours ago</span>
              </div>
              <div className="border-b pb-2">
                <p className="text-sm text-gray-600">System backup completed</p>
                <span className="text-xs text-gray-400">5 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SuperAdminDashboard;