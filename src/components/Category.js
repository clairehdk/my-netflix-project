import movies from "../movies.json";
import List from "./List";

const Category = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {movies.images.map((elem, index) => {
        return <List list={elem.images} />;
      })}
    </div>
  );
};

export default Category;
