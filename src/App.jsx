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
      setData(response);
      setNewData(response)})}, []);
  const [newData, setNewData] = useState([]);
  const [search, setSearch] = useState("Helsinki");
  const [countGuest, setCountGuest] = useState(1);
  const [open, setOpen] = useState(true);
  const toggleModal = () => setOpen(!open);

 
  const handleSubmit = () => {
    const filteredData = data.filter((location) => {
      const conditionA = location.city
        .toLowerCase()
        .includes(search.toLowerCase());
      const conditionB = location.maxGuests >= countGuest;
      return conditionA && conditionB;
    });
    setNewData(filteredData);
    toggleModal();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto p-5 md:w-11/12 lg:w-4/6">
        <HeaderHome
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
