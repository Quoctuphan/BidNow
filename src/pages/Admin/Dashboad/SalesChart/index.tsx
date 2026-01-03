import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } 
from 'recharts';

const data = [
  { name: '5k', uv: 40, pv: 24, amt: 24 },
  { name: '10k', uv: 30, pv: 13, amt: 22 },
  { name: '15k', uv: 20, pv: 98, amt: 22 },
  { name: '20k', uv: 27, pv: 39, amt: 20 },
  { name: '25k', uv: 18, pv: 48, amt: 21 },
  { name: '30k', uv: 23, pv: 38, amt: 25 },
  { name: '35k', uv: 34, pv: 43, amt: 21 },
  { name: '40k', uv: 45, pv: 30, amt: 24 },
  { name: '45k', uv: 28, pv: 27, amt: 20 },
  { name: '50k', uv: 38, pv: 23, amt: 21 },
  { name: '55k', uv: 43, pv: 32, amt: 22 },
  { name: '60k', uv: 48, pv: 38, amt: 24 },
];

const SalesChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Sales Details</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
