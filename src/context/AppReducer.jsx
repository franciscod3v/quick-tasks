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
        
        case 'ADD_SITE':
            return {
                ...state,
                sites: [...state.sites, action.payload]
            }
        
        case 'MODIFIED_SITE':
            return {
                ...state,
                sites: state.sites.map(site => {
                    if (site.id === action.payload) {
                        return {
                            ...site,
                            link: action.link,
                            user: action.user,
                            password: action.password
                        }
                    } return site
                })
            }
        
        case 'DELETED_SITE':
            return {
                ...state,
                sites: state.sites.filter((site) => site.id !== action.payload)
            }
    }
}