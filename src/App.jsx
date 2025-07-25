import { BrowserRouter, Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"


function App() {
  

  return (
   <>
 <main className="px-10 py-10 md:px-5 md:py-10 max-md:py-2 max-md:px-1">
  <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route element="/"/>
        </Routes>
   </BrowserRouter>
 </main>
    


  
      

    
    
   </>
  )
}

export default App
