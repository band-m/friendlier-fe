export const selectUser = (state) => state.auth.user;
export const selectError = (state) => state.auth.error;
export const selectLoading = (state) => 
  state.auth.loginLoading || 
  state.auth.logoutLoading || 
  state.auth.signupLoading || 
  state.auth.updateUserLoading;
export const selectLoggedOut = (state) => state.auth.loggedOut;
