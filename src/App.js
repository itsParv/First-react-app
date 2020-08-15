import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const blogObject = {
    title: 'Blog Title 1',
    description: 'Lorem Ipsum Dolo Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
  }

  return (
    <div className="App">
      <div>
        <h3> {blogObject.title}</h3>
        <p> {blogObject.description} </p>
      </div>
      <hr />

      <div>
        <h3> {blogObject.title}</h3>
        <p> {blogObject.description} </p>
      </div>
      <hr />

      <div>
        <h3> {blogObject.title}</h3>
        <p> {blogObject.description} </p>
      </div>
      <hr />

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
