import clone from 'clone'
import { Action } from 'redux'

type WorkOfAction<S, A extends Action = any> = (state: S, action: A) => void

/**
 * Action To Reducer Manager
 */
class ActionToReducerMapper<S> {
    /**
     * アクションタイプと処理を保持する
     */
    private works: {[actionKey: string]: WorkOfAction<S>} = {}

    /**
     * アクションの定義を追加する
     */
    public addWork = <A extends Action>(actionType: string, func: WorkOfAction<S, A>) => {
        this.works[actionType] = func
    }

    /**
     * ステートにアクションを実行します。
     */
    public execute = (state: S, action: Action) => {
        let newState = state;
        const process = this.works[action.type]
        if (!!process) {
            newState = clone(state)
            process(newState, action)
        }

        return newState
    }
}

const createActionToReducerMapper = <S>() => {
    return new ActionToReducerMapper<S>()
}

export default createActionToReducerMapper
