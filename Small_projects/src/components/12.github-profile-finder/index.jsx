import React, { useEffect, useState } from 'react'
import './styles.css'
import User from './user';

const GithubProfileFinder = () => {
  const [username, setUsername] = useState('smmajnar123');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function hanldeClick() {

  }

  async function fetchGithubDetails() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data) {
      setUserData(data);
      setLoading(false);
    }
    console.log(data);
  }
  useEffect(() => {
    fetchGithubDetails();
  }, [])

  if (loading) {
    <h1>Loading please wait</h1>
  }
  return (
    <div className='github-profile-container'>
      <div className='input-wrapper' >
        <input type="text"
          placeholder='enter the github username'
          name='search-by-username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={hanldeClick} >
          search
        </button>
      </div>
      {
        userData !== null ? <User user={userData} /> : null
      }
    </div>
  )
}

export default GithubProfileFinder
