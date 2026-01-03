import React from 'react';

const StatisticalTables = () => {
  return (
    <div className="bg-gray-200 p-6">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Static</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Total User Card */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-purple-100 text-purple-500 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A2 2 0 015 16.414V15a5.002 5.002 0 014-4.9m10 4.9v1.414a2 2 0 01-.121.39m-1.757 1.781A2 2 0 0115 19.9h-6a2 2 0 01-1.757-1.086m9.514-4.195a2 2 0 00-3.757 0M12 9a2 2 0 110-4 2 2 0 010 4zm0 12a7 7 0 100-14 7 7 0 000 14z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold">Total User</h2>
                <p className="text-2xl font-bold">40,689</p>
                <p className="text-green-500">8.5% Up from yesterday</p>
              </div>
            </div>
          </div>

          {/* Total Order Card */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-yellow-100 text-yellow-500 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0V9m-4 4v5a2 2 0 01-2 2H8a2 2 0 01-2-2v-5" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold">Total Order</h2>
                <p className="text-2xl font-bold">10,293</p>
                <p className="text-green-500">1.3% Up from past week</p>
              </div>
            </div>
          </div>

          {/* Total Sales Card */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-green-100 text-green-500 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4v10H3V10zm8 4h4v6h-4v-6zm8-2h4v8h-4v-8z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold">Total Sales</h2>
                <p className="text-2xl font-bold">$89,000</p>
                <p className="text-red-500">4.3% Down from yesterday</p>
              </div>
            </div>
          </div>

          {/* Total Pending Card */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-red-100 text-red-500 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m0 0a5 5 0 015 5v4m5 4V7a5 5 0 00-5-5M8 3H5m13 10h1a5 5 0 005-5V5a5 5 0 00-5-5h-1" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold">Total Pending</h2>
                <p className="text-2xl font-bold">2,040</p>
                <p className="text-green-500">1.8% Up from yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticalTables;
