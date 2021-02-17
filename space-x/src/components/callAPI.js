import React, { useEffect, useState } from 'react';

const axios = require('axios');

function Rockets() {

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

    function displayData(id, first_flight){
      return (
        <div>
          <h3> Rocket ID : {id} </h3>
          <h4> First flight : {first_flight} </h4>
        </div>
      )
    }

    return (
      resp.map(data => displayData(data.id, data.first_flight))
    )
}

export default Rockets;