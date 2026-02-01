// src/context/collectionsContext.jsx
import { useState, useEffect, createContext } from "react";
import collectionsData from "../data/collections.json"; // adjust path if needed

export const CollectionsContext = createContext();

export default function CollectionsContextProvider(props) {
  // Initialize collections state from JSON
  const [collections, setCollections] = useState([]);
  const [flag, setFlag] = useState(false); // used to force re-renders if needed

  useEffect(() => {
    // Simulate fetching data (from local JSON)
    setCollections(collectionsData);
  }, [flag]); // flag can trigger reloads if needed

  return (
    <CollectionsContext.Provider value={{ collections, setFlag, flag }}>
      {props.children}
    </CollectionsContext.Provider>
  );
}



