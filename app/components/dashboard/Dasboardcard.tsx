"use client";
import React from "react";
// interface dbCard {
//   dataTitle: string;
//   dataCount: number;
//   bgClass: string;
// }

type dbCardType = {
  dataTitle: string;
  dataCount: number;
  bgClass: string;
};
//query when to use type and interface?

//when to use enum?

enum dbCardEnum {
  dataTitle,
  dataCount,
  bgClass,
}

console.log(dbCardEnum);

const Dasboardcard = (props: dbCardType) => {
  const { dataTitle, dataCount, bgClass } = props;
  return (
    <div className={`${bgClass}` + " card bg-base-100 w-96 shadow-xl "}>
      <div className="card-body p-4">
        <h2 className="card-title font-bold">{dataTitle}</h2>
        <h3 className="text-3xl text-right">{dataCount}</h3>
      </div>
    </div>
  );
};

export default Dasboardcard;
