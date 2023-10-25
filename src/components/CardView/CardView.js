import { Card, Col, Row } from "antd";
import React from "react";

const CardView = () => {
  return (
    <>
      <div className="card_view">
        <Row gutter={16}>
          <Col span={8}>
            <Card />
          </Col>
          <Col span={8}>
            <Card />
          </Col>
          <Col span={8}>
            <Card />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CardView;
