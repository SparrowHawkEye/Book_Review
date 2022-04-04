import React from "react";
import useDatas from "../../Hooks/useData";
import Chart from "../Chart/Chart";


const Dashboard = () => {
  const [datas, setDatas] = useDatas();
  console.log(datas);
  return (
    <div>
      <h1> This is Dashboard to show React Recharts {datas.length}</h1>
      {
        datas.map(data=><Chart datas={data} key={data.month}></Chart>)
      }
    </div>
  );
};

export default Dashboard;
