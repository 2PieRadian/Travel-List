import { useState } from "react";
import Stats from "./Stats";
import Header from "./Header";
import PackingList from "./PackingList";
import Form from "./Form";

export default function App() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState('input')

  function handleSetSortBy(value) {
    setSortBy(value)
  }

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        id == item.id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function resetList() {
    const confirm = window.confirm("Are you sure you want to clear all the items?");
    if (confirm)
    setItems([]);
  }

  let sortedItems;

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        sortBy={sortBy}
      />
      <Stats items={items} onReset={resetList} sortBy={sortBy} handleSetSortBy={handleSetSortBy} />
    </div>
  );
}