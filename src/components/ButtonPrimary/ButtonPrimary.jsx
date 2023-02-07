import React from "react";

const ButtonPrimary = (props) => {
  const { href, hidey, text } = props;
  const hideyClasses = hidey ? "hidden lg:block" : "block";

  const classes =
    "p-3 px-8 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight " +
    hideyClasses;

  return (
    <a href={href} className={classes}>
      {text}
    </a>
  );
};

export default ButtonPrimary;
