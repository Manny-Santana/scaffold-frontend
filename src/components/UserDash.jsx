import { useState } from 'react'
import viteLogo from '/flowsurgelogo.svg'
import DashWidget1 from './widgets/DashWidget1'
import DashWidget2 from './widgets/DashWidget2'
import DashWidget3 from './widgets/DashWidget3'



// useState([])

const UserDash = () =>{
    return(
        <div className='minidash-container'>
           <DashWidget1/>
           <DashWidget2/>
           <DashWidget3/> 
        </div>
    )
}
export default UserDash