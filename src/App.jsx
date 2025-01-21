import { useState } from 'react';
import './App.css';

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
    <div 
      className='min-h-screen bg-cover bg-center flex items-center justify-center px-4' 
      style={{ backgroundImage: "url('image.png')",
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover'
       }}
    >
      <div className='bg-yellow-300 shadow-lg rounded-md mt-8 p-6 w-full max-w-md sm:max-w-lg'>
        <h1 className='text-2xl font-bold text-center mb-4'>To Do List 📑</h1>

        <input 
          type="text" 
          value={input} 
          className='text-lg sm:text-xl text-black p-2 border rounded-md w-full'
          onChange={(event) => setInput(event.target.value)}
          placeholder='Add a Task 🖋' 
        />
        <br/><br/>

        <button 
          className='bg-blue-500 text-white p-3 rounded-md font-bold w-full sm:text-lg' 
          onClick={addItems}
        >
          Add Items
        </button>
        <br/><br/>

        {/* items with delete button */}
        <ul className='text-lg sm:text-xl text-black'>
          {items.map((item, index) => (
            <li 
              key={index} 
              className='flex items-center justify-between my-2 bg-white p-2 rounded-md shadow'
            >
              <span>{index + 1}. {item}</span>
              <button 
                onClick={() => deleteItem(index)} 
                className='bg-red-500 text-white px-3 py-1 rounded-md ml-4'>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
