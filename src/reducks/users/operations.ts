import { signInAction } from 'reducks/users/actions'
import { push } from 'connected-react-router' // pushでurlを遷移させる

export const signIn = () => {
  // dispatchはactionsを呼び出す役割, getStateは現在のStoreのstateを取得できる
  return async (dispatch: any, getState: any) => {
    // メソッドとして呼び出す
    const state = getState()
    const isSignedIn = state.users.isSignedIn

    if (!isSignedIn) {
      const url = 'https://api.github.com/users/nosuke0926'
      const response = await fetch(url)
        .then((res) => res.json())
        .catch(() => null)

      const username = response.login
      dispatch(
        signInAction({ isSignedIn: true, uid: '0001', username: username }),
      )

      dispatch(push('/'))
    }
  }
}
