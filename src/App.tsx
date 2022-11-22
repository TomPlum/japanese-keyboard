import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-simple-keyboard/build/css/index.css';
import Keyboard from 'react-simple-keyboard';
import styles from "./App.module.scss";

function App() {
  return (
    <div className="App">
      <div className={styles.container}>
          <Keyboard />
      </div>
    </div>
  );
}

export default App;
