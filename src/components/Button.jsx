import React from "react";
import { Link } from "react-router-dom";


const Button = (props) => {

  return (
   <Link to='/Register'>
    <button onClick={props.onClick} className={props.className}>
      {props.label}
    </button>
   </Link>
   
  );
};

export default Button;
