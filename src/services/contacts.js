export const getContacts = userId => {
  return fetch('/api/v1/contacts')
    .then(res => Promise.all[res.ok, res.json()])
    .then(([ok, data]) => {
      if(!ok) throw data;
      return data;
    });
};

export const getContactDetails = contactId => {
  return fetch(`/api/v1/contacts/${contactId}`)
    .then(res => Promise.all[res.ok, res.json()])
    .then(([ok, data]) => {
      if(!ok) throw data;
      return data;
    });
};

export const updateContactDetails = (contactId, body) => {
  return fetch(`/api/v1/contacts/${contactId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => Promise.all[res.ok, res.json()])
    .then(([ok, data]) => {
      if(!ok) throw data;
      return data;
    });
};

export const deleteContactDetails = contactId => {
  return fetch(`/api/v1/contacts/${contactId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => Promise.all[res.ok, res.json()])
    .then(([ok, data]) => {
      if(!ok) throw data;
      return data;
    });
};
