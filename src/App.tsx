import React from 'react';
import './App.css';
import { ExampleReact } from './Component/ExampleReact';
import { ExampleReactTwo } from './Component/ExampleReactTwo';
import { ExampleThree } from './Component/ExampleThree';
import { LeftNavBar } from './Component/LeftNavBar';
import { MainContent } from './Component/MainContent';
import { TopNabBar } from './Component/TopNabBar';




function App() {

  return (
    <div className="App" >
    
    <div className="top-nav-flex">
      <TopNabBar></TopNabBar>
    </div>








      {/* <ExampleThree></ExampleThree> */}
      {/* <ExampleReactTwo></ExampleReactTwo> */}
      {/* <ExampleReact></ExampleReact> */}

      {/* <div className="login-form">
        <Login></Login>
      </div> */}
      {/* <div className="side-nav-flex">
        <LeftNavBar></LeftNavBar>
       
      </div>

      <div className="main-content-container-flex">
      <MainContent></MainContent>
      </div>
      <div className="right-column-flex">

      </div> */}
    </div>
  );
}

export default App;
