import React, { useState } from 'react'
import './todo.css'

const ToDo = () => {
    const [todos, setToDos] = useState([]);
    const [inputValue, setInputValue] = useState('')
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editValue, setEditvalue] = useState('');

    
    const addToDo = () => {
        if (inputValue.trim()!==''){
            const newToDo = {
                id: new Date().getTime(),
                text: inputValue,
            }
            setToDos([...todos,newToDo]);
            setInputValue('');
        }

      }

      const deleteToDo = (id) => {
        const updateTodos = todos.filter 
        ((todo) => todo.id !==id);
        setToDos(updateTodos);
    }
    const editToDo = (id,text) => {
        setEditMode(true);
        setEditId(id);
        setEditvalue(text);
    }

    const updateToDo = () => {
        const updateTodos = todos.map((todo) => {
            if(todo.id === editId){
                return{...todo, text:editValue}
            }
            return todo;

    });
    setToDos(updateTodos);
    setEditMode(false);
    setEditId(null);
    setInputValue('');
    }


  return (
    <div className='container'>
    <h2>ToDo List</h2>
    <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value) } />


    {
        editMode ? (
            <div>
                <input type='text' value={editValue} onChange={(e) => setEditvalue(e.target.value)} />
                <button onClick={updateToDo}>Update</button>
            </div>
        ):(
            <button onClick={addToDo}>Add</button>
        )
    }




    <ul>
        {todos.map((todo) => ( 
            <li key={todo.id}>
                {todo.text}
                <div className='editdelete'>
                <button onClick={() => deleteToDo(todo.id)}>Delete</button>
                <button onClick={() => editToDo(todo.id, todo.text)}>Edit</button>
                </div>
            </li>
        ))}
    </ul>

    </div>
  )
}

export default ToDo