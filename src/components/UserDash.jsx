import { useState } from 'react'
import viteLogo from '/flowsurgelogo.svg'
import DashWidget1 from './widgets/DashWidget1'
import DashWidget2 from './widgets/DashWidget2'
import DashWidget3 from './widgets/DashWidget3'



// useState([])

const UserDash = ({ data, updateData }) =>{
    return(
        <div className='minidash-container'>
           <DashWidget1 totalassets = {data.totalassets}/>
           <DashWidget2 salesthisyear={data.salesthisyear}/>
           <DashWidget3 totalinventory={data.totalinventory} updateData={updateData}/> 
        </div>
    )
}
export default UserDash