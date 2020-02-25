import React, { useState, useEffect } from 'react';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
import add from 'date-fns/add';
import format from 'date-fns/format';
import differenceInDays from 'date-fns/differenceInCalendarDays';

export default function Slider(){
  const [slider1, setSlider1] = useState(10);
  const [slider2, setSlider2] = useState(20);
  const [num, setNum] = useState(2);
  const [numOfDays, setNumOfDays] = useState(14);
  const [deadlineUnit, setDeadlineUnit] = useState('weeks');
  const [notificationOption, setNotificationOption] = useState(1);
  const [deadline, setDeadline] = useState();
  const [deadlineObject, setDeadlineObject] = useState({ days: 14, months: 0 })
  const [yellowZone, setYellowZone] = useState();
  const [redZone, setRedZone] = useState();

  // When user moves a slider, set slider
  const update = (render, handle, value, un, percent) => {    
    if(handle === 0){
      setSlider1(Math.floor(value[0]))
    } else {
      setSlider2(Math.floor(value[1]))
    }
  }

  // When user inputs a number, change num and numOfDays
  const changeNumOfDaysInput = value => {
    setNum(value);
    switch(deadlineUnit){
      case 'days':
        return setNumOfDays(value);
      case 'weeks':
        return setNumOfDays(value * 7);
      case 'months':
        const monthDays = differenceInDays((add(new Date(), { months: value })), new Date());
        return setNumOfDays(monthDays);
    }
  }

  // When user selects a days/weeks/months radio, change deadlineUnit and numOfDays
  const changeNumOfDaysRadio = target => {
    setDeadlineUnit(target.id);
    switch(target.id){
      case 'days':
        return setNumOfDays(num);
      case 'weeks':
        return setNumOfDays(num * 7);
      case 'months':
        const monthDays = differenceInDays((add(new Date(), { months: num })), new Date());
        return setNumOfDays(monthDays);
    }
  }

  // When numOfDays changes, make new deadlineObject
  useEffect(() => {
    switch(deadlineUnit){
      case 'days':
        return setDeadlineObject({ days: num, months: 0 });
      case 'weeks':
        return setDeadlineObject({ days: num * 7, months: 0 });
      case 'months':
        return setDeadlineObject({ days: 0, months: num });
    };  
  }, [numOfDays])

  // When deadlineObject changes, make new deadline
  useEffect(() => {
    setDeadline(format(add(new Date(), deadlineObject), "PPPP"));
  }, [deadlineObject])

  // When notificationObject or numOfDays changes, change slider positions
  useEffect(() => {
    switch(notificationOption){
      case 1:
      setSlider1(Math.floor(numOfDays / 3));
      setSlider2(Math.floor((2 * numOfDays) / 3));
      return;
    case 2:
      setSlider1(Math.floor(numOfDays / 2));
      setSlider2(Math.floor((3 * numOfDays) / 4));
      return;
    case 3:
      setSlider1(Math.floor((3 * numOfDays) / 4));
      setSlider2(Math.floor((7 * numOfDays) / 8));
      return;
    }
  }, [notificationOption, numOfDays])

  // When slider positions change, change yellowZone and redZone
  useEffect(() => {
    setYellowZone(format(add(new Date(), { days: slider1 }), "PPPP"));
    setRedZone(format(add(new Date(), { days: slider2 }), "PPPP"))
  }, [slider1, slider2])

  useEffect(() => {
    const connectors = document.querySelectorAll('.noUi-connect');
    const classes = ['c-1-color', 'c-2-color', 'c-3-color'];
    for(let i = 0; i < connectors.length; i++){
      connectors[i].classList.add(classes[i]);
    }
    
  }, [])

  return (
    <>
      <p>How often do you want to be in contact with name?</p>
      <p>Every</p>
      <input type='number' min={1} value={num} onChange={({target}) => changeNumOfDaysInput(+target.value)} /><br/>
      <label htmlFor='days'>Days</label>
      <input type='radio' id='days' name='deadlineUnit' checked={deadlineUnit === 'days'} onChange={({target}) => changeNumOfDaysRadio(target)}/>
      <label htmlFor='weeks'>Weeks</label>
      <input type='radio' id='weeks' name='deadlineUnit' checked={deadlineUnit === 'weeks'} onChange={({target}) => changeNumOfDaysRadio(target)}/>
      <label htmlFor='months'>Months</label>
      <input type='radio' id='months' name='deadlineUnit' checked={deadlineUnit === 'months'} onChange={({target}) => changeNumOfDaysRadio(target)}/><br/><br/><br/>

      <p>Choose your notification range for name:</p>
      <label htmlFor={1}>1</label>
      <input type='radio' name='notificationOptions' id={1} checked={notificationOption === 1} onChange={({target}) => setNotificationOption(+target.id)} />
      <label htmlFor={2}>2</label>
      <input type='radio' name='notificationOptions' id={2} checked={notificationOption === 2} onChange={({target}) => setNotificationOption(+target.id)} />
      <label htmlFor={3}>3</label>
      <input type='radio' name='notificationOptions' id={3} checked={notificationOption === 3} onChange={({target}) => setNotificationOption(+target.id)} /><br/><br/><br/>

      <p>Your connection deadline with name will be on {deadline}</p>
      <p>Your yellow zone will begin on {yellowZone}</p>
      <p>Your red zone will begin on {redZone}</p>
      <Nouislider style={{ margin: '25px' }} onSlide={update} range={{ min: 0, max: numOfDays }} start={[slider1, slider2]} margin={1} tooltips={[true, true]} connect={[true, true, true]} step={1} pips={{ mode: 'steps', density: 4 }} />
    </>
  )
}
