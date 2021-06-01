import React from "react";

interface Props {
  title: string;
  description: string;
  id?: string
}

const Card: React.FC<Props> = (props) => {
  return (
    <div id={props.id}>
      <h1 id={props.id && `${props.id}-title`}>{props.title}</h1>
      <p id={props.id && `${props.id}-description`}>{props.description}</p>
    </div>
  );
};

export default Card;

