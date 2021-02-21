import { Card, Col, Row} from 'antd';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import "../RocketLaunch.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const RocketLaunch = () => {
    const [launchData, setLaunchData] = useState([]);

    const [rocketCoreData, setCoreData] = useState([]);
    const axios = require('axios');
    // let { flight_id } = useParams();
    async function getLaunchData (){
        const response = await axios.get("https://api.spacexdata.com/v3/launches")
        try {
            setLaunchData(response.data)
        }catch (error){
            console.error(error);
        }
    }
    useEffect(()=>{
        getLaunchData()
    }, [])
    
    return(
        <Row style={{alignItems:"center"}}>
            {
            launchData.map((data) => (
            <Card key={data.id} title={data.mission_name} style={{width:"50%"}}>
                <Row style={{alignItems:"center"}}>
                    <Col span={6}>
                        <Card>
                        <div key={data.launch_year+data.id}>Launch Year<h2>{data.launch_year}</h2></div>
                        <div key={data.rocket.rocket_name+data.id}>Rocket Name<h3>{data.rocket.rocket_name}</h3></div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            {data.rocket.first_stage.cores.map((coreData)=>(
                            <div key={coreData.id}>Engine Code <h3>{coreData.core_serial}</h3></div>
                            ))}
                        </Card>
                    </Col>
                    <Col span={6}><Link to={"/Launches/"+data.flight_number}><div>Space Bkicl</div></Link></Col>
                    {/* <Col span={6}><div>Space Bar</div></Col> */}
                </Row>       
            </Card>

        ))
            }
        </Row>
    )
}
export default RocketLaunch