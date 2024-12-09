import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem, sortBy, sortedItems }) {
  if (sortBy === "input") {
    sortedItems = [...items]
  } else if (sortBy == "description") {
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
  } else if (sortBy == "packed") {
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
  }

  return (
    <>
      {items.length == 0 ? (
        <h2 className="empty-list">Packing List is Empty</h2>
      ) : null}
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem} />
          ))}
        </ul>
      </div>
    </>
  )
}