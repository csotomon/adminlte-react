import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import 'admin-lte/build/js/AdminLTE'
import Main from './modules/main/Main';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from './pages/Login';

library.add(fab, fas, far);

function App() {
  return (
    
      <BrowserRouter>
        <Switch>
          {/* add routes with layouts */}
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
          <Redirect from="*" to="/main" />
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
