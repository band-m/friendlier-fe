import React, { useRef, useEffect, useState } from 'react';
import 'nouislider';
import 'nouislider/distribute/nouislider.css';

export default function Slider(){
  const ref = useRef();
  const [slider1, setSlider1] = useState(10);
  const [slider2, setSlider2] = useState(20);

  useEffect(() => {
      noUiSlider.create(ref.current, {
        start: [10, 20],
        tooltips: [true, true],
        connect: [false, true, false],
        range: {
            'min': [0],
            'max': [30]
        },
        step: 1,
        pips: {
          mode: 'steps',
          stepped: false,
          density: 4
      }
      })
  }, []);

  useEffect(() => {
    ref.current.noUiSlider.set([slider1, null])
  }, [slider1])

  useEffect(() => {
    ref.current.noUiSlider.set([null, slider2])
  }, [slider2])

  return (
    <>
    <input type='number' onChange={({target}) => setSlider1(target.value)} value={slider1}></input>
    <input type='number' onChange={({target}) => setSlider2(target.value)} value={slider2}></input>
    <div style={{ 'marginTop': '50px', 'padding': '50px' }} className='noUiSlider'>
      <div ref={ref}></div>
    </div>
    </>
  )
}
