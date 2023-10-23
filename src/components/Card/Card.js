import React from "react";
import Avatars from "../Avatar/Avatar";
import "./Card.scss";
import { images } from "../../config/image";
import Tags from "../Tags/Tags";
import Link from "antd/es/typography/Link";
const Card = () => {
  return (
    <div className="card">
      <div className="card_img">
        <img src={images.card_thumb} alt={"card-thumb"} />
        <Tags value="staff picked" className="tag-blue small" />
      </div>
      <div className="card_img_caption">
        <Avatars img={images.avatar_img} img_alt={"avatar"} />
        <Tags value="PaaS vendor" className="tag-grey small" />
      </div>
      <div className="card_content">
        <h3>Mastodon</h3>
        <p>
          Mastodon is free and open-source software that provides instant global
          communication.
        </p>
      </div>

      <div className="card_bottom">
        <h4>Specialist</h4>
        <p>
          Analytics, Big data, Financial, Developer,  Digital Marketing, and 3
          more
        </p>
        <div className="link">
          <Link href="#">View More</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
