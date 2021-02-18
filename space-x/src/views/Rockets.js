import { useState, useEffect } from 'react';
import { Card, Col, Row, Statistic } from 'antd';
import '../rockets.css'

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

            <Col span={6}>
                <Card className='Card-Rocket' title={rocket.rocket_name} extra={<a href='#'>More</a>} style={{ width: 300 }}>
                    {/* <Meta
                        description={rocket.description}
                    /> */}
                    <Row gutter={16}>
                        <Col>
                            <Statistic title="Type" value={rocket.rocket_type} />
                        </Col>
                        <Col>
                            <Statistic title="Engine" value={rocket.engines.type} />
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col>
                            <Statistic title='Height' value={`${rocket.height.meters} m`} />
                        </Col>
                        <Col>
                            <Statistic title='Diameter' value={`${rocket.diameter.meters} m`} />
                        </Col>
                        <Col>
                            <Statistic title='Mass' value={`${rocket.mass.kg} kg`} />
                        </Col>
                    </Row>
                </Card>
            </Col>

        ))

    )
}

export default Rockets;