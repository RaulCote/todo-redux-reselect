import React from 'react';
import './App.css';
import VisibleTodoListContainer from './containers/VisibleTodoListContainer';

const App = () => (
  <div>
    <main>
      <VisibleTodoListContainer listId={'1'} />
      <VisibleTodoListContainer listId={'2'} />
      <VisibleTodoListContainer listId={'3'} />
    </main>
  </div>
); 

export default App;
