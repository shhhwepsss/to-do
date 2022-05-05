export interface IAction{
    type:string
    task: ITask
}

export interface ITask {
    title:string
    id: number
    description: string
}

export interface IState {
    allTasks: Array<ITask>
}