import React from 'react';
import './styles.css';
import { Header } from './Components/headers/Headers';
import {LaunchList} from './LaunchList/LaunchList';
function App() {
  return (
    <div className="App">
       <Header/>
      <LaunchList/>
     
      </div>
  );
}

export default App;
