import React from 'react';
import Layout from '../components/Layout';

const AdminDashboard: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Total Patients</h3>
            <p className="text-3xl font-bold text-blue-600">156</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Total Doctors</h3>
            <p className="text-3xl font-bold text-green-600">24</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Today's Appointments</h3>
            <p className="text-3xl font-bold text-yellow-600">42</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-purple-600">$12,430</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Recent Appointments</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b pb-2">
                <span>John Doe</span>
                <span className="text-sm text-gray-600">Today, 10:00 AM</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Jane Smith</span>
                <span className="text-sm text-gray-600">Today, 11:30 AM</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Add New Doctor
              </button>
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Manage Patients
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;