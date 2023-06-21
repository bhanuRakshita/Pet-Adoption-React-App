import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchParams from './SearchParamas';

const App = () => {
    return (
      <div>
        <h1> Adopt M! </h1>
        <SearchParams />
      </div>      
    )
  };

  const container = document.querySelector("#root");
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));