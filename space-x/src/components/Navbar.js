import { useState } from 'react';
import { Divider, Menu } from 'antd';
import { RocketOutlined, ToTopOutlined } from '@ant-design/icons';

function Navbar() {

    const [click, setIsClick] = useState(['rockets']);

    const handleClick = (event) => {
        console.log(event)
        setIsClick(event.key);
    };

    return (
        <>
            {/* <img className='App-logo' src={logo} /> */}
            <Menu className='Navbar' theme='dark' onClick={handleClick} selectedKeys={click} mode="horizontal">
                <Divider type="vertical" />
                <Menu.Item key="rockets" icon={<RocketOutlined />}>
                    Rockets
                    </Menu.Item>
                <Menu.Item key="launches" icon={<ToTopOutlined />}>
                    Launches
                    </Menu.Item>
            </Menu>
        </>
    )
}

export default Navbar;