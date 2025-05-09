
//import { LineChart } from 'recharts'
import './App.css'
import LineChart from './components/LineChart/LineChart'
import Navbaragain from './components/Navbaragain/Navbaragain'
import PriceOptions from './components/PriceOptions/PriceOptions'
//import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
    <>
     <Navbaragain></Navbaragain>
     {/* <Navbar></Navbar> */}
     <PriceOptions></PriceOptions>
     {/* <LineChart></LineChart> */}
     <LineChart></LineChart>

    

    </>
  )
}

export default App
