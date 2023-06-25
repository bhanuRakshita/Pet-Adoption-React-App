import { Link, BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchParams from './SearchParams';
import Details from "./Details";

const App = () => {
    return (
      <BrowserRouter>
     
        <header>
          <Link to="/"></Link>  
        </header> 
        {/* H1/Header content will come from css */}
        <Routes>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/" element={<SearchParams/>}/>
        </Routes>

      </BrowserRouter>     
    )
  };

  const container = document.querySelector("#root");
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));