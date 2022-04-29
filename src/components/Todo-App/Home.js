import React from 'react';
import Todos from './Todos';

const todos = {
  id: 1,
  Name: 'Naeem islam',
  age: 20,
};

const Home = () => {
  return (
    <div>
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
