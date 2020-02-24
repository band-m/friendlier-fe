const add = require('date-fns/add');
const differenceInDays = require('date-fns/differenceInCalendarDays');
const isBefore = require('date-fns/isBefore');
const isAfter = require('date-fns/isAfter');

// on creating contact or connecting with contact
export const setSliderRange = (deadlineObject, notificationOption) => {
  // The day they must connect by before becoming 'overdue'; type: Date
  const deadline = add(new Date(), deadlineObject);
  // The number of days between today and the deadline; type: Number
  const numOfDays = differenceInDays(deadline, new Date());

  let yellowStartSlider;
  let redStartSlider;
  switch(notificationOption){
    case 1:
      yellowStartSlider = numOfDays / 3;
      redStartSlider = (2 * numOfDays) / 3;
      return;
    case 2:
      yellowStartSlider = numOfDays / 2;
      redStartSlider = (3 * numOfDays) / 4;
      return;
    case 3:
      yellowStartSlider = (3 * numOfDays) / 4
      redStartSlider = (7 * numOfDays) / 8;
      return;
  }

  const yellowZone = add(new Date(), { days: yellowStartSlider }); //type: Date
  const redZone = add(new Date(), { days: redStartSlider }); // type: Date

  return { deadline, numOfDays, yellowStartSlider, redStartSlider, yellowZone, redZone };
};

export const getCurrentZone = (yellowZone, redZone, deadline) => {
  return isBefore(new Date(), yellowZone) ? 'green' :
    isAfter(new Date(), yellowZone) && isBefore(new Date(), redZone) ? 'yellow' :
    isAfter(new Date(), redZone) && isBefore(new Date(), deadline) ? 'red' :
    isAfter(new Date(), deadline) ? 'overdue' : null;
};
