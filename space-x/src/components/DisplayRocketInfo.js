import Button from './button'
import {Image, Card} from 'antd';
import React, { useEffect, useState } from 'react';

const axios = require('axios');

function DisplayRocketInfo() {

    const [resp, setResp] = useState([]);

    useEffect(() => {
        getRocket();
    }, [])

    async function getRocket() {
        try {
            const response = await axios.get('https://api.spacexdata.com/v3/rockets');
            setResp(response.data);
        } catch (error) {
        }
    }

    function displayData(id, name, imageUrl, first_flight, company, wiki){
      return (
        <>
        <Card title={name} style={{ width: 700 }} hoverable>
          <Image width={500} src={imageUrl}/>
          <p> First flight : {first_flight} </p>
          <p> Company : {company} </p>
          <Button name="More detail" link={wiki}/>
        </Card>
        <br />
        </>
      )
    }

    return (
      resp.map(data => displayData(data.id, data.rocket_name, data.flickr_images[0], data.first_flight, data.company, data.wikipedia))
    )
    
}

export default DisplayRocketInfo;