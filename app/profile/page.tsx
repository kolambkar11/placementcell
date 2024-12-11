"use client";
import React, { useState } from "react";
import Forminputs from "./Forminputs";
import Personal from "./Personal";
import Academic from "./Academic";
import Further from "./Further";
const Profile = () => {
  const [personal, setPersonal] = useState(true);
  const [academic, setAcademic] = useState(false);
  const [further, setFurther] = useState(false);

  const handleClickBtnPersonal = () => {
    console.log("Clicked on Personal");
    setPersonal(true);
    setAcademic(false);
    setFurther(false);
  };

  const handleClickBtnAcademic = () => {
    console.log("Clicked on Academics");
    setAcademic(true);
    setPersonal(false);
    setFurther(false);
  };

  const handleClickBtnFurther = () => {
    console.log("Clicked on Academics");
    setAcademic(false);
    setPersonal(false);
    setFurther(true);
  };

  return (
    <>
      <div className="w-3/4 mx-auto mt-4">
        <div className="grid grid-cols-4 gap-x-6 gap-y-8 sm:grid-cols-3">
          <span
            className="border text-center py-3 px-4 bg-slate-200"
            onClick={handleClickBtnPersonal}
          >
            Personal
          </span>
          <span
            className="border text-center py-3 px-4 bg-slate-200"
            onClick={handleClickBtnAcademic}
          >
            Academic
          </span>
          <span
            className="border text-center py-3 px-4 bg-slate-200"
            onClick={handleClickBtnFurther}
          >
            Further
          </span>
        </div>
        <div className="bg-red-500 text-white"></div>
      </div>
      {personal ? (
        <>
          <Personal />
        </>
      ) : (
        <></>
      )}
      {academic ? (
        <>
          <Academic />
        </>
      ) : (
        <></>
      )}
      {further ? (
        <>
          <Further />
        </>
      ) : (
        <></>
      )}
      {/* <div className="w-3/4 mx-auto mt-4">
        <h1 className="text-2xl font-bold">Personal Details</h1>
        <form action="">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
            {inputs.map((i, index) => {
              return (
                <Forminputs
                  type={i.type}
                  title={i.title}
                  id={i.id}
                  options={i.options}
                  key={index}
                />
              );
            })}
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
            <button className="btn border-t-zinc-500 p-2 rounded-md bg-blue-600 text-white w-full">
              Submit
            </button>
          </div>
        </form>
      </div> */}
    </>
  );
};

export default Profile;
