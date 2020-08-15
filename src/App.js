import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './App1.css';


function App() {
  const blogObject = {
    title: 'Blog Title 1',
    description: 'Lorem Ipsum Dolo Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
  }

  return (
    <div className="App">
      <div className="box1style">
        <h3> {blogObject.title}</h3>
        <p> {blogObject.description} </p>
      </div>

      <div className="box1style">
        <h3> {blogObject.title}</h3>
        <p> {blogObject.description} </p>
      </div>


      <div className="box1style">
        <h3> {blogObject.title}</h3>
        <p> {blogObject.description} </p>
      </div>

    </div>
  );


  //  Pure react code of above return statement is given below

  // React.createElement("div", {
  //   className: "App"
  // },
  //   React.createElement("div", null,
  //     React.createElement("h3", null, " ", blogObject.title),
  //     React.createElement("p", null, " ", blogObject.description, " ")),
  //   React.createElement("hr", null),
  //   React.createElement("div", null,
  //     React.createElement("h3", null, " ", blogObject.title),
  //     React.createElement("p", null, " ", blogObject.description, " ")),
  //   React.createElement("hr", null),
  //   React.createElement("div", null,
  //     React.createElement("h3", null, " ", blogObject.title),
  //     React.createElement("p", null, " ", blogObject.description, " ")),
  //   React.createElement("hr", null)));
}

export default App;
