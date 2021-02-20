import { useState, useCallback } from 'react';
import { Divider, Menu } from 'antd';
import { RocketOutlined, ToTopOutlined } from '@ant-design/icons';
import logo from "../spacex.svg"

function Navbar() {

    const [click, setIsClick] = useState(['launches']);
    const handleClick = (event) => {
        setIsClick(event.key)
    };

    return (
        <>
            {/* <a href="/"><img className='App-logo' src={logo}/></a> */}
            <Menu className='Navbar' theme='dark' onClick={handleClick} selectedKeys={click} mode="horizontal">
                <Divider type="vertical" />
                <Menu.Item key="rockets" icon={<RocketOutlined />}>
                    <a href="/Rockets">Rockets</a>
                    </Menu.Item>
                <Menu.Item key="launches" icon={<ToTopOutlined />}>
                    <a href="/Launches">Launches</a>
                    </Menu.Item>
            </Menu>
        </>
    )
}

export default Navbar;