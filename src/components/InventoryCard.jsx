const InventoryCard = ({ data }) =>{
    return(
        <div className="inventorycard">
            <img src="#" alt="" className="inventory-card-image" />
            <h3 className="inventory-card-title">{data.title}</h3>
            <p className="inventory-card-details">{data.details}</p>
            <p className="inventory-card-price">{data.price}</p>
        </div>
    )
}
export default InventoryCard