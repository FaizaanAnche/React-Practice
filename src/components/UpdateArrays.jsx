import { useState } from "react";

const UpdateArrays = () => {

    let [fruits , setFruits] = useState(["Apple","Mango","Orange"]);

    const handleAdd = (e) => {
        const addFruit = document.getElementById("add").value;
        document.getElementById("add").value = "";
        setFruits(prevFruits => [...prevFruits,addFruit]);
        // console.log(addFruit);
    }

    const handleRemove = (e) => {
        const removeFruit = document.getElementById("remove").value;
        console.log(removeFruit);
        document.getElementById("remove").value = "";
        setFruits(fruits.filter((fruit) => fruit !== removeFruit));
        console.log("executed");
    }

    
    return (
        <div className="box">
            <h2>Update Arrays</h2>
            <ul>
                {
                    fruits.map((fruit,index)=> 
                        <li key={index}>{fruit}</li>
                    )
                }
            </ul>
            <br />
            <input type="text" id="add" placeholder="enter fruit name"/>
            <button onClick={(e)=>handleAdd(e)}>Add fruit</button>
            <br />
            <input type="text" id="remove" placeholder="enter fruit name"/> 
            <button onClick={(e)=>handleRemove(e)} >Remove fruit</button>
        </div>
    )
}

export default UpdateArrays;