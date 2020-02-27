import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { myAction } from '../../data/actions/contact-detail-actions';
import { SET_LAST_CONTACTED_DATE } from '../../data/action-types/action-types';

export default function ConnectedButton(contactId){
  const dispatch = useDispatch();

  const addConnectionEvent = () => {
    dispatch(myAction(SET_LAST_CONTACTED_DATE, new Date()));
  }

  return (
    <button onClick={() => addConnectionEvent()}>Add connection event!</button>
  );
};

ConnectedButton.propTypes = {
  contactId: PropTypes.string.isRequired,
};
