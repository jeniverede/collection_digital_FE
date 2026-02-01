import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import CollectionsContextProvider from "./context/collectionsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <CollectionsContextProvider>
      <App />
    </CollectionsContextProvider>
  </Router>
);

