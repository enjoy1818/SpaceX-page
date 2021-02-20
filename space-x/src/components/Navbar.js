import React from 'react';
import { Layout, Menu} from 'antd';

function Navbar(){
    return(
        <nav>
        <Layout className="layout">
            <Menu className="Navbar" theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <a href="/Home">
            <img width={200} src={"http://idastensrud.no/spacex/graphics/logo.png"} />
            </a>
                <Menu.Item key="Rocket"><a href="/Rocket">Rockets</a></Menu.Item>
                <Menu.Item key="Launch"><a href="/Launch">Launchs</a></Menu.Item>
            </Menu>
        </Layout>
        </nav>
    );
}
export default Navbar;