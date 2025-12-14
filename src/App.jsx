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
import Footer from "./component/Footer"
import Sign_Page_Prodect from "./pages/Sign_Page_Prodect"
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
      <Route path="/products/:id" element={<Sign_Page_Prodect />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/card" element={<Card  location={location} getLocation={getLocation}/>} />
      <Route path="*" element={<Not_Found />} />
  </Routes>
  <Footer/>
 </BrowserRouter>
    </>
  )
}

export default App

//3:59:09

// brand : "FashionTrend"
// category : "women"
// description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam."
// discountedPrice : 135
// image : "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg"
// isNew : true
// oldPrice: "200"
// price: 150
// rating : 4
// size : (3) ['S', 'M', 'L']
// stock : 50
// title : "Long sleeve Jacket"
// type: "jacket"
// _id:  1