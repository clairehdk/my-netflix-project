import movies from "../movies.json";
import Category from "./Category";
console.log(movies);

const Section = (props) => {
  return (
    <div className="container">
      {movies.map((elem, index) => {
        return <Category title={elem.category} />;
      })}
    </div>
  );
};

export default Section;
