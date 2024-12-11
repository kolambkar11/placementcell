import React from "react";
import Dasboardcard from "./Dasboardcard";

const DashboardCardData = [
  {
    title: "Interview",
    count: 4,
    bgCls: "bg-blue-500",
  },
  {
    title: "Rejected",
    count: 5,
    bgCls: "bg-red-500",
  },
  {
    title: "Pipelined",
    count: 3,
    bgCls: "bg-orange-400",
  },

  {
    title: "Awating Feedback",
    count: 3,
    bgCls: "bg-green-500",
  },
];
const Dashboard = () => {
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex gap-3">
          {DashboardCardData.map((d, index) => {
            return (
              <Dasboardcard
                key={index}
                dataTitle={d.title}
                dataCount={d.count}
                bgClass={d.bgCls}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
