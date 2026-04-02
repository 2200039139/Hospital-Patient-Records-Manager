import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const UserDashboard: React.FC = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments for the user
    // api.get('/appointments/my-appointments').then(res => setAppointments(res.data));
  }, []);

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">My Appointments</h3>
            <p className="text-3xl font-bold text-blue-600">{appointments.length}</p>
            <button className="mt-4 text-blue-600 hover:text-blue-800">View All →</button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Book Appointment</h3>
            <p className="text-gray-600">Schedule a new appointment</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Book Now
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Medical Records</h3>
            <p className="text-gray-600">View your medical history</p>
            <button className="mt-4 text-blue-600 hover:text-blue-800">View Records →</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;