import React from "react";
import PropTypes from "prop-types";

const AutoPlayEmbedding = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="500"
      height="200"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

AutoPlayEmbedding.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default AutoPlayEmbedding;