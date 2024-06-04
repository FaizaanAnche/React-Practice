const ObjectList = (props) => {

    const itemList = props.items;
    const title = props.title;

    const listItems = itemList.map(item => 
        <li key={item.id}>{item.name} : {item.property}</li>
    )

    return (
    <div className="box">
        <h2>{title}</h2>
        <ul>{listItems}</ul>
    </div>)
}

export default ObjectList;