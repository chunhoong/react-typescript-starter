import React from "react";
import "./Card.scss";

interface Props {
  title: string;
  description: string;
  id?: string;
}

const Card: React.FC<Props> = (props) => {
  return (
    <div id={props.id} className="card-body">
      <h1 id={props.id && `${props.id}-title`} className="card-title">
        {props.title}
      </h1>
      <p id={props.id && `${props.id}-description`} className="card-description">
        {props.description}
      </p>
    </div>
  );
};

export default Card;
