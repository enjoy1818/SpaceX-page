import React from 'react';
import Navbar from '../components/Navbar'
import DisplayRocketInfo from '../components/DisplayRocketInfo'

function RocketPage() {

    return (
        <div>
        <Navbar />
        <div style={{display:'flex', justify:'center', alignItems:'center', flexDirection:'column'}}>
        <DisplayRocketInfo />
        </div>
        </div>
    )
    
}

export default RocketPage;