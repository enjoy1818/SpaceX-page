
import React, { useState, setState, useEffect } from 'react'
import { Card } from 'antd'
import './Header.css'
function Header(props) {
 
    const [dataCollection, setData] = useState([]);
    const axios = require('axios');
    useEffect(() => {
        getData()
    }, [])

    async function getData() {
    try{
        const result = await axios.get('https://api.spacexdata.com/v3/launches')
        var data = result.data
        // console.log(data)
        setData(data)
    }
        catch(err){
            console.error(err)
        }
    }

    function parseData(launchRecord){
        // console.log(coreModule.length)
        var coreSerial = launchRecord.rocket.first_stage.cores.map((core) =>
            <p key={core.core_serial}>EngineID : {core.core_serial}</p>
        );
        // }
        // console.log(typeof coreSerial)
        return (
        <div style={{display:"flex", flexDirection:"row"}}>
            <div style={{flexGrow:"1"}}></div>
            <div style={{flexGrow:"3"}}>
            <Card key={launchRecord.flight_number} title={launchRecord.mission_name}>
                <p key={launchRecord.rocket.rocket_name.id}>{launchRecord.rocket.rocket_name}</p>
                {coreSerial}
            </Card>
            </div>
            <div style={{flexGrow:"1"}}></div>
        </div>
        )
    }

    return (
        dataCollection.map(data => parseData(data))
        
    );
}
export default Header;