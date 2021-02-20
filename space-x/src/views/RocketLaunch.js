import { Card } from 'antd';
import {useEffect, useState} from 'react';
import "../RocketLaunch.css"
const RocketLaunch = (props) => {
    const [launchData, setLaunchData] = useState([]);
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
    // console.log(launchData[0].mission_name)
    return(
        // <div>{console.log(launchData)}</div>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            {
        launchData.map((data) => (
            <Card key={data.id} title={data.mission_name} style={{width:"50%"}}>
                <div key={data.launch_year+data.id}>Launch Year : {data.launch_year}</div>
                <div key={data.rocket.rocket_name+data.id}>Rocket Name : {data.rocket.rocket_name}</div>
                {/* <RocketDetail rocketData={data.rocket.rocket_name}/> */}
            </Card>
        ))
            }
            
        </div>
    )
}
const RocketDetail = (props) => {

    return (
        <Card title={props}>

        </Card>
    )
}
export default RocketLaunch