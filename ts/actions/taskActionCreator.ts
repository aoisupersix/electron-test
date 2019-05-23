import Moment from 'moment'
import { ITask } from '../states/iTask'
import {
    ADD_TASK,
    DELETE_TASK,
    IAddTaskAction,
    IDeleteAction,
    IShowTaskAction,
    IToggleCompleteAction,
    SHOW_TASKS,
    TOGGLE_COMPLETE_TASK,
} from './taskActions'

/**
 * タスクの表示アクションを生成します。
 * @param tasks 表示するタスクのリスト
 */
export const createShowTasksAction = (tasks: ITask[]): IShowTaskAction => {
    const dummyTasks: ITask[] = [
        {
            complete: false,
            deadline: Moment().add(1, 'day').toDate(),
            id: '0',
            taskName: 'task01'
        },
        {
            complete: false,
            deadline: Moment().add(1, 'day').toDate(),
            id: '1',
            taskName: 'task02'
        },
        {
            complete: false,
            deadline: Moment().add(-1, 'day').toDate(),
            id: '2',
            taskName: 'task03'
        },
        {
            complete: true,
            deadline: Moment().add(-1, 'day').toDate(),
            id: '3',
            taskName: 'task04'
        },
    ]

    return {
        // tasks: tasks,
        tasks: dummyTasks,
        type: SHOW_TASKS
    }
}

/**
 * タスクの完了状態を切り替える
 * @param taskId 完了状態を切り替える対象のタスクのID
 */
export const createToggleCompleteAction = (taskId: string): IToggleCompleteAction => {
    return {
        taskId,
        type: TOGGLE_COMPLETE_TASK,
    };
};
/**
 * タスクを削除するアクションを作成する
 * @param taskId 削除するタスクのID
 */
export const createDeleteTaskAction = (taskId: string): IDeleteAction => {
    return {
        taskId,
        type: DELETE_TASK,
    };
};
