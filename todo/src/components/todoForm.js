import React from "react";
import {useState} from "react";

const Form = (props) => {
    const [formInput, setFormInput] = useState('');

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            props.addTask(formInput)
            setFormInput('')
        }}>
            <input
            placeholder="Enter a task:"
            name="taskList"
            value={formInput}
            onChange={(e) => {
                setFormInput(e.target.value);
            }}
            />
            <input type = "submit"/>
        </form>
    )
}

export default Form;