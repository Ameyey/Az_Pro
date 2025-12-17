import { BrowserRouter , Routes , Route ,  } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Card from "./pages/Card"
import Not_Found from "./pages/Not_Found"
import Nabvar from "./Component/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"
import Footer from "./component/Footer"
import Sign_Page_Prodect from "./pages/Sign_Page_Prodect"
import Category_Products from "./pages/Category_Products"
import { useCart } from "./Context/CardContext"
import ProRounter from "./component/ProRounter"
function App() {
  const [location,setLocation]=useState()
  const [opernDropdown, setOpernDropdown] = useState(false);
  const {cardItem  , setCardItem}= useCart()


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


  useEffect(()=>{
   const storedCart = localStorage.getItem('cartItem')
   if(storedCart){
    setCardItem(JSON.parse(storedCart)) 
   }
  },[])

  useEffect(()=>{
    localStorage.setItem('cartItem' , JSON.stringify(cardItem))
  },[cardItem])

  return (
    <>
 <BrowserRouter >
  <Nabvar location ={location} getLocation={getLocation} opernDropdown={opernDropdown} setOpernDropdown={setOpernDropdown} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Sign_Page_Prodect />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/category/:category" element={<Category_Products />} />
      <Route path="/card" element={<ProRounter>  
        <Card  location={location} getLocation={getLocation}/> 
        </ProRounter>} />
      <Route path="*" element={<Not_Found />} />
  </Routes>
  <Footer/>
 </BrowserRouter>
    </>
  )
}

export default App

