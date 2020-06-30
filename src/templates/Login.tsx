import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router' // pushでurlを遷移させる

const Login = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)

  console.log(selector)
  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={() => dispatch(push('/'))}>ログインする</button>
    </div>
  )
}

export default Login
