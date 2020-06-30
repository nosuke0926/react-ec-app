import * as Actions from 'reducks/users/actions'
import initialState from 'reducks/store/initialState'

export const UsersReducer = (state = initialState.users, action: any) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      // 現在のStoreの状態をスプレッド構文で展開した後に、actionで渡されたpayloadでそのStoreの状態を上書き（マージ）する
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}
