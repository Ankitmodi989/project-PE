
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Api = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(res => res.json())
  //     .then(data => setUsers(data));
  // }, []);
  

  return (
    <>
      {users.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </>
  );
};

export default Api;
