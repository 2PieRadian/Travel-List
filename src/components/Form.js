import { useState } from "react"

export default function Form({ onAddItem }) {
  // Used {} above because here we are destructure the props that we are accepting
  const [quantity, setQuantity] = useState(1)
  const [description, setDescription] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    }

    // Add the item to update the 'item' state
    onAddItem(newItem)

    // Resetting the values of Quantity and Description
    setQuantity(1)
    setDescription("")
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>

      <div>
        <select
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>

        <input
          required
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Item..." />
        <button>Add</button>
      </div>
    </form>
  )
}