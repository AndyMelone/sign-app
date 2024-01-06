import { useState } from "react";
import Input from "./components/Input";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [fisrtName, setFisrtName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorFisrtname, setShowErrorFisrtname] = useState(false);
  const [showErrorLastName, setShowErrorLastName] = useState(false);
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const [showErrorPassword, setShowErrorPassword] = useState(false);

  // funnction pour conntroller les input
  function validatePassword(password) {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    return strongRegex.test(password);
  }

  function validateEmail(email) {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }
  function handleChangeFisrtName(e) {
    setFisrtName(e.target.value);
  }
  function handleChangeLastname(e) {
    setLastName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function reset() {
    setEmail("");
    setFisrtName("");
    setLastName("");
    setPassword("");
  }

  // validation de formulaire
  function handleSubmit(e) {
    e.preventDefault();
    let isError = false;

    setShowErrorEmail(false);
    setShowErrorFisrtname(false);
    setShowErrorPassword(false);
    setShowErrorLastName(false);

    if (fisrtName.length < 1) {
      setShowErrorFisrtname(true);
      setFisrtName("");
      isError = true;
    }
    if (lastname.length < 1) {
      setShowErrorLastName(true);
      setLastName("");
      isError = true;
    }
    if (!validatePassword(password)) {
      setShowErrorPassword(true);
      isError = true;
    }
    if (!validateEmail(email)) {
      setShowErrorEmail(true);
      isError = true;
    }

    if (isError === false) {
      localStorage.setItem("fisrtName", fisrtName);
      localStorage.setItem("lastname", lastname);
      localStorage.setItem("email", email);
      toast.success("Incription effectuer avec succès");
      reset();
    }
  }

  return (
    <body className="container">
      <Toaster />

      <div className="left">
        <h1> Learn to code by watching others</h1>
        <br />
        <br />
        <p
          style={{
            fontSize: 18,
          }}
        >
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>

      {/* right */}
      <div
        className="rigth"
        style={{
          textAlign: "center",
        }}
      >
        <div
          style={{
            borderRadius: "10px",
            padding: "14px 0",
            fontSize: 16,
            borderColor: "gray",
            backgroundColor: "hsl(248, 32%, 49%)",
            border: "none",
            color: "#FFFFFF",

            margin: "20px 0",
            boxShadow: "inset -3px -5px #77507C",
          }}
        >
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </div>

        <form onSubmit={handleSubmit} className="form">
          <Input
            placeholder="First Name "
            value={fisrtName}
            handeChange={handleChangeFisrtName}
            errorMessage="First Name cannot be empty"
            showError={showErrorFisrtname}
          />
          <Input
            placeholder="Last Name"
            value={lastname}
            handeChange={handleChangeLastname}
            errorMessage="Last Name cannot be empty"
            showError={showErrorLastName}
          />
          <Input
            placeholder="email@exempke/com"
            value={email}
            errorMessage="Looks like this is not an email"
            handeChange={handleChangeEmail}
            showError={showErrorEmail}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            errorMessage="Password cannot be empty"
            handeChange={handleChangePassword}
            showError={showErrorPassword}
          />
          <button className="button" type="submite">
            Claim your free trial
          </button>
          <p
            style={{
              fontSize: 11,
              textAlign: "center",
              color: "gray",
            }}
          >
            By clicking the button, you are agreeing to our
            <strong
              style={{
                color: "hsl(0, 100%, 74%)",
              }}
            >
              Terms and Services
            </strong>
          </p>
        </form>
      </div>
    </body>
  );
}

export default App;
