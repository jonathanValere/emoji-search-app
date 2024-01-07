import "./App.css";
import Footer from "./assets/components/Footer";
import Lines from "./assets/components/Lines";
import Search from "./assets/components/Search";
import { useState } from "react";

function App() {
  // Création des States --------------
  const [search, setSearch] = useState("");
  const [copy, setCopy] = useState("");
  //--------------------

  // Gestion des évènements ----
  const handleSearch = (event) => {
    const value = event.target.value;
    return setSearch(value);
  };

  const handleCopy = (event) => {
    return console.log(event);
  };
  //------------------

  return (
    <>
      <Search onChange={handleSearch} />
      <Lines value={search} onClick={handleCopy} />
      <Footer />
    </>
  );
}

export default App;
