import React from "react";
import { Checkbox } from "antd";
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const CheckBox = (value, ...rest) => {
  return (
    <div>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
    </div>
  );
};

export default Checkbox;
