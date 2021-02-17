import { useState, useEffect } from 'react';
import { Card, Col, Row } from 'antd';

const axios = require('axios');

const Rockets = () => {

    const [rockets, setRockets] = useState([]);

    const { Meta } = Card;

    useEffect(() => {
        getRocket();
    }, [])

    async function getRocket() {
        try {
            const response = await axios.get('https://api.spacexdata.com/v3/rockets');
            console.log(response.data);
            setRockets(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (

        rockets.map((rocket) => (

            <Col span={8}>
                <Card title={rocket.rocket_name} extra={<a href="#">More</a>} style={{ width: 300 }}>
                    <Meta
                        description={rocket.description}
                    />
                </Card>
            </Col>

        ))

    )
}

export default Rockets;