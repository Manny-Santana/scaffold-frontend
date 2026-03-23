// import { useState } from "react";



const DashWidget1 =({ totalassets })=>{

    return (
        <>
            <div className="dashwidget dashwidget1">
                <p className="widget-heading-text">Total Assets</p>
                <h3 className="widget-text-main">{totalassets}</h3>
            </div>
        </>
    )

}

export default DashWidget1