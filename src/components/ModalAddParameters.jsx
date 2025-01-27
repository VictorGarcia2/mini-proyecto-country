import React, { useEffect, useState } from "react";
import CounterAdults from "./utils/CounterAdults";
import CounterGuests from "./utils/CounterGuests";
export default function ModalAddParameters({
  open,
  data,
  onClose,
  search,
  setSearch,
  handleSubmit,
  setCountGuest,
}) {
  const [openAddGuests, setAddGuests] = useState(true);
  const toggleModalGuests = () => setAddGuests(!openAddGuests);
  const { countAdults, incrementAdults, decrementAdults } = CounterAdults();
  const { countGuests, incrementGuests, decrementGuests } = CounterGuests();
  useEffect(() => {
    setCountGuest(countGuests + countAdults);
  }, [countGuests, countAdults, setCountGuest]);
  return (
    <div className={open && "hidden"}>
      <div className="bg-white w-full fixed z-50 top-0 right-0 left-0 h-auto py-10 flex items-center justify-center">
        <p
          className="absolute top-6 right-14 text-3xl font-extrabold cursor-pointer"
          onClick={onClose}
        >
          X
        </p>
        <div className="flex mt-10 ">
          <div className="px-9 border-l-4 border-r-2 border-y-4 rounded-s-full flex flex-col w-40">
            <label
              htmlFor="location"
              className="p-2 font-montserrat font-bold text-xs "
            >
              LOCATION
            </label>
            <input
              className=" p-2 font-montserrat w-24 text-xs focus:outline-none "
              type="text"
              name="location"
              placeholder="Add location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="z-30 flex flex-col mt-20 px-6 -mx-6 gap-2 absolute w-auto bg-white">
              {data &&
                [
                  ...new Set(
                    data
                      .filter((location) =>
                        location.city
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      )
                      .map((location) => location.city)
                  ),
                ].map((city, index) => (
                  <div key={index} className={` ${!search && "hidden"} flex`}>
                    <img
                      className="w-5"
                      src="icons/pin.svg"
                      alt="Icono de ubicación"
                    />
                    <p
                      className="cursor-pointer"
                      onClick={(e) => setSearch(e.target.textContent)}
                    >
                      {city}
                    </p>{" "}
                  </div>
                ))}
            </div>
          </div>
          <div className="px-4 border-r-4 w-20 border-y-4  flex flex-col ">
            <div onClick={toggleModalGuests}>
              <label
                htmlFor=""
                className="py-2 font-montserrat font-bold text-xs "
              >
                GUESTS
              </label>
              <p className="font-montserrat text-xs text-gray-400 w-32 cursor-pointer py-4">
                {countGuests === 0 && countAdults === 0 ? "Guests": countGuests + countAdults + " guests"   }
              </p>
            </div>
            <div
              className={`flex flex-col items-center  absolute font-montserrat ${
                openAddGuests && "hidden"
              }  w-[10.1rem] pb-4 -mx-4 mt-20  bg-white `}
            >
              <div className="flex flex-col items-start justify-center gap-4 mt-10">
                <p className="font-bold">Adults</p>
                <p className="font-medium">Ages 13 or above</p>
                <div className="flex items-center gap-4">
                  <button
                    className="rounded-lg border-2  p-2 w-11 h-auto"
                    onClick={decrementAdults}
                  >
                    -
                  </button>
                  <p>{countAdults}</p>
                  
                  <button
                    className="rounded-lg border-2  p-2 w-11 h-auto"
                    onClick={incrementAdults}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-4 mt-10">
                <p className="font-bold">Children</p>
                <p className="font-medium">Ages 2 - 12</p>
                <div className="flex items-center gap-4">
                  <button
                    className="rounded-lg border-2  p-2 w-11 h-auto"
                    onClick={decrementGuests}
                  >
                    -
                  </button>
                  <p>{countGuests}</p>
                  <button
                    className="rounded-lg border-2  p-2 w-11 h-auto"
                    onClick={incrementGuests}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" px-4 border-r-4  border-y-4  flex items-center rounded-e-full bg-[#eb5757] w-22  hover:bg-white [&>p]:hover:text-[#eb5757]  cursor-pointer
          "
            onClick={handleSubmit}
          >
            <img className="w-6" src="icons/searchicon.svg" alt="" />
            <p className="text-white text-xs">Search</p>
          </div>
        </div>
      </div>
      <div className="bg-black/45 w-full  fixed  w-fuil h-full top-0 right-0 left-0 flex items-center justify-center"></div>
    </div>
  );
}
