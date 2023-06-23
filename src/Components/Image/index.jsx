import React from "react";
import PropTypes from 'prop-types';
const Image = (props) => {
  const { src, height, width } = props;

  const containerStyle = {
    height,
    width,
    position: "relative",
    overflow: "hidden",
  };

  const imageStyle = {
    objectFit: "contain",
    width: "100%",
    height: "100%",
  };
  return (
    <div style={containerStyle}>
      <img src={src} alt="Logo" style={imageStyle} />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}

export default Image;


