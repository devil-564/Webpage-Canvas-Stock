import './App.css'
import Category from './Components/Category'
import Gift from './Components/Gift'
import Banner from "./Components/Banner"
import Trend from './Components/Trend'
import Service from './Components/Service'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'

function App() {

  return (
    <>
      <Navbar />
      <Slider />
      <br />
      
      <Category />
      <br />
      <br />
      <Gift />
      <br />
      <br />
      <Banner />
      <br />
      <br />
      <Trend />
      <br />
      <br />
      <Service />
      <Footer/>
    </>
  )
}

export default App
