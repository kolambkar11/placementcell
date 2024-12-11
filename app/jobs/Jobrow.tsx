import React from "react";

const Jobrow = (props: {
  companyId: number;
  companyName: string;
  driveDate: string;
  location: string;
}) => {
  const { companyId, companyName, driveDate, location } = props;
  return (
    <>
      <tr key={companyId}>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
          {companyId}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {companyName}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {driveDate}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {location}
        </td>
        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
          <a href="#" className="text-indigo-600 hover:text-indigo-900">
            Apply
            <span className="sr-only">, {companyName}</span>
          </a>
        </td>
      </tr>
    </>
  );
};

export default Jobrow;
