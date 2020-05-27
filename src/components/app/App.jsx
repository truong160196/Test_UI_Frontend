import React from 'react';
import {
  Switch, Route, BrowserRouter,
} from 'react-router-dom';

import routes from '../../router';

// import component
import Header from '../layout/header/Header';

class App extends React.Component {
  componentWillMount = () => {
    //
  }

  showContentMenus = (menus) => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((route, key) => (
        <Route
          key={key.toString()}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ));
    }
    return <Switch>{result}</Switch>;
  }

  render() {
    return (
      <BrowserRouter>
        <div className="bg">
          <Header />
          {this.showContentMenus(routes)}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;