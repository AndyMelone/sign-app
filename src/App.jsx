import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [fisrtName, setFisrtName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  function handleSubmit(e){
    e.preventDefault()
    if(!(fisrtName && lastname && email && password) || (fisrtName.length < 4 || lastname.length < 4 || email.length < 10  || password.length <4)) return alert("erre");
    alert('ok')
    setTimeout(()=>{alert("valide")},1000)

  }
  console.log('render');

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "50px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 400,
          margin: 50,
          color: "#FFFFFF",
        }}
      >
        <h1
          style={{
            fontSize: 54,
          }}
        >
          {" "}
          Learn to code by watching others
        </h1>
        <br />
        <br />
        <p
          style={{
            fontSize: 16,
          }}
        >
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <div
          style={{
            borderRadius: 5,
            padding: "10px 0",
            fontSize: 16,
            borderColor: "gray",
            backgroundColor: "hsl(248, 32%, 49%)",
            border: "none",
            color: "#FFFFFF",
            zIndex: 100,
            margin: "20px 0",
          }}
        >
          {" "}
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </div>
        <form
        onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 15,
            backgroundColor: "#FFFFFF",
            padding: 30,
            borderRadius: 5,
            zIndex: 10,
          }}
        >
          <Input
            placeholder="First Name "
            value={fisrtName}
            handeChange={handleChangeFisrtName}
          />
          <Input
            placeholder="Last Name"
            value={lastname}
            handeChange={handleChangeLastname}
          />
          <Input
            placeholder="Email Address"
            value={email}
            handeChange={handleChangeEmail}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            handeChange={handleChangePassword}
          />

          <button
            type="submite"
            style={{
              borderRadius: 5,
              padding: "15px 0",
              fontSize: 16,
              borderColor: "gray",
              backgroundColor: "hsl(154, 59%, 51%)",
              border: "none",
              color: "#FFFFFF",
            }}
          >
            Claim your free trial{" "}
          </button>
          <p
            style={{
              fontSize: 11,
              textAlign: "center",
            }}
          >
            By clicking the button, you are agreeing to our{" "}
            <span
              style={{
                color: "hsl(0, 100%, 74%)",
              }}
            >
              Terms and Services
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
