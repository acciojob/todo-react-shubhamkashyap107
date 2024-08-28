
import React, { useState } from "react";
import './../styles/App.css';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const[todos, setTodos] = useState([])
  const[text, setText] = useState("")

  function deleteBtnHandler(){

  }


  return (
    <div>
        <input value={text} onChange={(e) => {
          setText(e.target.value)
        }} />
        <button onClick={(e) => {
          if(!text) return

          const newTodo = {
            task : text,
            id : uuidv4()
          }

          setTodos([...todos, newTodo])

        }}>Add Todo</button>

        <ul>
          {todos && todos.map((item) => {
            return <ul key={item.id}>{item.task}  <button onClick={() => {
              const narr = todos.filter((todo) => {
                return todo.id != item.id
              })

              setTodos(narr)
            }}>Delete</button></ul>
          })}
        </ul>
    </div>
  )
}

export default App
