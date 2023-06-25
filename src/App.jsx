import { Link, BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from './SearchParams';
import Details from "./Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    },
  },
});

const App = () => {
    return (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/"></Link>  
        </header> 
        {/* H1/Header content will come from css */}
        <Routes>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/" element={<SearchParams/>}/>
        </Routes>
      </QueryClientProvider>
      </BrowserRouter>     
    )
  };

  const container = document.querySelector("#root");
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));