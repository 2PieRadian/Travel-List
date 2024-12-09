export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li
      onClick={() => onToggleItem(item.id)}
      style={item.packed ? { background: "rgb(215, 215, 215)" } : null}
    >
      <div>
        <span
          className="title"
          style={item.packed ? { textDecoration: "line-through" } : {}}
        >
          <span className="itemCount">{item.quantity}</span> {item.description}
        </span>
      </div>

      <button onClick={() => onDeleteItem(item.id)}>⚔️</button>
    </li>
  )
}
