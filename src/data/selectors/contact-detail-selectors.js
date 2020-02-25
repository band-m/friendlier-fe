// Nick's selectors for the contact datail actions

export const selectContactDetails = state => state.contactDetail;
export const selectFormData = state => {
  const formData = new FormData();
  for(let [key] of Object.entries(state.contactDetail)){
    formData.append(key, formData[key]);
  }
  return formData;
};

