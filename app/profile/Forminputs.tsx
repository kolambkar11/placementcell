import React from "react";

type formInputs = {
  type: string;
  title: string;
  id: string;
  options?: string[];
};
const Forminputs = (props: formInputs) => {
  const { type, title, id, options } = props;
  return (
    <>
      {type === "text"}
      <div className="sm:col-span-3">
        <label
          htmlFor="first-name"
          className="block text-sm/6 font-medium text-gray-900"
        >
          {title}
        </label>
        <div className="mt-2">
          {options ? (
            <>
              <select
                name=""
                id=""
                className="block w-full  rounded-md bg-white px-6 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                {options?.map((s, index) => {
                  return (
                    <option key={index} value={s}>
                      {s}
                    </option>
                  );
                })}
              </select>
            </>
          ) : (
            <>
              <input
                id={id}
                name={id}
                type={type}
                placeholder={title}
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Forminputs;
