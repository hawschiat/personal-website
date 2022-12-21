import React from "react";

export type ExperienceContentProps = {
  title: string;
  period: string;
  organization: string;
  link: string;
  imagePath?: string;
  location?: string;
};

export default function AchievementContent(props: ExperienceContentProps) {
  return (
    <div className="category-item achievement">
      {props.imagePath ? (
        <div className="badge-container">
          <img
            src={require(`../assets${props.imagePath}`)}
            alt={props.title}
          />
        </div>
      ) : null}
      <div className="right">
        <header>
          <span className="title">{props.title}</span>
          <span className="details">
          <span className="org">{props.organization}</span>
            {props.location ? (
              <span className="location"> - {props.location}</span>
            ) : null}
        </span>
        </header>
        <span className="period">
          <em>{props.period}</em>
        </span>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>
      </div>
    </div>
  );
};
