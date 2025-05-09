
import './App.css'
import LineChart from './components/LineChart/LineChart'
import Navbaragain from './components/Navbaragain/Navbaragain'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'
//import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
    <>
     <Navbaragain></Navbaragain>
     {/* <Navbar></Navbar> */}
     <PriceOptions></PriceOptions>
   
     <LineChart></LineChart>
     <Phones></Phones>

    

    </>
  )
}

export default App
