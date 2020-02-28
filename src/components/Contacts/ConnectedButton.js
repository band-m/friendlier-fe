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
    const updatedContact = {
      ...contact,
      yellowZoneStartDate: add(new Date(), { days: slider1 }),
      redZoneStartDate: add(new Date(), { days: slider2 }),
      deadlineDate: add(new Date(), deadlineObject),
      lastContactedDate: new Date(),
      connHistory: [ ...contact.connHistory, new Date() ]
    }
    dispatch(editContactDetails(id, updatedContact));
    history.push('/contacts');
  }

  return (
    <button onClick={() => addConnectionEvent()}>Add connection event!</button>
  );
};

ConnectedButton.propTypes = {
  slider1: PropTypes.number.isRequired,
  slider2: PropTypes.number.isRequired,
  deadlineObject: PropTypes.object.isRequired
};
