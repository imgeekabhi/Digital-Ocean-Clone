import { Tag } from "antd";
import React from "react";

const Tags = ({ closable, onClose, value, className, ...rest }) => {
  return (
    <>
      <Tag className={className} closable={closable} onClose={onClose}>
        {value}
      </Tag>
    </>
  );
};

export default Tags;
