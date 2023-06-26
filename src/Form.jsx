const Form = ({onSubmit, onChange, value}) => {
    return (
        <form onSubmit={onSubmit}>
            <h4>Grocery bud</h4>
            <div className="form-control">
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    className="form-input"
                />
                <button className="btn" type="submit">
                    Submit
                </button>
            </div>
        </form>
    )
}
export default Form
