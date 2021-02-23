import "../RocketLaunch.css"
import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { Divider, Card , Space, Typography, Row, Col, Timeline, Image} from 'antd'
import { LinkOutlined } from '@ant-design/icons';

const DetailedRocket = (props) => {
    const [detailedRocket, setDetail] = useState({rocket:{rocket_name:"Default",
    first_stage:{cores:["Default"]}},
    launch_site:{site_name:"Default"},details:"Default",
    links:{mission_patch:"Default"}})
    const [timeline, setTimeline] = useState({})
    const axios = require('axios');
    const { Title, Paragraph, Text } = Typography
    let { flightId } = useParams();
    async function getDetailedLaunch(){
        const response = await axios.get("https://api.spacexdata.com/v3/launches/"+flightId)
        try {
            // console.log(response.data)
            setDetail(response.data)
            // setTimeline(response.date.timeline)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
    getDetailedLaunch()
    }, [])
    return(
        <Card key="DetailedLaunchCard" Style={{textAlign:"center", minHeight:"100%", justifyContent:"center"}}>
            <Divider><Title level={2}>Mission Patch</Title></Divider>
            <div style={{width:"12.5%", display:"block", marginLeft:"auto", marginRight:"auto"}}>
                <Image src={detailedRocket.links.mission_patch} />
            </div>
            <Divider><Title level={2}>Mission Detail</Title></Divider>
            <Row  style={{textAlign:"center"}}> 
                <Col span={8}>
                    <Title level={5}>Mission Name</Title>
                    <Title level={3}>{detailedRocket.mission_name}</Title>
                </Col>
                <Col span={8} >
                    <Title level={5}>Rocket Used</Title> 
                    <Title level={3}><Link to={"/Detail/"+detailedRocket.rocket.rocket_id}>{detailedRocket.rocket.rocket_name}</Link> <LinkOutlined /></Title>
                </Col>
                <Col span={8}>
                    <Title level={5}>Launch Site</Title>
                    <Title level={3}>{detailedRocket.launch_site.site_name}</Title>
                </Col>
            </Row>    
            <Divider><Title level={2}>Mission Log</Title></Divider> 
            <Paragraph style={{textAlign:"center"}}>{detailedRocket.details}</Paragraph>
            <Divider><Title level={2}>Rocket Core Module</Title></Divider>
            <Row style={{textAlign:"center"}}>
            {detailedRocket.rocket.first_stage.cores.map((coreData)=>(
                <Col span={24/detailedRocket.rocket.first_stage.cores.length}>
                    <Title level={5}>Core serial number</Title>
                    <Title level={3}>{coreData.core_serial}</Title>
                    <Title level={5}>Core landing status</Title>
                    <Title level={3}>{coreData.land_success ? <Text type='success'>Success</Text> : <Text type='danger'>Failed</Text>}</Title>
                    <Title level={5}>Intended for landing</Title>
                    <Title level={3}>{coreData.landing_intent ? <Text type='success'>Yes</Text>: <Text type='danger'>No</Text>}</Title>

                </Col>
            ))}  
            </Row>   
        </Card>
    )
}

export default DetailedRocket