import React, { useReducer, useState } from 'react';
import {reducer, initialState} from "../reducers/reducer";

const List = (props) => {
    console.log(props)
    return (
        <div>
        {props.state.map(item => <h2
            className={item.completed ? 'change' : ''}
            onClick={(event) => {
                event.preventDefault()
                props.handleComplete(item.id)
            }}>{item.item}</h2>)}
        </div>
    )
}
export default List;