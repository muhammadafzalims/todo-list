import React, { useState } from 'react'

export default function App() {
  const [inputVal, setinputVal] = useState("")
  const [item, setitem] = useState([])

  const itemEvent=(e)=>{
        setinputVal(e.target.value)
      }
  const btnClick=()=>{
        setitem((oldItems)=>{
          return [...oldItems,inputVal]
        })
        setinputVal("")
        }
  const deleteItem = (id)=>{
        console.log("deleted")
        setitem((oldItems)=>{
          return oldItems.filter((arrElem, index) => {
            return index !== id
          })
        })

        }
  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <h1>ToDo List</h1>
        <input type="text" placeholder='add to list' value={inputVal} onChange={itemEvent}/>
        <button onClick={btnClick}>+</button>
        <ol>
         {item.map((itemVal, index)=>{
            return(
            <>
            <div className="todo_style">
            <i className="fa fa-times" aria-hidden="true" key={index} onClick={()=>{deleteItem(index)}}/>
              <li>{itemVal}</li>
            </div>
            </>
            )
          })}
        </ol>
      </div>

    </div>
    </>
  )
}
