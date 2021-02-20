import './App.css';
import logo from './spacex.svg'
import { Layout, Row } from 'antd';
import Navbar from './components/Navbar'
import Rockets from './views/Rockets'
import RocketLaunch from './views/RocketLaunch'
import Home from './views/Home'
import ErrorPage from "./views/errorPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const { Header, Content, Footer } = Layout;

function App() {
  return (
  <Router>
    <Layout>
      <Header>
        <a href="/"><img className='App-logo' src={logo} /></a>
        <Navbar />
      </Header>
      <Content>
        {/* <Row gutter={16, 16}>
          <Rockets />
        </Row> */}  
      <Switch>
        <Route exact path="/Launches">
          <RocketLaunch />
        </Route>
        <Route exact path="/Rockets">
          <Rockets />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <ErrorPage status="404" title="404"/>
        </Route>
      </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2021 Developed by Pitchayapol, Weerapat, and Possathon
      </Footer>
    </Layout>
    
  </Router>
  );
}

export default App;
