import './App.css';
import { Button, Layout } from 'antd';
import Navbar from './components/Navbar'
import Rockets from './views/Rockets'

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Content>
        <Rockets />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2021 Developed by Pitchayapol, Weerapat, and Possathon
      </Footer>
    </Layout>
  );
}

export default App;
