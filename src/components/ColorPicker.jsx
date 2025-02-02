import { useState } from "react";

const ColorPicker = () => {

    let [color , setColor] = useState("#FFFFFF")

    const handleColorInput = (e) => {
        setColor(e.target.value);
    }

    return (
        <div className="box">
            <h2>Color picker</h2>
            <div className="color-display"
            style={{backgroundColor: color}}>{color}</div>
            <label>Choose a color</label>
            <input type="color" onChange={(e) => handleColorInput(e)} />
        </div>
    )
}

export default ColorPicker;