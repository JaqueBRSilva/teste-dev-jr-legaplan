export type Task_PropTypes = {
    id: number;
    taskDescription: string;
    taskStatus: string;
}

export interface ITask_Props {
    tasksPending?: Task_PropTypes[];
    tasksDone?: Task_PropTypes[];
    taskListType?: 'tasksForToday' | 'tasksDone';
    taskStatus?: 'pending' | 'done';
}