import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  // Add items to the list
  const addItems = () => { 
    if (input.trim() !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };

  // Delete item by index
  const deleteItem = (indexToDelete) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className='bg-yellow-300 shadow-lg rounded-md mt-28 p-6'>
      <i><h1 className='text-2xl font-bold'>To Do List 📑</h1></i>
      
      <input 
        type="text" 
        value={input} 
        className='text-3xl font-bold text-black p-2 border rounded-md'
        onChange={(event) => setInput(event.target.value)}
        placeholder='Add a Task 🖋' 
      />
      <br/><br/>
      
      <button 
        className='bg-blue-500 text-white p-4 rounded-md font-bold text-2xl' 
        onClick={addItems}>
        Add Items </button> <br/><br/>

      {/*  items with delete button */}
      <ul className='text-2xl font-bold text-black'>
        {items.map((item, index) => (
          <li key={index} className='flex items-center justify-between my-2'>
            {index + 1}. {item}
            <button onClick={() => deleteItem(index)} 
              className='bg-red-500 text-white px-3 py-1 rounded-md ml-4'>
              Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
