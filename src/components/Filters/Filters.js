import { Collapse } from "antd";
import React from "react";
const { Panel } = Collapse;

const Filters = ({ filterPanel1, filterPanel2, filterPanel3 }) => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="filter_content">
      <Collapse
        defaultActiveKey={["1"]}
        onChange={onChange}
        expandIconPosition=""
      >
        <Panel header="Partner profile" key="1">
          <div className="filter_panel">{filterPanel1}</div>
        </Panel>
        <Panel header="Services" key="2">
          <div className="filter_panel">{filterPanel2}</div>
        </Panel>

        <Panel header="Regions" key="3">
          <div className="filter_panel">{filterPanel3}</div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Filters;