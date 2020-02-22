export const getContacts = userId => {
  return fetch('/api/v1/contacts')
    .then(res => Promise.all[res.ok, res.json()])
    .then(([ok, data]) => {
      if(!ok) throw data;
      return data;
    });
};
