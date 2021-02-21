import { useState, useEffect } from 'react';
import { Image, Card } from 'antd';
import { GlobalOutlined, TwitterOutlined } from '@ant-design/icons';

const axios = require('axios');

const HomePage = () => {

    const [spaceX_info, setInfo] = useState({links: { website : 'default', twitter : 'default', elon_twitter : 'default'}});

    useEffect(() => {
        getInfo();
    }, [])

    async function getInfo() {
        try {
            const response = await axios.get('https://api.spacexdata.com/v3/info');
            // console.log(response.data);
            setInfo(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div style={{display:'flex', justify:'center', alignItems:'center', flexDirection:'column'}}>
        <Card title="About SpaceX" style={{ width:'90vw', height:'100vh' }} hoverable>
        <div>
            <p>{spaceX_info.summary}</p>
            <div>
            <div style={{display:'flex', justify:'center', alignItems:'center', flexDirection:'column'}}>
                <Image style={{ width:'50vw', height:'60vh' }} src={"https://cms.qz.com/wp-content/uploads/2018/02/spacex-falcon-heavy-elon-musk-china-europe-esa-nasa-mars-sls-boeing.jpg?quality=75&strip=all&w=1600&h=900&crop=1"}/>
            </div> <br/>
                <p><GlobalOutlined /> <a href={spaceX_info.links.website}>SpaceX Website</a></p>
                <p><TwitterOutlined /> <a href={spaceX_info.links.twitter}>SpaceX Twitter</a></p>
                <p><TwitterOutlined /> <a href={spaceX_info.links.elon_twitter}>Elon Musk's Twitter</a></p>
            </div>
        </div>
        </Card>
        </div>
    )
}

export default HomePage;