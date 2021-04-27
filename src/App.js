import logo from "../src/assets/img/logo.png";

import "./App.css";
import movies from "./movies.json";

// Composants

// import Section from "./components/Section";

function App() {
  return (
    <div class="container">
      <img class="logo" src={logo} />
      {movies.map((elem, index) => {
        return (
          <div class="block">
            <h2>{elem.category}</h2>
            <div class="cat">
              {elem.images.map((image, index) => {
                return <img src={image}></img>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default App;
