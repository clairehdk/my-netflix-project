import "./App.css";
import movies from "./movies.json";

// Composants

import Section from "./components/Section";
function App() {
  return (
    <div>
      {movies.map((elem, index) => {
        {
          elem.images.map((img, index) => {
            return <Section title={elem.category} image={img} />;
          });
        }
      })}
    </div>
  );
}

export default App;
