// MAIN 
//     |__ USER DASH
//     |__ INVENTORY
import { useState } from 'react'
// import inventoryData from '../test/dummyinventory'
import InventoryCard from './InventoryCard'




const Inventory = () =>{

    // const [data,setData] = useState([...inventoryData])
    
    return(
        <section>
            <h3>INVENTORY</h3>
            <div className="inventory-container">
                {/* <InventoryCard data={data}/> */}

            </div>
            <div className="edit-section">
                <button  className="add">add</button>
                <button  className="edit">edit</button>
                <button  className="delete">delete</button>
            </div>
        </section>
    )
}
export default Inventory