import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import DisplayRocketInfo from '../components/DisplayRocketInfo'

const axios = require('axios');

function RocketPage() {

    return (
        <div>
        <Navbar />
        <DisplayRocketInfo />
        </div>
    )
    
}

export default RocketPage;