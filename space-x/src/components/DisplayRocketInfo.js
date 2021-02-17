import Button from './button'
import Image from './Image'
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
            // console.log(response.data);
            setResp(response.data);
        } catch (error) {
            // console.error(error);
        }
    }

    function displayData(id, name, imageUrl, first_flight, company, wiki){
      return (
        <div>
          <Image url={imageUrl} />
          <h3> Rocket ID : {id} </h3>
          <h4> Rocket Name : {name} </h4>
          <h4> First flight : {first_flight} </h4>
          <h4> Company : {company} </h4>
          <Button name="More detail" link={wiki}/>
          <br />
        </div>
      )
    }

    return (
      resp.map(data => displayData(data.id, data.rocket_name, data.flickr_images[0], data.first_flight, data.company, data.wikipedia))
    )
    
}

export default DisplayRocketInfo;