import { Action } from 'redux'
import { v4 as UUID } from 'uuid'
import { ITask } from '../states/iTask'

/**
 * タスクの一覧を表示するアクションタイプ
 */
export const SHOW_TASKS = UUID()

/**
 * タスクの一覧を表示するアクション
 */
export interface IShowTaskAction extends Action {
    tasks: ITask[]
}

/**
 * タスクを追加するアクションタイプ
 */
export const ADD_TASK = UUID()

/**
 * タスクを追加するアクション
 */
export interface IAddTaskAction extends Action {
    deadline: Date
    taskName: string
}

/**
 * タスクを削除するアクションタイプ
 */
export const DELETE_TASK = UUID()

/**
 * タスクを削除アクション
 */
export interface IDeleteAction extends Action {
    taskId: string
}

/**
 * タスクを完了にするアクションタイプ
 */
export const TOGGLE_COMPLETE_TASK = UUID()

/**
 * タスクを完了にするアクションタイプ
 */
export interface IToggleCompleteAction extends Action {
    taskId: string
}
