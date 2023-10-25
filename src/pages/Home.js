import React from "react";
import Banner from "../components/Banner/Banner";
import Leftsidebar from "../components/LeftSidebar/Leftsidebar";
import { Col, Row } from "antd";
import Tags from "../components/Tags/Tags";
import Card from "../components/Card/Card";
import ListView from "../components/ListView/ListView";
import CardView from "../components/CardView/CardView";
const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container py-48">
        <Row gutter={[20, 0]}>
          <Col span={6}>
            <Leftsidebar />
          </Col>

          <Col span={18}>
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
            {/* <CardView /> */}
            <ListView />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
