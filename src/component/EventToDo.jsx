import React from 'react'

const EventToDo = () => {

    function HandleClick(e){
        e.preventDefault(); 
        const input = e.target[0].value

        const li = document.createElement("li");
        const d = document.getElementById('taskList');
        li.innerHTML = `<span>${input}</span>`;
        <button class= "deleteBnt">Deleted</button>

        d.appendChild(li);
    }
    function  handleClickList(){
            const d = document.getElementById('taskList');
            const button = document.createElement("button")

    }
  return (
   <>
   <h1>ToDo App</h1> 
   <form  onSubmit={HandleClick}>
    <input type="text" name='task' placeholder='Add your task' />
    <input type="submit" />
   </form>
   <ul id='taskList' onClick={handleClickList} >
        
   </ul>
   </>
  )
}

export default EventToDo