import { useEffect, useState } from "react";
import Estancias from "./components/Estancias";
import HeaderHome from "./components/HeaderHome";
import SubHeader from "./components/SubHeader";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/mulish";
import { fetchData } from "./Data/Fetch";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData("data.json")
    .then((response) => {
      setData(response)
      ;})}, []);
  const [newData, setNewData] = useState([]);
  const [search, setSearch] = useState("");
  const [countGuest, setCountGuest] = useState(0);
  
  const [open, setOpen] = useState(true);
  const toggleModal = () => setOpen(!open);

 
  const handleSubmit = () => {
    const filteredData = data.filter((location) => {
    const conditionA = location.city
        .toLowerCase()
        .includes(search.toLowerCase());
      const conditionB =  parseInt(countGuest) <= location.maxGuests
      /* toggleModal(); */
      return conditionA && conditionB
    });
    setNewData(filteredData);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto p-5 md:w-11/12 lg:w-4/6">
        <HeaderHome
          data={data}
          toggleModal={toggleModal}
          open={open}
          setOpen={setOpen}
          countGuest={countGuest}
          setCountGuest={setCountGuest}
          handleSubmit={handleSubmit}
          search={search}
          setSearch={setSearch}
        />
        <SubHeader data={newData} />
        <Estancias
          search={search}
          setSearch={setSearch}
          data={newData}
          setData={setData}
        />
      </div>
    </>
  );
}
export default App;
