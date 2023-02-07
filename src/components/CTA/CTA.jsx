import React from "react";
import ButtonSecondary from "../Buttons/ButtonSecondary";

const CTA = () => {
  return (
    <div className="bg-brightRed mt-16 md:mt-36">
      <div className="container flex flex-col mx-auto px-4 py-16 md:flex-row">
        <h2 className="text-white text-4xl leading-normal max-w-md mx-auto font-bold text-center md:ml-0 md:text-left md:text-5xl md:leading-tight">
          Simplify how your team works today.
        </h2>
        <div className="flex justify-center items-center mt-8 my-auto md:my-auto">
          <ButtonSecondary href="" hidey={false} text="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
