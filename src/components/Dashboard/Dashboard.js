import React from "react";
import useDatas from "../../Hooks/useData";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Legend,
  ScatterChart,
  ZAxis,
  Scatter,
  AreaChart,
  Area,
} from "recharts";

const Dashboard = () => {
  const [datas] = useDatas();
  return (
    <div className="mb-32 grid grid-cols-1 xl:grid-cols-2 justify-center">
      {/* <h1> This is Dashboard to show React Recharts {datas.length}</h1> */}
      {/* Line Chart */}
      <div className="mx-auto p-4 mb-4 border rounded-sm">
      <h1>Line Chart</h1>
      <LineChart
        width={600}
        height={300}
        data={datas}
        margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
      >
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </LineChart>
      </div>
      {/* Pie chart */}
      <div className="mx-auto p-4 mb-4  border rounded-sm">
      <h1>Pie Chart</h1>
      <PieChart width={600} height={300}>
        <Pie
          data={datas}
          dataKey="sell"
          nameKey="month"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
          label
        />
        <Pie
          data={datas}
          dataKey="investment"
          nameKey="month"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
        />
        <Pie
          data={datas}
          dataKey="revenue"
          nameKey="month"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          fill="#333dae"
        />
        <Tooltip />
      </PieChart>
      </div>
      {/* Area Chart */}
      <div className="mx-auto p-4 mb-4  border rounded-sm">
      <h1>Area Chart</h1>
      <AreaChart
        width={600}
        height={300}
        data={datas}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="investment"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
      </div>
      <div className="mx-auto p-4 mb-4  border rounded-sm">
      <h1>Scatter Chart</h1>
      <ScatterChart
        width={600}
        height={300}
        margin={{ top: 20, right: 0, bottom: 10, left: 50 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis unit="$" dataKey="investment" name="investment" />
        <ZAxis dataKey="revenue" range={[64, 144]} name="revenue" unit="$" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter name="Investment & Revenue" data={datas} fill="#8884d8" />
        {/* <Scatter name="B school" data={datas} fill="#82ca9d" /> */}
      </ScatterChart>
      </div>
    </div>
  );
};

export default Dashboard;
