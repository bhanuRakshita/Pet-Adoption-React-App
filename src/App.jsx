import React from 'react';
import ReactDOM from 'react-dom';
import Pet from "./Pet";

const App = () => {
    return (
      <div>
        <h1>"Adopt M!</h1>
        <Pet name="Mufasa" type="Dog" breed="Husky"/>
        <Pet name="Brownie" type="Dog" breed="Toy Poodle"/>
      </div>      
    )
  };

  const container = document.querySelector("#root");
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));