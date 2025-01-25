import React, { useState } from "react";
import ModalAddParameters from "./ModalAddParameters";

export default function HeaderHome({ search, setSearch, handleSubmit, countGuest,setCountGuest }) {
  const [open, setOpen] = useState(true);
  const toggleModal = () => setOpen(!open);
  

  return (
    <>
      <div className="flex  flex-col  w-full items-start sm:flex-row sm:justify-between  gap-8">
        <div className="px-3">
          <img src="icons/Windbnb.svg" alt="" />
        </div>
        <div className="cursor-pointer mx-auto sm:mx-0  border-zinc-200 rounded-2xl border-[1px] shadow-md shadow-zinc-300 flex gap-5 justify-center items-center w-80  text-zinc-300"
        onClick={toggleModal}
        >
          <p className="">Add location</p>
          <p className="  border-x-[1px] w-3/6l p-4 ">`{countGuest || "Add guests"}`</p>
          <img className="w-4" src="icons/searchicon.svg" alt="" />
        </div>
      </div>
      <ModalAddParameters modal={open} onClose={toggleModal} search={search} setSearch={setSearch} handleSubmit={handleSubmit} setCountGuest={setCountGuest} />
    </>
  );
}
