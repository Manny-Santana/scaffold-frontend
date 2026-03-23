//MAIN OPERATES AS A CONTAINER FOR THE USER MINI DASHBOARD AND THE INVENTORY
//IF WE WANT TO MAKE A NEW MAIN VIEW, 
//THEN SIMPLY TOGGLE A FLAG IN THE MAIN APP THAT CHANGES MAIN TO SOMETHING ELSE

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/flowsurgelogo.svg'
// import './App.css' 
import Inventory from './Inventory'
import UserDash from './UserDash'
import { inventoryData } from '../test/dummyinventory'




const Main = () =>{

    const [data, setData] = useState({
    totalassets: 250000,
    salesthisyear: 314,
    totalinventory: 50
})

const [inventory, addinventory] = useState([...inventoryData])

// intent function to add a new vehicle :TODO implement this later
const addVehicle = (vehicle) => {
    setVehicles(prev => [...prev, vehicle]);
  };


console.log
    return(
        <main className='main mini-dash-inventory'>
            <UserDash data={data} updateData={setData}/>
            <Inventory inventory={inventory} onAddVehicle={addVehicle}/>
        </main>
    )
}
export default Main