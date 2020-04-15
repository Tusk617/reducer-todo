import React from "react";
import {useState} from "react";


export const initialState = {
    tasks:[{
    item: '',
    completed: false,
    id: Date.now()
}]
}

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                tasks:[...state.tasks, action.payload]
            }
        default:
            return state;
    }
}