import React, { useEffect, useState } from "react";


export default function Estancias({ data, setData, search }) {
  return (
    <>
      <div className="mt-9 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data &&
          data?.map((location) => (
            <div key={location.city} className=" flex flex-col justify-center items-center align-top ">
              <img
                key={location.city}
                className="rounded-3xl w-[350px] h-[238px] object-cover"
                src={location.photo}
                alt={location.title}
              />
              <div
              key={location.superHost}
                className={` ${
                  location.superHost && "gap-11"
                } flex items-center gap-40   w-auto   pt-2`}
              >
                <p
                  className={`${
                    !location.superHost && "hidden"
                  } border-[1px] border-gray-500 px-3  py-1 text-xs font-montserrat rounded-full text-gray-500`}
                >
                  SUPERHOST
                </p>
                <h3 className="font-thin text-gray-500 text-xs w-28 font-mulish ">
                  {location.type}. {location.beds} beds
                </h3>
                <p className="font-montserrat text-xs"> {location.rating}</p>
              </div>
              <h3 className=" font-bold font-montserrat text-base text-gray-800">
                {location.title}
              </h3>
            </div>
          ))}
      </div>
    </>
  );
}
