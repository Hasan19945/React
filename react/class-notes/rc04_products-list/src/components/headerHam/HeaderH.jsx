import "./HeaderH.scss";

const HeaderH = ({ categories }) => {
  return (
    <div className="header">
      <h1>Products List</h1>
      <input type="checkbox" className="toggler" name="icons" id="" />
      <label htmlFor="icons" className="icon">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="btns">
        {categories.map((item) => (
          <button key={item}>{item.toUpperCase()}</button>
        ))}
      </div>
    </div>
  );
};

export default HeaderH;
