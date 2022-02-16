const userAuthInput = { // TEMPORARY
  username: 'user1',
  email: 'user1@user.com',
  password: 'aZerty1234',
};

export const loginMiddleware = () => {
  const url = 'http://localhost:1337/auth/local';
  const method = 'post';
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