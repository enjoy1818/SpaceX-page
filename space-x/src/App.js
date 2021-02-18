import './App.css';
import logo from './spacex.svg'
import { Layout, Row } from 'antd';
import Navbar from './components/Navbar'
import Rockets from './views/Rockets'

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <img className='App-logo' src={logo} />
        <Navbar />
      </Header>
      <Content>
        <Row gutter={16, 16}>
          <Rockets />
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2021 Developed by Pitchayapol, Weerapat, and Possathon
      </Footer>
    </Layout>
  );
}

export default App;
