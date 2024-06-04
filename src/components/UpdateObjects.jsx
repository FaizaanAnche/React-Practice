import { useState } from "react";

const UpdateObjects = () => {

    let [obj , setObj] = useState({
        name:"",
        age: 0,
        hobbies:""
    });

    const handleNameChange = (e) => {
        setObj(prevObj => ({...prevObj,name: e.target.value}));
    };

    const handleAgeChange = (e) => {
        setObj(prevObj => ({...prevObj,age: e.target.value}));
    };

    const handleHobbiesChange = (e) => {
        setObj(prevObj => ({...prevObj,hobbies: e.target.value}));
    };
    return(
        <div className="box">
            <h2>Update Objects</h2>
            <label>Enter Name</label>
            <input type="text" onChange={(e) => handleNameChange(e)}/>
            <label>Enter Age</label>
            <input type="text" onChange={(e) => handleAgeChange(e)}/>
            <label>Enter Hobbies</label>
            <textarea onChange={(e) => handleHobbiesChange(e)}/>

            <p>{obj.name} is {obj.age} years old and their hobbies are {obj.hobbies}</p>
        </div>
    )

}

export default UpdateObjects;