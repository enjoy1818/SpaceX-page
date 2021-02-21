import "../RocketLaunch.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { Divider, Card , Space, Typography, Row, Col} from 'antd'
const DetailedRocket = (props) => {
    const [detailedRocket, setDetail] = useState({rocket:{rocket_name:"Default",
    cores:[]},
    launch_site:{site_name:"Default"},details:"Default"})
    const axios = require('axios');
    const { Title, Paragraph } = Typography
    let { flightId } = useParams();
    async function getDetailedLaunch(){
        const response = await axios.get("https://api.spacexdata.com/v3/launches/"+flightId)
        try {
            console.log(response.data)
            setDetail(response.data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
    getDetailedLaunch()
    }, [])
    return(
        <Card key="DetailedLaunchCard" Style={{alignItems:"center"}}>
            <Divider><Title level={2}>Mission Detail</Title></Divider>
            <Row  style={{textAlign:"center"}}> 
                <Col span={8}>
                    <Title level={5}>Mission Name</Title>
                    <Title level={3}>{detailedRocket.mission_name}</Title>
                </Col>
                <Col span={8} >
                    <Title level={5}>Rocket Used</Title> 
                    <Title level={3}>{detailedRocket.rocket.rocket_name}</Title>
                </Col>
                <Col span={8}>
                    <Title level={5}>Launch Site</Title>
                    <Title level={3}>{detailedRocket.launch_site.site_name}</Title>
                </Col>
            </Row>    
            <Divider><Title level={2}>Mission Log</Title></Divider> 
                  <Paragraph style={{textAlign:"center"}}>{detailedRocket.details}</Paragraph>     
        </Card>
    )
}

export default DetailedRocket