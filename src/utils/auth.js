// LocalStorage Keys
const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";
// Get All Users

export const getUsers = () => {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
};

// Save All Users

export const saveUsers = (users) => {
  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(users)
  );
};

// Register User

export const registerUser = (userData) => {

  const users = getUsers();

  const userExists = users.find(
    (user) => user.email === userData.email
  );

  if (userExists) {

    return {
      success: false,
      message: "Email already registered",
    };

  }

  users.push(userData);

  saveUsers(users);

  return {
    success: true,
    message: "Registration Successful",
  };

};

// Login User

export const loginUser = (email, password) => {

  const users = getUsers();

  const user = users.find(
    (item) =>
      item.email === email &&
      item.password === password
  );

  if (!user) {

    return {
      success: false,
      message: "Invalid Email or Password",
    };

  }

  localStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify(user)
  );

  return {
    success: true,
    user,
  };

};

// Current User

export const getCurrentUser = () => {

  return JSON.parse(
    localStorage.getItem(CURRENT_USER_KEY)
  );

};

// Logout

export const logoutUser = () => {

  localStorage.removeItem(CURRENT_USER_KEY);

};