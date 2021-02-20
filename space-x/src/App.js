import React from 'react';
import 'antd/dist/antd.css';
import RocketPage from './Page/RocketPage'
import Home from './Page/HomePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route path="/Home">
        <Home />
      </Route>

      <Route path="/Rocket">
        <RocketPage />
      </Route>

      {/* <Route path="/users">
        <Users />
      </Route> */}

    </Switch>
    </Router>
    </>
  );
}

export default App;