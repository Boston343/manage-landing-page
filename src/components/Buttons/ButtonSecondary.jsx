import React from "react";

const ButtonSecondary = (props) => {
  const { href, hidey, text } = props;
  const hideyClasses = hidey ? "hidden lg:block" : "block";

  const classes =
    "p-3 px-8 text-brightRed bg-white font-bold rounded-full baseline hover:text-brightRedLight " +
    hideyClasses;

  return (
    <a href={href} className={classes}>
      {text}
    </a>
  );
};

export default ButtonSecondary;
