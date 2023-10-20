import React from "react";
import { Avatar } from "antd";
const Avatars = ({ src, size, icon, shape, ...rest }) => {
  return <Avatar src={src} size={size} icon={icon} shape={shape} />;
};

export default Avatars;
