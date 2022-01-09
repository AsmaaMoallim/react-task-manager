// used to be required but not any more.. espesially when we use classes
// import React from 'react'
import Button from "./Button";
import { useLocation } from "react-router-dom";

//destructure the props {} and just take whhat you need... without the messy props.something
const Header = ({ title, onAdd, showAddBtn }) => {
  const location = useLocation();


  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
      !showAddBtn ? (
        <Button color="green" text="Add" onClick={onAdd} />
      ) : (
        <Button color="red" text="close" onClick={onAdd} />
      ))}

      {/* anotehr way */}
      {/* <Button
        color={showAddBtn ? "red" : "green"}
        text={showAddBtn ? "Close" : "Add"}
        onClick={onAdd}
      /> */}
    </header>
  );
};


// we can have a default props value if not passed down from the parent to the chiled
Header.defaultProps = {
  title: "Task Manager",
};

export default Header;
