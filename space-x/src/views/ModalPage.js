import { Modal, Button, Space } from 'antd';
import React from 'react';

const ModalPage = (props) => {
  const rocket = props.data;


  function info() {
    Modal.info({
      title: rocket.rocket_name,
      content: (
        <div>
          <p>{rocket.id}</p>
        </div>
      ),
      onOk() {},
    });
  }

  return (
    <Space>
        <Button type="primary" onClick={info}>More detail</Button>
   </Space>
  );
};

export default ModalPage;