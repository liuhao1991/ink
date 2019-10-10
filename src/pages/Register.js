import React from 'react';
import axios from 'axios';

export default () => {

  function profile() {
    axios.get('/api/profile').then(res => {
      console.log(res.data);
    });
  }

  return (
    <div>
      <button onClick={profile}>
        register page
      </button>
    </div>
  )
}