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
        case "TOGGLE_TODO":
            console.log("Toggled")
            return {
                ...state,
                tasks: state.tasks.map(todo => {
                    if (todo.id === action.payload){
                        return {
                            ...todo, completed: !todo.completed
                        }
                    } else {
                        return todo;
                    }
                })
            }
        default:
            return state;
    }
}