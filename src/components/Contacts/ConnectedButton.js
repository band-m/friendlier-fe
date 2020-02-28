import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { myAction, editContactDetails } from '../../data/actions/contact-detail-actions';
import { SET_LAST_CONTACTED_DATE, SET_YELLOW_ZONE, SET_RED_ZONE, SET_DEADLINE_DATE, SET_CONTACT_DETAILS } from '../../data/action-types/action-types';
import add from 'date-fns/add';
import { useHistory } from 'react-router-dom';
import { selectContactDetails } from '../../data/selectors/contact-detail-selectors';

export default function ConnectedButton({ slider1, slider2, deadlineObject, id }){
  const contact = useSelector(selectContactDetails);
  
  const history = useHistory();
  
  const dispatch = useDispatch();

  const addConnectionEvent = () => {
    dispatch(myAction(SET_LAST_CONTACTED_DATE, new Date()));
    dispatch(myAction(SET_YELLOW_ZONE, add(new Date(), { days: slider1 })));
    dispatch(myAction(SET_RED_ZONE, add(new Date(), { days: slider2 })));
    dispatch(myAction(SET_DEADLINE_DATE, add(new Date(), deadlineObject)));
    sendUpdatedContact();
  }

  const sendUpdatedContact = () => {
    dispatch(editContactDetails(id, contact));
    history.push('/contacts');
  };

  return (
    <button onClick={() => addConnectionEvent()}>Add connection event!</button>
  );
};

ConnectedButton.propTypes = {
  slider1: PropTypes.number.isRequired,
  slider2: PropTypes.number.isRequired,
  deadlineObject: PropTypes.object.isRequired
};
