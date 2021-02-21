import { Card, Col, Row } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import {useEffect, useState} from 'react';
import "../RocketLaunch.css"
import {Link} from "react-router-dom";

const RocketLaunch = () => {

    const [launchData, setLaunchData] = useState([]);
    const [filterYear, setFilterYear] = useState("");
    const [filterRocketName, setFilterRocketName] = useState("");
    const [filterSuccess, setFilterSuccess] = useState("");

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

    function handleYear(event){
        setFilterYear(event.target.value);
    }

    function handleName(event){
        setFilterRocketName(event.target.value);
    }

    function handleSuccess(event){
        setFilterSuccess(event.target.value);
    }

    const labelStyle = {marginRight: '10px'};
    const inputStyle = {marginRight: '20px', width: '150px', height: '25px', border: '1px solid'};
    
    return(
        <>
            <div align="right" style={{marginRight: '20px', marginBottom: '20px'}}>
                <label style={labelStyle}> <FilterOutlined/> Filtering By |</label>
                <label style={labelStyle}>Year:</label>
                    <input type="text" onChange={handleYear} style={inputStyle}/>
                <label style={labelStyle}>Rocket's Name:</label>
                    <input type="text" onChange={handleName} style={inputStyle}/>
                <label style={labelStyle}>Launch success ?</label>
                    <select onChange={handleSuccess} style={inputStyle}>
                            <option value="">-</option>
                            <option value="true">Success</option>
                            <option value="false">Failed</option>
                    </select>
            </div>

        <Row style={{alignItems:"center"}}>
            {
            launchData.filter(launchData => launchData.launch_year.includes(filterYear)).filter(launchData => launchData.rocket.rocket_name.includes(filterRocketName)).filter(launchData => String(launchData.launch_success).includes(filterSuccess)).map((data) => (
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
                        <Card>
                        <Link to={"/Launches/"+data.flight_number}><div>Details</div></Link>
                        </Card>
                    </Col>
                </Row>       
            </Card>
        ))
            }
        </Row>
        </>
    )
}
export default RocketLaunch