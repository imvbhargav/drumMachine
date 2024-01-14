import React from 'react';

const DrumTile = ({ children, onClick, id, src }) => {
  return (
    <button className='drum-pad' id={id} onClick={onClick}>
      {children}
      <audio src={src} className='clip' id={children}/>
    </button>
  );
};

export default DrumTile;