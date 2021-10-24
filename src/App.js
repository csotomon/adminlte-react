import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import 'admin-lte/build/js/AdminLTE'
import Main from './modules/main/Main';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

library.add(fab, fas, far);

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          {/* add routes with layouts */}
          <Route path="/main" component={Main} />
          <Redirect from="*" to="/main" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
