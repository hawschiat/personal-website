import React from "react";
import "../styles/Ability.css";

export type AbilityProp = {
  name: string;
  rated: number;
  outOf: number;
};

const rating = (props: AbilityProp) => {
  return (
    <div className="rating">
      {Array(props.outOf)
        .fill("")
        .map((_, i) => {
          if (i + 1 <= props.rated) {
            return <i className="fas fa-star" key={i}></i>;
          } else if (i + 1 <= Math.ceil(props.rated)) {
            if ((i + 1) % props.rated >= 0.5) {
              return <i className="fas fa-star-half-alt" key={i}></i>;
            } else {
              return <i className="fas fa-star" key={i}></i>;
            }
          } else {
            return <i className="far fa-star" key={i}></i>;
          }
        })}
    </div>
  );
};

export default (props: AbilityProp) => {
  return (
    <div className="ability">
      <div className="name">{props.name}</div>
      {rating(props)}
    </div>
  );
};
