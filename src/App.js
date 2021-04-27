import "./App.css";
import movies from "./movies.json";

// Composants

// import Section from "./components/Section";

function App() {
  return (
    <div>
      {movies.map((elem, index) => {
        return (
          <div>
            <h2>{elem.category}</h2>
            <img src={elem.images}></img>
          </div>
        );
      })}
    </div>
  );
}
export default App;
