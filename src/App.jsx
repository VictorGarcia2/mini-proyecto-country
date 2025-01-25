
import Estancias from './components/Estancias'
import HeaderHome from './components/HeaderHome'
import SubHeader from './components/SubHeader'
import '@fontsource-variable/montserrat';
import '@fontsource-variable/mulish';
function App() {
  return (
    <>
    <div className='flex flex-col items-center justify-center mx-auto p-5 md:w-11/12 lg:w-4/6' >
    <HeaderHome/>
    <SubHeader/>
    <Estancias/>
    </div>
    </>
  )
}
export default App
