import React, { useState } from 'react';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

export default function Slider(){
  const [slider1, setSlider1] = useState(10);
  const [slider2, setSlider2] = useState(20);

  const update = (render, handle, value, un, percent) => {    
    if(handle === 0){
      setSlider1(value[0].toFixed(0))
    } else {
      setSlider2(value[1].toFixed(0))
    }
  }

  return (
    <>
      <input style={{ marginTop: '50px' }} type='number' value={slider1} onChange={({target}) => setSlider1(target.value)} />
      <input type='number' value={slider2} onChange={({target}) => setSlider2(target.value)} />
      <Nouislider onSlide={update} range={{ min: 0, max: 30 }} start={[slider1, slider2]} margin={1} tooltips={[true, true]} connect step={1} />
    </>
  )
}
