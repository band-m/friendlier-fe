import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { myAction } from '../../data/actions/contact-detail-actions';
import { SET_LAST_CONTACTED_DATE, SET_YELLOW_ZONE, SET_RED_ZONE, SET_DEADLINE_DATE } from '../../data/action-types/action-types';
import add from 'date-fns/add';

export default function ConnectedButton(slider1, slider2, deadlineObject){
  const dispatch = useDispatch();

  const addConnectionEvent = () => {
    dispatch(myAction(SET_LAST_CONTACTED_DATE, new Date()));
    dispatch(myAction(SET_YELLOW_ZONE, add(new Date(), { days: slider1 })));
    dispatch(myAction(SET_RED_ZONE, add(new Date(), { days: slider2 })));
    dispatch(myAction(SET_DEADLINE_DATE, add(new Date(), deadlineObject)));
  }

  return (
    <button onClick={() => addConnectionEvent()}>Add connection event!</button>
  );
};

ConnectedButton.propTypes = {
  contactId: PropTypes.string.isRequired,
};
