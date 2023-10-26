export const registerUser = async (username, email, password) => {
  // console.log(process.env.REACT_APP_BASE_URL);
  try {
    console.log("registerUser", username, email, password);
    const response = await fetch(`http://localhost:5001/users`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (username, password) => {
  try {
    console.log("loginUser", username, password);
    const response = await fetch(`http://localhost:5001/users/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    console.log("data", data);

    return data.user;
    // console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const findAllUsers = async (username) => {
  try {
    console.log();
    const response = await fetch(`http://localhost:5001/users`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
