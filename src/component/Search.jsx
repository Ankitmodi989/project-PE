import {useState} from 'react';
export default function Search({products}){

    const [search,setsearch]=useState("");
    const name=["Charger", "Laptop", "Mobile"] 

    const student=name.filter((names)=>names.toLowerCase().includes(search.toLowerCase()));

    return(
        <div>
            <h2>Demo to show Search</h2>
            <input type="text" placeholder='Enter key to search'
             value={search} 
             onChange={(e)=>setsearch(e.target.value)}/>

             <ul>
                {student.map((item,index)=>(<li key={index}>{item}</li>))}
             </ul>
        </div>
    )
}