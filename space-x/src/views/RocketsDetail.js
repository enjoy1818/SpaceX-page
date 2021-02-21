import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Card, Col, Row, Statistic, Image } from 'antd';

const axios = require('axios');

function RocketsDetail(){
    const {rocket_id} = useParams();
    const [detail, setDetail] = useState({flickr_images: 'default', engines : 'default', height : 'default', diameter : 'default', mass : 'default'});

    useEffect(() => {
        getDetail();
    }, [])

    async function getDetail() {
        try {
            const response = await axios.get('https://api.spacexdata.com/v3/rockets/' + rocket_id);
            setDetail(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div style={{display:'flex', justify:'center', alignItems:'center', flexDirection:'column'}}>

        <Card title={detail.rocket_name} style={{ width: '50vw' }} >
        <div style={{display:'flex', justify:'center', alignItems:'center', flexDirection:'column'}}>
        <Image style={{ width:'30vw', height:'50vh' }} src={detail.flickr_images[1]}/> <br/>
            <p> {detail.description} </p>

        <Row gutter={50}>
            <Col>
                <Statistic title="Type" value={detail.rocket_type} />
            </Col>
            <Col>
                <Statistic title="Engine" value={detail.engines.type} />
            </Col>
            <Col>
                <Statistic title="Company" value={detail.company} />
            </Col>
        </Row>

        <Row gutter={50}>
            <Col>
                <Statistic title="First flight" value={detail.first_flight} />
            </Col>
            <Col>
                <Statistic title="Cost per launch" value={`${detail.cost_per_launch} $`} />
            </Col>
        </Row>

        <Row gutter={50}>
            <Col>
                <Statistic title='Height' value={`${detail.height.meters} m`} />
            </Col>
            <Col>
                <Statistic title='Diameter' value={`${detail.diameter.meters} m`} />
            </Col>
            <Col>
                <Statistic title='Mass' value={`${detail.mass.kg} kg`} />
            </Col>
        </Row>

        </div>
        </Card>

        </div>
    )
}
export default RocketsDetail;