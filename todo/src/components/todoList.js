import React, { useReducer, useState } from 'react';
import {reducer, initialState} from "../reducers/reducer";
import "./todoList.css"

const List = (props) => {
    console.log(props)
    return (
        <div>
        {props.state.map(item => <h2
            className={item.completed ? 'change' : ''}
            onClick={(event) => {
                event.preventDefault()
                props.toggleTask(item.id)
            }}>{item.item}</h2>)}
        </div>
    )
}
export default List;