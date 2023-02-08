import React from "react";

const ButtonSecondary = (props) => {
  const { href, hidey, text } = props;
  const hideyClasses = hidey ? "hidden lg:block" : "block";

  const classes =
    "p-4 px-8 text-brightRed bg-white font-bold rounded-full baseline hover:text-brightRedLight " +
    hideyClasses;

  return (
    <button href={href} className={classes}>
      {text}
    </button>
  );
};

export default ButtonSecondary;
