import React from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary.jsx";

const EmailInput = () => {
  const [email, setEmail] = React.useState("");

  function handleChange(event) {
    setEmail(event.target.value);
  }

  function handleFormSubmit(event) {
    if (email === "") {
      document.getElementById("userMessage").innerHTML =
        "Please insert a valid email";
    } else {
      document.getElementById("userMessage").innerHTML = "Email Sumbitted!";
      setEmail("");
    }

    // prevent form submission from reloading page
    event.preventDefault();
  }

  function invalidForm(event) {
    console.log("invalid email");
    document.getElementById("userMessage").innerHTML =
      "Please insert a valid email";

    // prevent default browser tooltips as I am displaying my own message
    event.preventDefault();
  }

  return (
    <form action="" onSubmit={handleFormSubmit}>
      <div className="flex space-x-3">
        <input
          onChange={handleChange}
          value={email}
          type="email"
          onInvalid={invalidForm}
          placeholder="Updates in your inbox..."
          className="flex-1 pl-4 pr-8 py-4 rounded-full md:pr-16 border border-transparent focus:outline-none focus:border-brightRed"
        />
        <ButtonPrimary href="#" text="GO" hidey={false} type="submit" />
      </div>
      <em>
        <p
          id="userMessage"
          className="text-brightRed text-sm font-light pl-4 pt-2"
        ></p>
      </em>
    </form>
  );
};

export default EmailInput;
