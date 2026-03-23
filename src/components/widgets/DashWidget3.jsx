const DashWidget3 =({ totalinventory , updateData })=>{


/*  
 the main component holds stats in the following format.
 when updating the stats you need to use prev which holds the previous state. 
 prev comes from the setData (original name for the state function)
 ex: setState( previousState => ({
    previousState.name, 
    previouState.age
    }))
    
    const newdata = {
    totalassets: 250000,
    salesthisyear: 314,
    totalinventory: 51
} */
    
    return (
        <>
            <div className="dashwidget dashwidget3">
                 <p className="widget-heading-text">Total Inventory</p>
                <h3 className="widget-text-main">{totalinventory}</h3>
                <button onClick={()=> updateData( prev => ({
                    ...prev,
                    totalinventory: prev.totalinventory + 1
                }))}> Add 1</button>
            </div>
        </>
    )

}

export default DashWidget3