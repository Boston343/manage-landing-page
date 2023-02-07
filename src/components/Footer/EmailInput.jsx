import React from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary.jsx";

const EmailInput = () => {
  return (
    <form action="">
      <div className="flex space-x-3">
        <input
          type="email"
          placeholder="Updates in your inbox..."
          className="flex-1 pl-4 pr-8 py-4 rounded-full md:pr-16 focus:outline-none"
        />
        <ButtonPrimary href="#" text="GO" hidey={false} />
      </div>
    </form>
  );
};

export default EmailInput;
