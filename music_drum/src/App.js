import React, { useState, useRef, useEffect, useCallback } from 'react';
import DrumTile from './drumTile';
import { audioName, audioSet } from './audioSet';
import './App.css'

function App() {
  
  const [powerOn, setPowerOn] = useState(false)
  const [sliderValue, setSliderValue] = useState(50);
  const [displayValue, setDisplayValue] = useState('')

  const audioRef = useRef(new Audio());

  const handlePowerOn = (event) => {
    setDisplayValue('')
    const isChecked = event.target.checked;
    if (isChecked){
      setPowerOn(true)
    } else {
      setPowerOn(false)
    }
  }

  const handlePlay = useCallback((newSrc) => {
    if (powerOn) {
    audioRef.current.src = newSrc;
    audioRef.current.load();

    audioRef.current.addEventListener('error', () => {
      setDisplayValue("Audio Failed!")
    });

    audioRef.current.addEventListener('canplaythrough', () => {
      audioRef.current.play();
    });
  }
  }, [powerOn]);

  const handleVolumeChange = (event) => {
    if (powerOn){
      setSliderValue(event.target.value)
      audioRef.current.volume = sliderValue / 100;
    }
  };

  const handleClick = (event) => {
    if (powerOn){
      setDisplayValue(audioName[event.currentTarget.textContent])
      handlePlay(audioSet[event.currentTarget.textContent])
    }
  }

  useEffect(() => {
    const handleKeyUp = (event) => {
      if (powerOn){
        setDisplayValue(audioName[event.key.toUpperCase()])
        handlePlay(audioSet[event.key.toUpperCase()])
      }
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [powerOn, setDisplayValue, handlePlay]);

  return (
    <div>
      <div className="center" id='drum-machine'>
        <div className="options">

          <h2>- Drum Machine -</h2>

          <div className='controls'>
            <div className='label_controls'>
              <div className='labels'>
                <p className='power'>Power</p>
                <p className='volume'>Volume: <span style={{display: 'inline-block', width: '50px'}}>{sliderValue}</span></p>
              </div>

              <div className='c_controls'>
                <label className="switch">
                  <input type="checkbox" onClick={handlePowerOn}/>
                  <span className="slider round"></span>
                </label>
                
                <input className='range_slider' type="range" min="1" max="100" value={sliderValue} disabled={!powerOn}
                onChange={handleVolumeChange} />
              </div>
            </div>
          </div>

          <div className="display">
            <h5 id='display' style={{margin: "0", }}>{displayValue}</h5>
          </div>
        </div>
        
        <div className="main_tile">
          {Object.keys(audioName).map(key => (
              <DrumTile key={key} onClick={handleClick} id={audioName[key]} src={audioSet[key]}>{key}</DrumTile>
          ))}
        </div>
      </div>
      <p className="links"><small><i>by Bhargav Jois</i></small></p>
    </div>
  );
}

export default App;