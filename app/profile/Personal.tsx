import React from "react";
import Forminputs from "./Forminputs";
const inputs = [
  {
    type: "select",
    title: "Initials",
    id: "initials",
    options: ["Mr.", "Mrs.", "Dr.", "Miss"],
  },
  {
    type: "text",
    title: "First Name",
    id: "firstname",
  },
  {
    type: "text",
    title: "Middle Name",
    id: "middleName",
  },
  {
    type: "text",
    title: "Last Name",
    id: "lastName",
  },
  {
    type: "text",
    title: "Email",
    id: "email",
  },
  {
    type: "text",
    title: "Contact number",
    id: "contactNumber",
  },
  {
    type: "date",
    title: "Date of Birth",
    id: "dob",
  },
  {
    type: "text",
    title: "Roll Number",
    id: "rollNumber",
  },
  {
    type: "select",
    title: "Gender",
    id: "gender",
    options: ["Male", "Female"],
  },
  {
    type: "text",
    title: "District",
    id: "district",
  },
  {
    type: "text",
    title: "City",
    id: "city",
  },
  {
    type: "text",
    title: "State",
    id: "state",
  },
  {
    type: "text",
    title: "Country",
    id: "country",
  },
  {
    type: "text",
    title: "Nationality",
    id: "nationality",
  },
];

import data from "../../db.json";
console.log(data);
const Personal = () => {
  return (
    <>
      <div className="w-3/4 mx-auto mt-4">
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
      </div>
    </>
  );
};

export default Personal;
