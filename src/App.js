import './App.css'
import 'antd/dist/antd.css'
import PlannedLayout from './pages/layouts/plannedLayout.component'
import Welcome from './pages/welcome/welcome.component'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PhoneConfirmation from './pages/phoneconfirmation/phoneConfirmation.component'
import { CodeConfirm } from './pages/codeConfirm/codeConfirm.component'
import AllowNotification from './pages/allowNotification/allowNotification.component'
import AppLayout from './pages/layouts/appLayout.component'
import Home from './pages/home/home.component'
import Expolre from './pages/expolre/explore.component'
import Profile from './pages/profile/profile.compoenent'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path={['/', '/invite', '/codeconfirm', '/allownotifications']}>
          <PlannedLayout>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/invite" component={PhoneConfirmation} />
              <Route exact path="/codeconfirm" component={CodeConfirm} />
              <Route
                exact
                path="/allownotifications"
                component={AllowNotification}
              />
            </Switch>
          </PlannedLayout>
        </Route>

        <Route exact path={['/home', '/explore', '/profile']}>
          <AppLayout>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/explore" component={Expolre} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </AppLayout>
        </Route>
      </Router>
    </div>
  )
}

export default App
