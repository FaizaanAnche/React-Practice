import { useState } from "react";

const Inputs = () => {

    let [text, setText] = useState("");
    let [number, setNumber] = useState(0);
    let [comments ,setComments] = useState("");
    let [option, setOption] = useState("");
    let [radio, setRadio] = useState("");

    const handleTextInput = (e) => {
        setText(e.target.value);
    }

    const handleNumberInput = (e) => {
        setNumber(e.target.value);
    }

    const handleCommentsInput = (e) => {
        setComments(e.target.value);
    }

    const handleOptionInput = (e) => {
        setOption(e.target.value);
    }

    const handleRadioInput = (e) => {
        setRadio(e.target.value);
    }


    return(
        <div className="box">
            <h2>Form Inputs</h2>
            <label>
                text input
                <input type="text" onChange={(e) => handleTextInput(e)}/>
            </label>
            <p>Text Input Value: {text}</p>

            <label>
                Number input
                <input type="number" onChange={(e) => handleNumberInput(e)}/>
            </label>
            <p>Number Input Value: {number}</p>

            <textarea placeholder="Enter comments" onChange={(e) => handleCommentsInput(e) }></textarea>
            <p>Comments: {comments}</p>

            <select onChange={(e) => handleOptionInput(e)}>
                <option value="">-select an option-</option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
            </select>
            <p>Option: {option}</p>

            <label>
                <input type="radio" value="Radio 1" 
                checked={radio === "Radio 1"}
                onChange={(e) => handleRadioInput(e)}/>
                Radio 1
            </label>

            <label>
                <input type="radio" value="Radio 2"
                checked={radio === "Radio 2"}
                onChange={(e) => handleRadioInput(e)}/>
                Radio 2
            </label>

            <p>Radio: {radio}</p>
        </div>
    )

}

export default Inputs;