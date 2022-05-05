import { IAction, ITask, IState } from "../interfaces/interfaces";
import { createStore } from 'redux';
const ADD_TASK = "ADD_TASK"

const initialState:IState = {
    allTasks: [{title: "asdlkf", id: 1, description: "Не важно что тут написано"}]
}

function reducer(state = initialState, action: IAction){
    switch (action.type) {
        case ADD_TASK:
            const newTasks:Array<ITask> = [...state.allTasks, action.task]
            return {
                ...state,
                tasks: newTasks
            }
    }
    return state
}

export const store = createStore(reducer)