import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // Labels consts
  const firstName = 'Lucifer';
  const lastName = 'Morningstar';
  const age = 32;
  const job = 'Anonymous';

  // Input consts
  const inputPlaceholde = "Enter Your Details";

  // Objects

  const mObj = {
    name: "Luctifer",
    age: 32,
    job: 'Anonymous'
  }

  // Arrays
  const mArr = [1, 2, 3, 4, 5];

  // tags with const
  const detailsInputBox = <input placeholder={inputPlaceholde} autoComplete />

  // functions
  const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

  return (
    <div className="App">

      <h3> Full Name: {`${firstName} ${lastName}`} </h3>
      <h3> Full Name: {getFullName(firstName, lastName)} </h3>
      <h3>Full Name : {mObj.name} </h3>
      <p> Age : {age} </p>
      <p> Job : {job}</p>

      {detailsInputBox}

      {mArr[0]}

      {
        mArr[0] > 0 ? "True" : "False"
      }

    </div>
  );
}

export default App;
