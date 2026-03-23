const DashWidget2 =({ salesthisyear })=>{

    return (
        <>
            <div className="dashwidget dashwidget2">
                 <p className="widget-heading-text">Sales This Year</p>
                <h3 className="widget-text-main">{salesthisyear}</h3>
            </div>
        </>
    )

}

export default DashWidget2