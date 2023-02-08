import React from "react";

const ButtonPrimary = (props) => {
  const { href, hidey, text, type } = props;
  const hideyClasses = hidey ? "hidden lg:block" : "block";

  const classes =
    "p-3 px-6 text-white bg-brightRed text-sm font-bold rounded-full baseline hover:bg-brightRedLight " +
    hideyClasses;

  return (
    <button href={href} className={classes} type={type} aria-label={text}>
      {text}
    </button>
  );
};

export default ButtonPrimary;
