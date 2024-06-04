import { useState } from "react";

const ArrayOfObjects = () => {
    let [carName,  setCarName] = useState("");
    let [carYear, setCarYear] = useState(new Date().getFullYear());
    let [carMake, setCarMake] = useState("");

    let [cars, setCars] = useState([]);

    const handleAddCar = () => {
        const newCar = {
            name:carName,
            year:carYear,
            make:carMake
        };

        setCars(prevCars => [...prevCars,newCar]);
    }

    const handleRemoveCar = (index) => {
        setCars(prevCars => prevCars.filter((_,i) => i !== index));
    }

    const handleNameChange = (e) => {
        setCarName(e.target.value);
    };

    const handleYearChange = (e) => {
        setCarYear(e.target.value);
    };

    const handleMakeChange = (e) => {
        setCarMake(e.target.value);
    };

    return (
        <div className="box">
            <h2>Update Array Of Objects</h2>

            <ul>
                {cars.map((car,index)=>
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year}  {car.make} {car.name}
                    </li>
                )}
            </ul>

            <label>Name of Car:</label>
            <input type="text" onChange={handleNameChange} value={carName}/>
            <label>Year:</label>
            <input type="number" onChange={handleYearChange} value={carYear}/>
            <label>Make of Car:</label>
            <input type="text" onChange={handleMakeChange} value={carMake}/>

            <button onClick={()=>handleAddCar()}>Add Car</button>
            <p>click on list item to remove them from the list.</p>
        </div>
    )
}

export default ArrayOfObjects;