import React from "react";
import Jobrow from "./Jobrow";
const company = [
  {
    companyId: 1,
    companyName: "Infosys",
    driveDate: "14/10/2024",
    location: "Dadar",
  },
  {
    companyId: 2,
    companyName: "Mircrosoft",
    driveDate: "14/10/2024",
    location: "Worli",
  },
  {
    companyId: 3,
    companyName: "Google",
    driveDate: "14/10/2024",
    location: "Mahim",
  },
];

const Jobs = () => {
  return (
    <>
      <div className="w-3/4 mx-auto mt-4">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className=" font-semibold leading-6 text-gray-900 text-2xl">
                Jobs
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all the companies coming to the campus.
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <button
                type="button"
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add New Job
              </button>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Company ID
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Company Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Drive Date
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Location
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {company.map((c) => {
                        return (
                          <Jobrow
                            companyId={c.companyId}
                            companyName={c.companyName}
                            driveDate={c.driveDate}
                            location={c.location}
                          />
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
