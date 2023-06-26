import SingleItem from "./SingleItem"

const Items = ({items, removeItem, editItem}) => {
    return (
        <ul className="items">
            {items.map((item) => {
                return (
                    <li key={item.id}>
                        <SingleItem
                            item={item}
                            removeItem={removeItem}
                            editItem={editItem}
                        />
                    </li>
                )
            })}
        </ul>
    )
}
export default Items
