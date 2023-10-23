import { Tag } from "antd";
import React from "react";
import "./Tags.scss";
const Tags = ({ closable, onClose, value, className, ...rest }) => {
  return (
    <>
      <Tag className={`tag ${className}`} closable={closable} onClose={onClose}>
        {value}
      </Tag>
    </>
  );
};

export default Tags;
