import React from "react";

export type ExperienceContentProps = {
  title: string;
  period: string;
  organization: string;
  location?: string;
  children?: React.ReactNode;
};

export default function ExperienceContent(props: ExperienceContentProps) {
  return (
    <div className="category-item">
      <header>
        <div className="left">
          <span className="title">{props.title}</span>
          <span className="details">
            <span className="org">{props.organization}</span>
            {props.location ? (
              <span className="location"> - {props.location}</span>
            ) : null}
          </span>
        </div>
        <div className="right">
          <span className="period">
            <em>{props.period}</em>
          </span>
        </div>
      </header>
      {props.children}
    </div>
  );
};
