import { Card, Col, Row, Select, Input } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import {useEffect, useState} from 'react';
import "../RocketLaunch.css"
import {Link} from "react-router-dom";

const RocketLaunch = () => {

    const [launchData, setLaunchData] = useState([]);
    const [filterYear, setFilterYear] = useState("");
    const [filterRocketName, setFilterRocketName] = useState("");
    const [filterSuccess, setFilterSuccess] = useState("");
    const [isLoading, setLoading] = useState(false);
    const { Option } = Select;

    const axios = require('axios');
    async function getLaunchData (){
        const response = await axios.get("https://api.spacexdata.com/v3/launches")
        try {
            // window.alert(response.data.length)
            // console.log(response)
            setLaunchData(response.data)
        }catch (error){
            console.error(error);
        }finally{

        }
    }
    useEffect(()=>{
        getLaunchData()
    }, [])

    function handleYear(event){
        console.log(event)
        setFilterYear(event.target.value);
    }

    function handleName(event){
        setFilterRocketName(event.value);
    }

    function handleSuccess(event){
        setFilterSuccess(event.value);
    }

    const labelStyle = {marginRight: '10px'};
    const inputStyle = {marginRight: '20px', width: 120, height: '32px'};
    
    return(
        <>
            <div align="right" style={{marginRight: '20px', marginBottom: '20px'}}>
                <label style={labelStyle}> <FilterOutlined/> Filtering By |</label>
                <label style={labelStyle}>Launch year:</label>
                    <Input type="text" onChange={handleYear} style={inputStyle}/>
                <label style={labelStyle}>Rocket's Name:</label>
                    <Select labelInValue style={inputStyle} onChange={handleName} labelInValue>
                            <Option value="">-</Option>
                            <Option value="Falcon 1">Falcon 1</Option>
                            <Option value="Falcon 9">Falcon 9</Option>
                            <Option value="Falcon Heavy">Falcon Heavy</Option>
                            <Option value="Starship">Starship</Option>
                    </Select>
                <label style={labelStyle}>Launch success ?</label>
                    <Select onChange={handleSuccess} style={inputStyle} labelInValue>
                            <Option value="">-</Option>
                            <Option value="true">Success</Option>
                            <Option value="false">Failed</Option>
                    </Select>
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