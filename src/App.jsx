import React from 'react';
import ReactDOM from 'react-dom';
import Pet from "./Pet";

const muffu = {
    name: 'Mufasa',
    type: 'Dog',
    breed: 'Husky'
}

const brownie = {
    name: 'Brownie',
    type: 'Dog',
    breed: 'toy poodle'
}


const App = () => {
    return React.createElement(
      "div",
      {},[
        React.createElement("h1",{},"Adopt Me!"),
        React.createElement(Pet, muffu),
        React.createElement(Pet, brownie)
      ]
    )
  };

  const container = document.querySelector("#root");
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));