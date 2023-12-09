import { createContext, useContext, useEffect, useReducer } from 'react'

import AppReducer from './AppReducer'

export const Context = createContext()

export const useGlobalState = () => {
    const context = useContext(Context)
    return context
}

const initialState = {
    tasks: [],
}

export const GlobalProvider = ({ children }) => {

    //Tasks methods
    const addTask = (task) => {
        dispatch({
            type: 'ADD_TASK',
            payload: task
        })
    }

    const deleteTask = (id) => {
        dispatch({
            type: 'DELETE_TASK',
            payload: id
        })
    }

    const modifiedTask = (id) => {
        dispatch({
            type: 'MODIFIED_TASK',
            payload: id
        })
    }

    const [state, dispatch] = useReducer(AppReducer, initialState,
        () => {
            const localData = localStorage.getItem('tasks')
            return localData ? JSON.parse(localData) : initialState
        })

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(state))
    }, [state])

    return (
        <Context.Provider
            value={
                {
                    tasks: state.tasks,
                    addTask,
                    deleteTask,
                    modifiedTask,
                }
            }
        >
            {children}
        </Context.Provider>
    )
}