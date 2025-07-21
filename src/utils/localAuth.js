const USERS_KEY = 'registered_users';

export const getRegisteredUsers = () => {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
};

export const saveUser = (newUser) => {
  const users = getRegisteredUsers();
  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const findUserByEmail = (email) => {
  const users = getRegisteredUsers();
  return users.find((user) => user.email === email);
};

export const validateUser = (email, password) => {
  const user = findUserByEmail(email);
  return user && user.password === password ? user : null;
};
