import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import UserDashboard from '../../features/user/UserDashboard/UserDashboard'
import HomePage from '../../features/home/HomePage'
import ModalManager from '../../features/modals/ModalManager'

class App extends Component {
  render() {
    return (
      <div>
        <ModalManager />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (

            <div >
              <Switch>
                <Route path="/users" component={UserDashboard} />
              </Switch>
            </div>

          )}
        />
      </div>
    )
  }
}

export default App
