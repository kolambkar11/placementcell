import React from "react";
import Navigationlinks from "./Navigationlinks";

const data = [
  {
    title: "Dashboard",
    route: "/",
  },
  {
    title: "Jobs",
    route: "/jobs",
  },
  {
    title: "Profile",
    route: "/profile",
  },
];
const Header = () => {
  return (
    <>
      <div className="text-2xl font-bold bg-amber-500 p-2 text-black flex">
        {data.map((d, index) => {
          return (
            <Navigationlinks key={index} title={d.title} route={d.route} />
          );
        })}
      </div>
    </>
  );
};

export default Header;
