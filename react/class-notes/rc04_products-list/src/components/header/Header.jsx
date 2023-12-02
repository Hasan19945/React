// const Header = (props) => {
//   console.log(props);
//   const { categories, text } = props;
//   return <h1>Header</h1>;
// };

// export default Header;

import HeaderStyles from "./Header.module.scss";

const Header = ({ categories, text }) => {
  console.log(text);
  return (
    <div className={HeaderStyles.header}>
      <h1>{text}</h1>
      <div className={HeaderStyles.btns}>
        {categories.map((item) => (
          <button key={item}>{item}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
