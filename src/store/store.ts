import { IAction, ITask, IState } from "../interfaces/interfaces";
import { createStore } from 'redux';
const ADD_TASK = "ADD_TASK"

const initialState:IState = {
    tasks: [{title: "asdlkf"}]
}

function reducer(state = initialState, action: IAction){
    switch (action.type) {
        case ADD_TASK:
            const newTasks:Array<ITask> = [...state.tasks, action.task]
            return {
                ...state,
                tasks: newTasks
            }
    }
    return state
}

export const store = createStore(reducer)