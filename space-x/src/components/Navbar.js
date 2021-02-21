import { useState } from 'react';
import { Divider, Menu } from 'antd';
import { RocketOutlined, ToTopOutlined, HomeOutlined } from '@ant-design/icons';


function Navbar() {

    const [click, setClick] = useState("home");

    const handleClick = event => {
        setClick(event.key);
        console.log(click)
    };

    return (
        <>
            <Menu className='Navbar' theme='dark' mode="horizontal" selectedKeys={click}>
                <Divider type="vertical" />
                <Menu.Item key="home" icon={<HomeOutlined />} onClick={handleClick}>
                    <a href="/" >Home</a>
                    </Menu.Item>
                <Menu.Item key="rockets" icon={<RocketOutlined />} onClick={handleClick}>
                    <a href="/Rocket" >Rockets</a>
                    </Menu.Item>
                <Menu.Item key="launches" icon={<ToTopOutlined />} onClick={handleClick}>
                    <a href="/Launch" >Launches</a>
                    </Menu.Item>
            </Menu>
        </>
    )
}

export default Navbar;