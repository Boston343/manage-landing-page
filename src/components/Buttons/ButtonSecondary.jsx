import React from "react";

const ButtonSecondary = (props) => {
  const { href, hidey, text } = props;
  const hideyClasses = hidey ? "hidden lg:block" : "block";

  const classes =
    "p-3 px-6 text-brightRed bg-white text-sm font-bold rounded-full baseline hover:text-brightRedLight " +
    hideyClasses;

  return (
    <button href={href} className={classes} aria-label={text}>
      {text}
    </button>
  );
};

export default ButtonSecondary;
