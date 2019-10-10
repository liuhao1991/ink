import React, { useEffect } from 'react';
import axios from 'axios';

function getQueryVariable(variable){
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (let i = 0;i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}

export default function Oauth() {
  useEffect(() => {
    const code = getQueryVariable('code');
    axios.get('http://localhost:8080/oauth?code=' + code)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);
  
  
  
  return (
    <div>
      Oauth Page
    </div>
  )
}