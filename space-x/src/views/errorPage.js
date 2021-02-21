import { Result } from 'antd';
const ErrorPage = (props) => {
    return (
        <Result status={props.status} title={props.title}  />
    )
}
export default ErrorPage