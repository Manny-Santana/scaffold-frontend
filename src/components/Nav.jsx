import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/flowsurgelogo.svg'
// import './App.css'


const Nav = () =>{
    return(
        <nav className='left-nav'>
            <button>Add Item</button> 
            <button>Remove Item</button>   
            <button>Edit Item</button>
         </nav>
    )
}

export default Nav