import { useState, useEffect } from 'react';
import Card from './components/Card';

const axios = require('axios');

const Rockets = () => {

    useEffect(() => {
        getRocket();
    }, [])

    async function getRocket() {
        try {
            const response = await axios.get('https://api.spacexdata.com/v3/rockets');
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Card />
    )
}

export default Rockets;