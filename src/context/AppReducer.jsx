export default (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }

        case 'MODIFIED_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload) {
                        return {...task, status: true}
                    }
                    return task;
                })
            }
    
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
    }
}