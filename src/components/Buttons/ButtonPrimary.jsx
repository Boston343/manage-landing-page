import React from "react";

const ButtonPrimary = (props) => {
  const { href, hidey, text, type } = props;
  const hideyClasses = hidey ? "hidden lg:block" : "block";

  const classes =
    "p-4 px-8 text-white bg-brightRed font-bold rounded-full baseline hover:bg-brightRedLight " +
    hideyClasses;

  return (
    <button href={href} className={classes} type={type}>
      {text}
    </button>
  );
};

export default ButtonPrimary;
