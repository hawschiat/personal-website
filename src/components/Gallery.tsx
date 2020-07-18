import React from "react";
import "../styles/Gallery.css";

type GalleryProps = {
  title: string;
  imagePath: string;
};

export default (props: GalleryProps) => {
  return (
    <div className="gallery">
      <div className="img-container">
        <img src={props.imagePath} alt={props.title} />
      </div>
      <div className="gallery-title">{props.title}</div>
    </div>
  );
};
