function Card({ item, index, handleClick }) {
    const itemClass = item.stat ? " active " + item.stat : ""

    return (

        <div className={"card" + itemClass} onClick={() => handleClick(index)}>
            <img className="img" src={item.img} />
        </div>
    )
}

export default Card