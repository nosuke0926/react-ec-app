import React from 'react'
import { Switch, Route } from 'react-router'
import { Login, Home } from 'templates/index'

/* url末尾の/(スラッシュ)の有無にかかわらずHomeコンポーネントを表示 */
const Router = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="(/)?" component={Home}></Route>
    </Switch>
  )
}

export default Router
