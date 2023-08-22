import React from 'react';

const Eraser = ({ isEraser, onEraserChange }) => {
  return (
    <div className="eraser">
      <label htmlFor="eraser">Eraser:</label>
      <input
        type="checkbox"
        id="eraser"
        checked={isEraser}
        onChange={onEraserChange}
      />
    </div>
  );
};

export default Eraser;
