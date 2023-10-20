import React from "react";
import Banner from "../components/Banner/Banner";
import Leftsidebar from "../components/LeftSidebar/Leftsidebar";
import { Col, Row } from "antd";
import Tags from "../components/Tags/Tags";
import Card from "../components/Card/Card";
const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container py-48">
        <Row>
          <Col>
            <Leftsidebar />
          </Col>
          <Col>
            <div className="filter-tags">
              <Tags value={"Blockchain"} closable={true} className="tag-grey" />
              <Tags
                value={"Cloud Aggregator"}
                closable={true}
                className="tag-grey"
              />
              <Tags
                value={"Colud Management"}
                closable={true}
                className="tag-grey"
              />
            </div>
            <div>
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
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
