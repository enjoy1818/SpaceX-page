import { useState, useCallback } from 'react';
import { Divider, Menu } from 'antd';
import { RocketOutlined, ToTopOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

function Navbar() {

    const [click, setIsClick] = useState(['home']);
    const handleClick = (event) => {
        setIsClick(event.key)
    };

    return (
        <>
            <Menu className='Navbar' theme='dark' onClick={handleClick} selectedKeys={click} mode="horizontal">
                <Divider type="vertical" />
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="rockets" icon={<RocketOutlined />}>
                    <Link to="/Rockets">Rockets</Link>
                </Menu.Item>
                <Menu.Item key="launches" icon={<ToTopOutlined />}>
                    <Link to="/Launches">Launches</Link>
                </Menu.Item>
            </Menu>
        </>
    )
}

export default Navbar;