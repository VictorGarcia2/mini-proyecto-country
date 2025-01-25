import React from "react";

export default function Estancias() {
  return (
    <>
      <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(20)
          .fill()
          .map((_, index) => (
            <div>
              <img
                key={index}
                className="rounded-3xl"
                src="https://placehold.co/600x400/000000/FFF"
                alt="Placeholder"
              />
              <div className="flex justify-between px-3 pt-2">
                <h3 className="font-thin text-sm font-mulish ">
                  Entire apartment. 2 beds
                </h3>
                <p> {index + 1}</p>
              </div>
              <h3 className="px-3 font-medium font-montserrat">
                stylist apartment in center of the city
              </h3>
            </div>
          ))}
      </div>
    </>
  );
}
