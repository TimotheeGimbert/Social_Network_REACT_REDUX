import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLocalToken } from '../App';

const User = () => {
  const { id } = useParams();
  const [inputs, setInputs] = useState( { username: '', description: '', id: '' } );

  useEffect( () => {
    fetchProfile();
  }, []);

  const fetchProfile = () => {
    const url = `http://localhost:1337/users/${id}`;
    fetch(url, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${getLocalToken()}`,
        'Content-Type': 'application/json'
      }
    })
    .then( (response) => response.json() )
    .then( (response) => {
      console.log(response);
      setInputs(values => ( {...values, 'username': response.username, 'description': response.description, 'id': response.id } ))
    })
  };

  return (
    <div className='profile'>
      <h1>{inputs.username}</h1>
      <div>ID: {inputs.id}</div>
      <div>Description: {inputs.description}</div>
    </div>
  );
};

export default User;