import { BrowserRouter, Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Top from "./components/Top"
import Cards from "./components/Cards"
import MapContainer from "./components/MapContainer"
import Testimons from "./components/Testimons"


function App() {
  

  return (
   <>
   

   <main className="lg:px-20 pt-10 lg:py-10 px-10 bg-white">
   <BrowserRouter>
         <Navbar/>
      <Routes>
             <Route path="/"></Route>
         
      </Routes>
   </BrowserRouter>
   <Top/>
   <Cards/>
   


   <MapContainer/>
   <Testimons/>
      </main>
   </>
  )
}

export default App
