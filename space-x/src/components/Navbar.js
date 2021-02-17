import { useState } from 'react';
import { Menu } from 'antd';
import { RocketOutlined, ToTopOutlined } from '@ant-design/icons';

function Navbar() {

    const [click, setIsClick] = useState(['rocket']);

    const handleClick = (event) => {
        console.log(event)
        setIsClick(event.key);
    };

    return (
        <>
            {/* <img className='App-logo' src={logo} /> */}
            <Menu onClick={handleClick} selectedKeys={click} mode="horizontal">
                <Menu.Item key="rocket" icon={<RocketOutlined />}>
                    Rockets
                </Menu.Item>
                <Menu.Item key="launch" icon={<ToTopOutlined />}>
                    Launches
                </Menu.Item>

            </Menu>
        </>
    )
}

export default Navbar;