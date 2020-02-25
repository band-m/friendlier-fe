export default (path, method = 'GET', body) => {
  // eslint-disable-next-line
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: body && JSON.stringify(body)
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};
