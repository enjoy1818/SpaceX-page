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
      <Footer></Footer>
    </Layout>
  );
}

export default App;
