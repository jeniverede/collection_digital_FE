import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// Components
import Home from "./components/Home";
import Search from "./components/Search";
import Collection from "./components/Collection";
import CollectionView from "./components/CollectionView";
import CollItemPage from "./components/CollItemPage";
import SearchResultsItem from "./components/SearchResultsItem";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

import Error from "./components/Error";

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Search page */}
        <Route path="/search" element={<Search data={data} setData={setData} />} />

        {/* Collections */}
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/:id" element={<CollectionView />} />

        {/* Individual collection item page */}
        <Route path="/item/:id" element={<CollItemPage />} />

        {/*
  Login/Signup
  <Route path="/user/login" element={<Login />} />
  <Route path="/user/signup" element={<Signup />} />
*/}


        {/* Search result item page */}
        {data.length > 0 && (
          <Route path="/itempage/:systemNumber" element={<SearchResultsItem data={data} />} />
        )}

        {/* Other pages */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Fallback */}
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;




