import React, { useState } from 'react';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

export default function Slider(){
  const [slider1, setSlider1] = useState(10);
  const [slider2, setSlider2] = useState(20);
  const [num, setNum] = useState(1);
  const [numOfDays, setNumOfDays] = useState(30);
  const [deadline, setDeadline] = useState('months');

  const update = (render, handle, value, un, percent) => {    
    if(handle === 0){
      setSlider1(value[0].toFixed(0))
    } else {
      setSlider2(value[1].toFixed(0))
    }
  }

  const changeNumOfDaysRadio = target => {
    setDeadline(target.id);
    switch(target.id){
      case 'days':
        return setNumOfDays(num)
      case 'weeks':
        return setNumOfDays(num * 7)
      case 'months':
        return setNumOfDays(num * 30)
    }
  }

  const changeNumOfDaysInput = value => {
    setNum(value);
    switch(deadline){
      case 'days':
        return setNumOfDays(value)
      case 'weeks':
        return setNumOfDays(value * 7)
      case 'months':
        return setNumOfDays(value * 30)
    }
  }

  return (
    <>
      <p>How often do you want to be in contact with name?</p>
      <p>Every</p>
      <input type='number' min={1} value={num} onChange={({target}) => changeNumOfDaysInput(+target.value)} /><br/>
      <label htmlFor='days'>Days</label>
      <input type='radio' id='days' name='deadline' checked={deadline === 'days'} onChange={({target}) => changeNumOfDaysRadio(target)}/>
      <label htmlFor='weeks'>Weeks</label>
      <input type='radio' id='weeks' name='deadline' checked={deadline === 'weeks'} onChange={({target}) => changeNumOfDaysRadio(target)}/>
      <label htmlFor='months'>Months</label>
      <input type='radio' id='months' name='deadline' checked={deadline === 'months'} onChange={({target}) => changeNumOfDaysRadio(target)}/><br/>

      <input style={{ marginTop: '50px' }} type='number' value={slider1} onChange={({target}) => setSlider1(target.value)} />
      <input type='number' value={slider2} onChange={({target}) => setSlider2(target.value)} />
      <input type='number' value={numOfDays} onChange={({target}) => setNumOfDays(+target.value)} />

      <Nouislider onSlide={update} range={{ min: 0, max: numOfDays }} start={[slider1, slider2]} margin={1} tooltips={[true, true]} connect step={1} pips={{ mode: 'steps' }} />
    </>
  )
}
