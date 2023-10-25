import { Col, Row, Space } from "antd";
import React from "react";
import Avatar from "antd/es/avatar/avatar";
import { images } from "../../config/image";
import Tags from "../Tags/Tags";
import "./CardList.scss";
const CardList = () => {
  return (
    <div className="listing_card">
      <Row gutter={0} className="listing_card_wrap">
        <Col span={6} className="listing_card_title">
          <Avatar src={images.avatar_img} size={40}></Avatar>
          <h4>Mastodon</h4>
        </Col>
        <Col span={18} className="listing_card_content">
          <p>
            Mastodon is free and open-source software that provides instant
            global communication.
          </p>
          <Space size={[0, 4]}>
            <Tags value={"Analytics"} className={"tag-grey small"}></Tags>
            <Tags value={"Big data"} className={"tag-grey small"}></Tags>
            <Tags value={"Financial"} className={"tag-grey small"}></Tags>
            <Tags value={"Developer"} className={"tag-grey small"}></Tags>
            <Tags value={"3 more"} className={"tag-grey small"}></Tags>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default CardList;
