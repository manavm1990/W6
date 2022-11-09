const URL = "https://api.github.com/users?per_page=5";

// async-await is syntactic sugar for 'then' keyword
export const getUsers = async () => {
  const response = await fetch(URL);

  // If we mark the function as async, the return value will be wrapped in a Promise
  return response.json();
};
