const SingleItem = ({item, removeItem, editItem}) => {
    const {name, id, completed} = item
    return (
        <div className="single-item">
            <input
                type="checkbox"
                name="delete"
                id="delete"
                checked={completed}
                onChange={() => editItem(id)}
            />
            <p
                style={
                    completed
                        ? {textDecoration: "underline"}
                        : {textDecoration: "none"}
                }>
                {name}
            </p>
            <button
                className="btn remove-btn"
                type="button"
                onClick={() => removeItem(id)}>
                Remove
            </button>
        </div>
    )
}
export default SingleItem
