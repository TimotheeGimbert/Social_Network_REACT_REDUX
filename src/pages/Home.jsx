import React, { useState, useEffect } from 'react'
import useFetchPrivate from '../customHooks/useFetchPrivate';
import useFetchPosts from '../customHooks/useFetchPosts';
import { useSelector } from 'react-redux';
import { checkAuth } from '../App';
import Post from '../components/Post';
import { Link } from 'react-router-dom';


const Home = () => {
  const [ userInputs, setUserInputs ] = useState('');
  const { doFetchPrivate } = useFetchPrivate();
  const { doFetchPosts } = useFetchPosts();
  const id = useSelector(state => state.id);
  const [ messageList, setMessageList ] = useState( [] );
  

  useEffect(() => {
    fetchMessages();
  }, []);

  

  useEffect(() => {
    console.log('messagelist',messageList)
  }, [messageList]);

  const fetchMessages = async () => {
    const ressource = 'posts';
    const method = 'get';
    const response = await doFetchPosts(ressource, method);
    console.log('fetchMessages response: ', response);
    setMessageList(messageList => response);
    ;
  }

  const handleChange = (event) => {
    const text = event.target.value;
    setUserInputs(text);
  }

  const doPublishPost = async () => {
    console.log('id,',id);
    const ressource = 'posts';
    const method = 'post';
    const postData = {
      text: userInputs,
      user: id
    }
    const response = await doFetchPrivate(ressource, method, postData);
    console.log(response);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await doPublishPost();
    fetchMessages();
  }

  return (
    <div className='Home'>
      <h1>Home</h1>
      <p>
        Welcome on Not Social Network. This website is a training 
        to Redux and React. We use auth and routing to create a 
        small social media website.
      </p>

      { !checkAuth() &&
        <button>
          <Link to="/register">Register</Link>
        </button>
      }
      
      { checkAuth() && 
        <>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type='text'
                name='message'
                onChange={handleChange}
                value={userInputs.message}
                />
            </label>
              <button type='submit'>Post your message</button>
          </form>

          <div className='posts'>
            {
              messageList.map( (post, index) => <Post post={post} key={index} />)
            }
          </div>
        </> 
      }
    </div>
  )
}

export default Home;