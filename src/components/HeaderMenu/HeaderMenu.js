import React from "react";
import "./HeaderMenu.scss";
import Link from "antd/es/typography/Link";

const HeaderMenu = () => {
  return (
    <div className="headerMenu">
      <ul>
        <li>
          <Link>Product</Link>
        </li>
        <li>
          <Link>Solutions</Link>
        </li>
        <li>
          <Link>MarketPlace</Link>
        </li>
        <li>
          <Link>Community</Link>
        </li>
        <li>
          <Link>Partner</Link>
        </li>
        <li>
          <Link>Pricing</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
