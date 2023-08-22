import React, { useState } from 'react';
import Whiteboard from './Whiteboard';
import ColorPicker from './ColorPicker';
import Eraser from './Eraser';

const App = () => {
  const [color, setColor] = useState('#000000');
  const [isEraser, setIsEraser] = useState(false);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleEraserChange = (e) => {
    setIsEraser(e.target.checked);
  };

  return (
    <div className="whiteboard">
      <div className="color-picker">
        <label htmlFor="color">Color:</label>
        <input
          type="color"
          id="color"
          value={color}
          onChange={handleColorChange}
        />
      </div>
      <div className="eraser">
        <label htmlFor="eraser">Eraser:</label>
        <input
          type="checkbox"
          id="eraser"
          checked={isEraser}
          onChange={handleEraserChange}
        />
      </div>
      <Whiteboard color={color} isEraser={isEraser} />
    </div>
  );
};

export default App;

