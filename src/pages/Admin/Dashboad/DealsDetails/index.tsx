import React from 'react';

const dealsData = [
  {
    productName: 'Apple Watch',
    location: '11,Trần Duy Hưng',
    dateTime: '12.09.2019 - 12:53 PM',
    amount: 423,
    piece: '$34,295',
    status: 'Delivered'
  },
  {
    productName: 'Apple Watch',
    location: '34,Hoàn Kiếm',
    dateTime: '12.09.2019 - 12:53 PM',
    amount: 423,
    piece: '$34,295',
    status: 'Pending'
  },
  {
    productName: 'Apple Watch',
    location: '25,Kiến Thụy',
    dateTime: '12.09.2019 - 12:53 PM',
    amount: 423,
    piece: '$34,295',
    status: 'Rejected'
  }
];

const getStatusClass = (status) => {
  switch (status) {
    case 'Delivered':
      return 'bg-green-100 text-green-500';
    case 'Pending':
      return 'bg-yellow-100 text-yellow-500';
    case 'Rejected':
      return 'bg-red-100 text-red-500';
    default:
      return '';
  }
};

const DealsDetails = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Deals Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Product Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Location
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date - Time
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Piece
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dealsData.map((deal, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://via.placeholder.com/40"
                        alt="product"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{deal.productName}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{deal.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{deal.dateTime}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{deal.amount}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{deal.piece}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(deal.status)}`}
                  >
                    {deal.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DealsDetails;
