// used to be required but not any more.. espesially when we use classes
// import React from 'react'
import Button from "./Button";

//destructre the props {} and just take whhat you need... without the messy props.something
const Header = ({ title }) => {
    const handelClick = () => {
        console.log("Clicked")
    }

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={handelClick}/>
    </header>
  );
};


// we can have a default props value if not passed down from the parent to the chiled
Header.defaultProps = {
  title: "Task Manager",
};

export default Header;
