import { BrowserRouter, Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Top from "./components/Top"
import Cards from "./components/Cards"
import MapContainer from "./components/MapContainer"


function App() {
  

  return (
   <>
   <BrowserRouter>
         <Navbar/>
      <Routes>
             <Route path="/"></Route>
         
      </Routes>
   </BrowserRouter>
   <Top/>
   <Cards/>
   <MapContainer/>
   </>
  )
}

export default App
