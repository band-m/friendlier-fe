export const getLogin = (email, password) => Promise.resolve([`email: ${email}`]);

export const getSignup = (username, email, password) => Promise.resolve([`email ${email}`]);
