import Link from "antd/es/typography/Link";
import React from "react";
import Filters from "../Filters/Filters";
import { Checkbox, Space } from "antd";
import "./LeftSidebar.scss";
const filterPanel1 = [
  <Space direction="vertical">
    <Checkbox value={"Blockchain"}>Blockchain</Checkbox>
    <Checkbox value={"Cloud Aggregator"}>Cloud Aggregator</Checkbox>
    <Checkbox value={"Cloud Management"}>Cloud Management</Checkbox>
    <Checkbox value={"DevOps"}>DevOps</Checkbox>
    <Checkbox value={"Digital Markerting"}>Digital Markerting</Checkbox>
    <Checkbox value={"E-Commerce"}>E-Commerce</Checkbox>
    <Checkbox value={"Kafka"}>Kafka</Checkbox>
  </Space>,
];
const filterPanel2 = [
  <Space direction="vertical">
    <Checkbox value={"Africa"}>Africa</Checkbox>
    <Checkbox value={"Australia"}>Australia</Checkbox>
    <Checkbox value={"Canada"}>Canada</Checkbox>
    <Checkbox value={"Europe - East"}>Europe - East</Checkbox>
    <Checkbox value={"Europe - South"}>Europe - South</Checkbox>
    <Checkbox value={"Europe - North"}>Europe - North</Checkbox>
    <Checkbox value={"Europe - West"}>Europe - West</Checkbox>
  </Space>,
];
const filterPanel3 = [
  <Space direction="vertical">
    <Checkbox value={"Startup"}>Startup</Checkbox>
    <Checkbox value={"Enterprise"}>Enterprise</Checkbox>
    <Checkbox value={"MNC's"}>MNC's</Checkbox>
    <Checkbox value={"BPO"}>BPO</Checkbox>
    <Checkbox value={"SHO"}>SHO</Checkbox>
    <Checkbox value={"Finance"}>Finance</Checkbox>
    <Checkbox value={"BMC"}>BMC</Checkbox>
  </Space>,
];
const Leftsidebar = () => {
  return (
    <div className="leftsidebar">
      <div className="filter_heading">
        <h5>Filters</h5>
        <Link>Reset</Link>
      </div>
      <Filters
        filterPanel1={filterPanel1}
        filterPanel2={filterPanel2}
        filterPanel3={filterPanel3}
      />
    </div>
  );
};

export default Leftsidebar;
