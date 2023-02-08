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
      setTimeout(() => {
        document.getElementById("userMessage").innerHTML = "";
      }, 3000);
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
          className="flex-1 pl-3 pr-6 py-3 rounded-full text-sm border border-transparent md:pr-16 focus:outline-none focus:border-brightRed"
        />
        <ButtonPrimary href="#" text="Go" hidey={false} type="submit" />
      </div>
      <em>
        <p
          id="userMessage"
          className="text-brightRed text-sm font-light pl-3 pt-2"
        ></p>
      </em>
    </form>
  );
};

export default EmailInput;
