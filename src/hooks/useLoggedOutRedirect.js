import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedOut } from '../data/selectors/auth-selector';

export default () => {
  const loggedOut = useSelector(selectLoggedOut);
  const history = useHistory();
  useEffect(() => {
    if(loggedOut) {
      history.push('/about');
    }
  }, [loggedOut]);
};
