export const todos = (state=[], action) => {
    
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,{
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), //Generates random string
                    title: action.title,
                    text: action.text,
                    completed: false,
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => 
                (todo.id === action.id)
                ?{...todo, completed:!todo.completed} : todo)
        case 'DELETE_TODO':
            return state.filter(todo => {
                return todo.id !== action.id;
            })
        default:
            return state;
    }
}
