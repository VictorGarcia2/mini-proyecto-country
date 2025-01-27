import { useEffect, useState } from "react";
import Estancias from "./components/Estancias";
import HeaderHome from "./components/HeaderHome";
import SubHeader from "./components/SubHeader";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/mulish";
import { fetchData } from "./Data/Fetch";
function App() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([])
 
  useEffect(() => {
    fetchData("data.json")
      .then((response) => {
        setData(response);
        setOriginalData(response); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const [search, setSearch] = useState("");
  const [countGuest, setCountGuest] = useState(0);
  const [open, setOpen] = useState(true);
  const toggleModal = () => setOpen(!open); 
  const handleSubmit = () => {
    const filteredData = originalData.filter((location) => {
      const conditionB = parseInt(countGuest) <= location.maxGuests;
      const conditionA = location.city.toLowerCase().includes(search.toLowerCase())
      toggleModal();
      return conditionB && conditionA
    });
      setData(filteredData);
      
    

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
        <SubHeader data={data} />
        <Estancias
          search={search}
          setSearch={setSearch}
          newData={data}
          setData={setData}
        />
      </div>
    </>
  );
}
export default App;
