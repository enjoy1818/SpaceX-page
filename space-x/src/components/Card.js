import { Card } from 'antd';

const Card = ({ title }) => {
    return (
        <Card title={title} extra={<a href="#">More</a>} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    )
}

export default Card;