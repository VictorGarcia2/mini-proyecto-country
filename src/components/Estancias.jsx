import React, { useEffect, useState } from "react";

export default function Estancias({ newData }) {
  return (
    <>
      <div className="mt-9 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newData &&
          newData?.map((location, index) => (
            <div key={index} className=" flex flex-col mb-2 justify-center items-center align-top ">
              <img
                className="rounded-3xl w-[350px] h-[238px] object-cover"
                src={location.photo}
                alt={location.title}
              />
              <div className={`flex gap-10 items-center  pt-2`}>
                <div className="inline-block  px-3">
                  <p
                    className={`${
                      !location.superHost && "hidden"
                    } border-[1px] border-gray-500 px-5 sm:px-3   w-28 py-1 text-xs font-montserrat rounded-full text-gray-500`}
                  >
                    SUPERHOST
                  </p>
                </div>
                <div>
                <h3 className="font-thin w-full sm:px-0 text-gray-500 text-xs font-mulish ">
                  {location.type}. {location.beds} beds
                </h3>
                </div>
                <div className="flex">
                  <img className="w-4" src="icons/star.svg" alt="" />
                  <p className="font-montserrat text-xs"> {location.rating}</p>
                </div>
              </div>
              <h3 className=" font-bold font-montserrat text-base py-4  text-gray-800">
                {location.title}
              </h3>
            </div>
          ))}
      </div>
    </>
  );
}
