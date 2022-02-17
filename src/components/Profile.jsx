import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { edit } from '../redux/user/userActions';


const Profile = () => {
  const user = useSelector(state => state);
  const [inputs, setInputs] = useState( { username: '', description: ''} );
  const dispatch = useDispatch();

  useEffect( () => {
    fetchProfile();
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ( {...values, [name]: value} ))
  }

  const fetchProfile = () => {
    const url = 'http://localhost:1337/users/me';
    fetch(url, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      }
    })
    .then( (response) => response.json() )
    .then( (response) => {
      console.log(response);
      dispatch(edit(response))
    })
  }

  const handleEdition = (event) => {
    event.preventDefault();
    const url = 'http://localhost:1337/users/me';
    fetch(url, {
      method: 'put',
      headers: {
        'Authorization': `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    .then( (response) => response.json() )
    .then( (response) => {
      console.log(response);
      dispatch(edit(response)) 
    });
  }

  return (
    <>
      <h1>Profile</h1>
      <div>ID: {user.id}</div>
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
      <div>Description: {user.description}</div>

      <div>Edit your profile</div>
      <form onSubmit={handleEdition}>
        <label>New Username :
          <input 
            type='text' 
            name='username'
            onChange={handleChange}
            value={inputs.username}
          />
        </label>
        <label>Enter a description :
          <input 
            type='text' 
            name='description'
            onChange={handleChange}
            value={inputs.description}
          />
        </label>
        <button type='submit'>Submit modificaitons</button>
      </form>

      <button onClick={fetchProfile}>Fetch profile in console</button>
    </>
  )
}

export default Profile;