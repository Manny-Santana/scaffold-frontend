//MAIN OPERATES AS A CONTAINER FOR THE USER MINI DASHBOARD AND THE INVENTORY
//IF WE WANT TO MAKE A NEW MAIN VIEW, 
//THEN SIMPLY TOGGLE A FLAG IN THE MAIN APP THAT CHANGES MAIN TO SOMETHING ELSE

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/flowsurgelogo.svg'
// import './App.css' 
import Inventory from './Inventory'
import UserDash from './UserDash'


// useState([])

const Main = () =>{
    return(
        <main className='main mini-dash-inventory'>
            <UserDash/>
            <Inventory/>
        </main>
    )
}
export default Main