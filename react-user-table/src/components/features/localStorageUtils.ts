export const saveToLocalStorage = (users: unknown) => {
  try {
    const usersData = JSON.stringify(users);
    localStorage.setItem("users", usersData);
  } catch (error) {
    console.log(error);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const usersData = localStorage.getItem("users");

    if (usersData === null) {
      return [];
    }
    return JSON.parse(usersData);
  } catch (error) {
    console.log(error);
  }
};
