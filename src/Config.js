export const apiEndPoint = () => {
  return "https://tickett-app-backend.herokuapp.com";
};

export const configHeader = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return config;
};
