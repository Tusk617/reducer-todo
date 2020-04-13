import React, { useReducer, useState } from 'react';
import {reducer, initialState} from "../reducers/reducer";

const List = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>{state.item}</p>
        </div>
    )
}
export default List;