import React from 'react';
import './App.css';
import AddTodoComponent from './components/AddTodoComponent';
import VisibleTodoListContainer from './containers/VisibleTodoListContainer';
import FooterComponent from './components/FooterComponent';

const App = () => (
  <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <main>
      <AddTodoComponent />
      <VisibleTodoListContainer />
      <FooterComponent /> 
    </main>
  </div>
); 

export default App;
