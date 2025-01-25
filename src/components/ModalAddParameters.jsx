import React, { useState } from "react";

import CounterA from "./utils/CounterAdults";
export default function ModalAddParameters({ modal, onClose }) {
 
    const [openAddGuests, setAddGuests] = useState(true);
      const toggleModalGuests = () => setAddGuests(!openAddGuests);
      const { count, increment, decrement } = CounterA();

      

  return (
    <div className={modal && "hidden"}>
      <div className="bg-white w-full fixed z-50 top-0 right-0 left-0 h-auto py-10 flex items-center justify-center">
        <p
          className="absolute top-6 right-14 text-3xl font-extrabold cursor-pointer"
          onClick={onClose}
        >
          X
        </p>
        <div className="flex mt-10 ">
          <div className="px-9 border-l-4 border-r-2 border-y-4 rounded-s-full flex flex-col ">
            <label
              htmlFor="location"
              className="p-2 font-montserrat font-bold text-sm "
            >
              LOCATION
            </label>
            <input
              className=" p-2 font-montserrat w-full "
              type="text"
              name="location"
              placeholder="Add location..."
            />
          </div>
          <div className="px-4 border-r-4  border-y-4  flex flex-col ">
            <div onClick={toggleModalGuests}>

            <label
              htmlFor=""
              className="py-2 font-montserrat font-bold text-sm "
            >
              GUESTS
            </label>
            <p className="font-montserrat text-gray-400 w-32 cursor-pointer py-2">
              Guests
            </p>
            </div>
            <div className={`flex flex-col items-center  absolute font-montserrat ${openAddGuests && "hidden"}  w-[10.1rem] pb-4 -mx-4 mt-20 border-2 bg-white shadow-md`}>
              <div className="flex flex-col items-start justify-center gap-4 mt-10">
                <p className="font-bold">Adults</p>
                <p className="font-medium">Ages 13 or above</p>
                <div className="flex items-center gap-4">
                  <button className="rounded-lg border-2  p-2 w-11 h-auto"  onClick={decrement}>
                    -
                  </button>
                  <p>{count}</p>
                  <button className="rounded-lg border-2  p-2 w-11 h-auto" onClick={increment}>
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-4 mt-10">
                <p className="font-bold">Adults</p>
                <p className="font-medium">Ages 13 or above</p>
                <div className="flex items-center gap-4">
                  <button className="rounded-lg border-2  p-2 w-11 h-auto" onClick={decrement}>
                    -
                  </button>
                  <p>{count}</p>
                  <button className="rounded-lg border-2  p-2 w-11 h-auto" onClick={increment}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" px-4 border-r-4  border-y-4  flex items-center rounded-e-full bg-[#eb5757]  hover:bg-white [&>p]:hover:text-[#eb5757]  cursor-pointer">
            <img className="" src="icons/searchicon.svg" alt="" />
            <p className="text-white ">Search</p>
          </div>
        </div>
      </div>
      <div className="bg-black/45 w-full  fixed  w-fuil h-full top-0 right-0 left-0 flex items-center justify-center"></div>
    </div>
  );
}
