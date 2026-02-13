const EventToDo = () => {

    function HandleClick(e){
        e.preventDefault(); 
        const input = e.target[0].value

        const li = document.createElement("li");
        const d = document.getElementById('taskList');
        li.innerHTML = `<span>${input}</span>`;
        const button = document.createElement("button")
        button.value = "delete"

        d.appendChild(li);
        li.appendChild(button);
        button.innerHTML = "Delete"
        button.className = "deleteBtn"
    }
    function  handleClickList(e){
            
            if(e.target.className === "deleteBtn"){
              e.target.parentElement.remove();
            }
    }
  return (
   <>
   <h1>ToDo App</h1> 
   <form  onSubmit={HandleClick}>
    <input type="text" name='task' placeholder='Add your task' />
    <button>Submit</button>
   </form>
   <ul id='taskList' onClick={handleClickList} >
        
   </ul>
   </>
  )
}

export default EventToDo