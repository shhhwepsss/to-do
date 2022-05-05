export interface IAction{
    type:string
    task: ITask
}

export interface ITask {
    title:string
}

export interface IState {
    tasks: Array<ITask>
}