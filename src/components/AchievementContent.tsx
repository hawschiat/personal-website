import React from "react";

export type ExperienceContentProps = {
  title: string;
  period: string;
  organization: string;
  link: string;
  imagePath?: string;
  location?: string;
  children?: React.ReactNode;
};

export default (props: ExperienceContentProps) => {
  return (
    <div className="category-item achievement">
      <header>
        {props.imagePath ? (
          <div className="badge-container">
            <img
              src={require(`../assets${props.imagePath}`)}
              alt={props.title}
            />
          </div>
        ) : null}
        <div className="left">
          <span className="title">{props.title}</span>
          <span className="details">
            <span className="org">{props.organization}</span>
            {props.location ? (
              <span className="location"> - {props.location}</span>
            ) : null}
          </span>
          <span className="period">
            <em>{props.period}</em>
          </span>
          <a
            className="App-link"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </header>
      {props.children}
    </div>
  );
};
