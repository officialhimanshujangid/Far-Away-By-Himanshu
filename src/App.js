import { useState } from "react";
import Logo from './logo'
import Form from "./form";
import PackingList from "./packinglist";
import Stats from "./stats";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
export default function App() {
  const [item, setItems] = useState(initialItems)
  console.log(item)
  function handleAddItem(item) {
    setItems(items => [...items, item])


  }
  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }
  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }
  function clearItems() {
    const confirmed = window.confirm("are you sure you want to delete all items")
    if (confirmed) setItems([]);
  }


  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList items={item} onDeleteItem={handleDeleteItem} onToggleItems={handleToggleItem} clearItems={clearItems} />
      <Stats item={item} />

    </div>
  )
};



