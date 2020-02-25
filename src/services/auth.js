export const getLogin = (email, password) => {
  return fetch('/api/v1/auth/login', {
    method: 'POST',
    body: { email, password }
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const getSignup = (displayName, email, password) => {
  return fetch('/api/v1/auth/signup', {
    method: 'POST',
    body: { displayName, email, password }
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};
