import React, {Component} from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';
import ScrollToTopRoute from './ScrollToTopRoute';
import routes from './router';
/*------ Pages-----*/


class App extends Component{
  routes
  render() {
    return(
      <div>
        <NotificationContainer />
        <Router>
          <Switch>
            {routes.map((route, i) => {
              return <ScrollToTopRoute key={i}
                authRequired={route.authRequired}
                exact={route.exact}
                path={route.path} 
                component={route.component}
                hideLoader={this.props.hideLoader}
                showLoader={this.props.showLoader}
              />
            })}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
