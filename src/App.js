import React, { Component } from 'react';

import Shelves from './components/shelves/Shelves'
import routes from './routes';
import './reset.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default App;
