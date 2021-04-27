import logo from "../src/assets/img/logo.png";

import "./App.css";
import movies from "./movies.json";

// Composants

import Section from "./components/Section";

function App() {
  return (
    <div class="container">
      <img class="logo" src={logo} />
      {movies.map((elem, index) => {
        return <Section category={elem.category} images={elem.images} />;
      })}
    </div>
  );
}
export default App;
