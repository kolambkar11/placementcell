import React from "react";
import Forminputs from "./Forminputs";
const inputs = [
  {
    type: "text",
    title: "10th %",
    id: "tenth",
  },
  {
    type: "text",
    title: "School Name",
    id: "schoolName",
  },
  {
    type: "text",
    title: "Year Of Passing SSC",
    id: "yearTenth",
  },
  {
    type: "text",
    title: "Location SSC",
    id: "locationSSC",
  },
  {
    type: "text",
    title: "12th %",
    id: "twelveth",
  },
  {
    type: "text",
    title: "College Name",
    id: "collegeName",
  },
  {
    type: "text",
    title: "Year Of Passing HSC",
    id: "yearTwelveth",
  },
  {
    type: "text",
    title: "Specialization",
    id: "specialization",
  },
  {
    type: "text",
    title: "Graduation %",
    id: "graduation",
  },
  {
    type: "text",
    title: "College Name",
    id: "gradColleg",
  },
  {
    type: "text",
    title: "Passing Year of Graduation",
    id: "yearGraduation",
  },
  {
    type: "text",
    title: "Specialization",
    id: "specializationGrad",
  },
];

const Academic = () => {
  return (
    <>
      <div className="w-3/4 mx-auto mt-4">
        <h1 className="text-2xl font-bold">Academic Details</h1>
        <form action="">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
            {inputs.map((i, index) => {
              return (
                <Forminputs
                  type={i.type}
                  title={i.title}
                  id={i.id}
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
      </div>
    </>
  );
};

export default Academic;
