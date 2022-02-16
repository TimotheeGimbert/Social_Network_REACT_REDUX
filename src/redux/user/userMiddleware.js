const userAuthInput = { // TEMPORARY
  username: 'user1',
  email: 'user1@user.com',
  password: 'aZerty1234',
};

export const loginMiddleware = (inputs) => {
  const url = 'http://localhost:1337/auth/local';
  const method = 'post';
  console.log(inputs);
  const authInput = {
    identifier: userAuthInput.email,
    password: userAuthInput.password
  };
  return (
      fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(authInput)
    })
    .then( (response) => response.json() )
    .then( (json) => json.jwt )
  )
};