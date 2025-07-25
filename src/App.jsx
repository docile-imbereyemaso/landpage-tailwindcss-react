import { BrowserRouter, Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Top from "./components/Top"


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
   </>
  )
}

export default App
