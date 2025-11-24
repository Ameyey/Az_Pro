import { BrowserRouter , Routes , Route ,  } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Card from "./pages/Card"
import Not_Found from "./pages/Not_Found"
import Nabar from "./Component/Nabar"
import { useEffect, useState } from "react"
import axios from "axios"
function App() {
  const [location,setLocation]=useState()
  const [opernDropdown, setOpernDropdown] = useState(false);


  const getLocation =async()=>{    
    navigator.geolocation.getCurrentPosition(async pos =>{
    const {latitude , longitude} = pos.coords
    console.log(latitude,longitude);
    
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    try {
      const locatoin = await axios.get(url)
      setLocation(locatoin.data.address)
      setOpernDropdown(false)
      // console.log(locatoin.data.address)
      // console.log(locatoin.data.display_name)
    } catch (error) {
     console.log(error) 
    }

    })
  }
  useEffect(()=>{
    getLocation()
  },[])


  return (
    <>
 <BrowserRouter >
  <Nabar location ={location} getLocation={getLocation} opernDropdown={opernDropdown} setOpernDropdown={setOpernDropdown} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Card />} />
      <Route path="*" element={<Not_Found />} />



  </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
