import './App.css';
import logo from './spacex.svg'
import { Layout, Row } from 'antd';
import Navbar from './components/Navbar'
import Rockets from './views/Rockets'
import HomePage from './views/HomePage'
import RocketsDetail from './views/RocketsDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <a href="/"><img className='App-logo' src={logo} /></a>
        <Navbar />
      </Header> <br/>
      <Content>

      <Router>
      <Switch>

      <Route path="/Rocket">
        <Row gutter={16, 16}>
            <Rockets />
        </Row>
      </Route>

      <Route path="/Detail/:rocket_id">
        <RocketsDetail />
      </Route>

      <Route path="/">
          <HomePage />
      </Route>

      </Switch>
      </Router>


      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2021 Developed by Pitchayapol, Weerapat, and Possathon
      </Footer>
    </Layout>
  );
}

export default App;
