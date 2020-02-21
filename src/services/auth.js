export const getLogin = (email, password) => {
  return fetch('/api/v1/auth/login')
    .send(email, password)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const getSignup = (username, email, password) => {
  return fetch('/api/v1/auth/signup')
    .send(username, email, password)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};
