import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './App1.css';


function App() {
  const blogArr = [
    {
      id: 1,
      title: 'Blog Title 1',
      description: 'Lorem Ipsum Dolo Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
    },
    {
      id: 2,
      title: 'Blog Title 2',
      description: 'Lorem Ipsum Dolo Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
    },
    {
      id: 3,
      title: 'Blog Title 3',
      description: 'Lorem Ipsum Dolo Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
    }
  ]

  const blogCards = blogArr.map((item) => {
    console.log(item);

    return (
      <div className="box1style" key={item.id} >
        <h3>{item.title} </h3>
        <p> {item.description} </p>
      </div>
    )

  })

  return (
    <div className="App">
      {blogCards}

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
