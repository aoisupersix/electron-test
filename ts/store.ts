import { combineReducers, createStore } from 'redux'
import { TaskReducer } from './reducers/taskReducer';
import { ITaskList } from './states/ITask'

/**
 * 親ステート
 */
export interface IState {
    taskList: ITaskList
}

const combineReducer = combineReducers<IState>({
    taskList: TaskReducer,
})

const store = createStore(combineReducer)
export default store
