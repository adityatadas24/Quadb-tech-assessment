import { ADD_TASK, TOGGLE_TASK, DELETE_TASK, IMPORTANT_TASK } from '../Actions/TaskActions';

const initialState = JSON.parse(localStorage.getItem('tasks')) || [
    { id: 1, task: 'Playing outside', complete: false, imp: false },
    { id: 2, task: 'Buy groceries', complete: false, imp: false },
    { id: 3, task: 'Call the bank', complete: false, imp: false }
];
const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTasks = [...state, action.payload];
            localStorage.setItem('tasks', JSON.stringify(newTasks));
            return newTasks;
        
        case TOGGLE_TASK:
            const toggledTasks = state.map(task =>
                task.id === action.payload ? { ...task, complete: !task.complete } : task
            );
            localStorage.setItem('tasks', JSON.stringify(toggledTasks));
            return toggledTasks;

            case IMPORTANT_TASK:
                const impTasks = state.map(task =>
                    task.id === action.payload ? { ...task, imp: !task.imp } : task
                );
                localStorage.setItem('tasks', JSON.stringify(impTasks));
                return impTasks;
                
        
        case DELETE_TASK:
            const filteredTasks = state.filter(task => !task.complete);
            localStorage.setItem('tasks', JSON.stringify(filteredTasks));
            return filteredTasks;
        
        default:
            return state;
    }
};

export default TaskReducer;
