import { createContext, useContext, useEffect, useReducer } from 'react'

import AppReducer from './AppReducer'

export const Context = createContext()

export const useGlobalState = () => {
    const context = useContext(Context)
    return context
}

const initialState = {
    tasks: [],
    sites: [],
    timer: []
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

    //Sites methods
    const addSite = (site) => {
        siteDispatch({
            type: 'ADD_SITE',
            payload: site
        })
    }

    const [state, dispatch] = useReducer(AppReducer, initialState,
        () => {
            const localData = localStorage.getItem('tasks')
            return localData ? JSON.parse(localData) : initialState
        })

    const [siteState, siteDispatch] = useReducer(AppReducer, initialState,
        () => {
            const localData = localStorage.getItem('sites')
            return localData ? JSON.parse(localData) : initialState
        })

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(state))
        localStorage.setItem('sites', JSON.stringify(siteState))
    }, [state, siteState])

    return (
        <Context.Provider
            value={
                {
                    tasks: state.tasks,
                    addTask,
                    deleteTask,
                    modifiedTask,
                    addSite
                }
            }
        >
            {children}
        </Context.Provider>
    )
}