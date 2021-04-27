const Section = ({ category, images }) => {
  return (
    <div className="container">
      <div class="block">
        <h2>{category}</h2>
        <div class="cat">
          {images.map((image, index) => {
            return <img src={image}></img>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Section;
