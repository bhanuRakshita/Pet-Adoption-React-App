import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchParams from './SearchParams';

const App = () => {
    return (
      <div>
        <h1> </h1> 
        {/* H1 cotent will come from css */}
        <SearchParams />
      </div>      
    )
  };

  const container = document.querySelector("#root");
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));