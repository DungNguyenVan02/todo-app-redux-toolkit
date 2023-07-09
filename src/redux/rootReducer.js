const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        {id: 1, name: 'Learn React', completed: false, priority: 'Hight'},
        {id: 2, name: 'Learn Redux', completed: true, priority: 'Hight'}
    ]
}

function rootReducer(state=initState, action) {
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        default:
            return state;
    }
}

export default rootReducer;