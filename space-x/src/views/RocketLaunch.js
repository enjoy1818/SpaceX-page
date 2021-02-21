import { Card, Col, Row} from 'antd';
import {useEffect, useState} from 'react';
import "../RocketLaunch.css"
import {Link} from "react-router-dom";
import Title from 'antd/lib/skeleton/Title';
const RocketLaunch = () => {
    const [launchData, setLaunchData] = useState([]);

    const [rocketCoreData, setCoreData] = useState([]);
    const axios = require('axios');
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
                <Row style={{textAlign:"center"}}>
                    <Col span={6}>
                        <Card>
                        <div key={data.launch_year+data.id}>Launch Year<h2>{data.launch_year}</h2></div>
                        <div key={data.rocket.rocket_name+data.id}>Rocket Name<h3>{data.rocket.rocket_name}</h3></div>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            {data.rocket.first_stage.cores.map((coreData)=>(
                            <div key={coreData.id}>Engine Code <h3>{coreData.core_serial}</h3></div>
                            ))}
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <div>Launch Status</div>
                        <div><h3>{data.launch_success ? "Success" : "Failed"}</h3></div>
                        </Card>
                        
                    </Col>
                    <Col span={6}>
                        <Link to={"/Launches/"+data.flight_number}><div>Details</div></Link>
                    </Col>
                </Row>       
            </Card>
        ))
            }
        </Row>
    )
}
export default RocketLaunch