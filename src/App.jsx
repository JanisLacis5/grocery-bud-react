import {useState} from "react"
import Form from "./Form"
import Items from "./Items"
import {nanoid} from "nanoid"
import {ToastContainer, toast} from "react-toastify"

const setLocalStorage = (items) => {
    localStorage.setItem("list", JSON.stringify(items))
}
const list = JSON.parse(localStorage.getItem("list") || "[]")
const App = () => {
    const [items, setItems] = useState(list)
    const [value, setValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value) {
            toast.error("Empty form")
            return
        }
        const newArr = [
            ...items,
            {
                id: nanoid(),
                name: value,
                completed: false,
            },
        ]
        setItems(newArr)
        setLocalStorage(newArr)
        toast.success("Added to list!")
        setValue("")
    }
    const removeItem = (id) => {
        const newArr = items.filter((item) => item.id !== id)
        setItems(newArr)
        setLocalStorage(newArr)
        toast.success("Item removed!")
    }

    const editItem = (id) => {
        const newItems = items.map((item) => {
            if (item.id === id) {
                const newItem = {...item, completed: !item.completed}
                return newItem
            }
            return item
        })
        setItems(newItems)
        setLocalStorage(newItems)
    }

    return (
        <section className="section-center">
            <Form
                onSubmit={handleSubmit}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Items items={items} removeItem={removeItem} editItem={editItem} />
            <ToastContainer position="top-center" />
        </section>
    )
}

export default App
