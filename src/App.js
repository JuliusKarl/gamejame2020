import React from 'react';
import logo from './logo.svg';
import './App.css';
import Field from './field/Field';

function App() {
  return (
    <div className="App">
      <div className="background">
      </div>
      <Field className="playing-field"></Field>
    </div>
  );
}

export default App;
