import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import Redux from './redux'
import 'antd/dist/antd.css'
import { Switch, HashRouter, Route } from 'react-router-dom'
import Products from './screens/products'
import Cart from './screens/cart'
import LayoutComponent from './components/LayoutComponent'

const routes = (
  <LayoutComponent>
    <Redux>
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route
              exact
              path="/cart"
              component={props => <Cart {...props} isCart />}
            />
          </Switch>
        </div>
      </HashRouter>
    </Redux>
  </LayoutComponent>
)

ReactDOM.render(routes, document.getElementById(`root`))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
