import { Col, Row } from "antd";
import React from "react";
import CardList from "../CardList/CardList";
import "./ListView.scss";
const ListView = () => {
  return (
    <>
      <div className="listing">
        <div className="listing_header">
          <Row gutter={0}>
            <Col span={8}>
              <h5>Company</h5>
            </Col>
            <Col span={16}>
              <h5>Specialist</h5>
            </Col>
          </Row>
        </div>
        <div className="listing_content">
          <CardList />
          <CardList />
          <CardList />
          <CardList />
          <CardList />
          <CardList />
        </div>
      </div>
    </>
  );
};

export default ListView;
