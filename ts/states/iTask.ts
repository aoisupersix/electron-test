import { v4 as UUID } from 'uuid'

/**
 * タスク
 */
export interface ITask {
    /** 完了したか？ */
    complete: boolean

    /** 期限 */
    deadline: Date

    /** ID */
    id: string

    /** タスク名 */
    taskName: string
}

/**
 *  タスクリスト
 */
export interface ITaskList {
    /** 一覧 */
    tasks: ITask[]
}

/**
 * 初期データ
 */
export const initTaskList: ITaskList = {
    tasks: []
}

/**
 * 新しいタスクを生成します
 * @param taskName タスク名
 * @param deadline 期限
 */
export const createTask = (taskName: string, deadline: Date): ITask => {
    return {
        complete: false,
        deadline,
        id: UUID(),
        taskName,
    }
}
