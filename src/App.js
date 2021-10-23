import React from 'react';
import Starter from './pages/Starter';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import 'admin-lte/build/js/AdminLTE'

library.add(fab, fas, far);

function App() {
  return (
    <div className="wrapper">
      <Starter />
    </div>
  );
}

export default App;
