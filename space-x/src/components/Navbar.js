import React from 'react';
import { Layout, Menu} from 'antd';

function Navbar(){
    return(
        <div>
        <Layout className="layout">
            <Menu className="Navbar" theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <a href="/Home">
            <img width={200} src={"http://idastensrud.no/spacex/graphics/logo.png"} />
            </a>
                <Menu.Item key="Rocket">Rockets</Menu.Item>
                <Menu.Item key="Launch">Launchs</Menu.Item>
            </Menu>
        </Layout>
        </div>
    );
}
export default Navbar;