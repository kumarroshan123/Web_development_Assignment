import { useRef, useState } from "react";

let DynamicForms = () => {
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const [emailErrors, setEmailErrors] = useState([]);
  const [passErrors, setPassErrors] = useState([]);

  function checkemail() {
    let arr = [];
    if (emailref.current.value.length < 6) {
      arr.push("Enter the length more than 5");
    }
    if (
      !(
        emailref.current.value.includes("@") &&
        emailref.current.value.includes(".com")
      )
    ) {
      arr.push("Enter the correct Mail Format");
    }
    setEmailErrors(arr);
  }

  function checkpassword() {
    let arr = [];
    const passwordValue = passwordref.current.value;
    const emailValue = emailref.current.value;

    if (passwordValue.length < 8) {
      arr.push("Password length should be greater than 7");
    }
    if (emailValue && passwordValue.includes(emailValue)) {
      arr.push("Password should not contain email");
    }
    setPassErrors(arr);
  }

  function handleclick(ref) {
    ref.current.focus();
  }

  function handlesubmit(event) {
    event.preventDefault();
    if (emailErrors.length === 0 && passErrors.length === 0) {
      alert("Submit Success");
    } else {
      alert("Fix validation errors before submitting");
    }
  }

  function handlebutton() {
    return (
      emailErrors.length > 0 ||
      passErrors.length > 0 ||
      !emailref.current?.value ||
      !passwordref.current?.value
    );
  }

  return (
    <>
      <form onSubmit={handlesubmit} className="dynamic-form">
        <label onClick={() => handleclick(emailref)}>Email:</label>
        <input
          type="email"
          ref={emailref}
          onChange={checkemail}
          placeholder="Enter the email"
        />
        <div className="email">
          {emailErrors.map((ele, index) => (
            <h4 key={index} className="error-message">
              {ele}
            </h4>
          ))}
        </div>
        <label onClick={() => handleclick(passwordref)}>Password:</label>
        <input
          type="password"
          ref={passwordref}
          onChange={checkpassword}
          placeholder="Enter the password"
        />
        <div className="password">
          {passErrors.map((ele, index) => (
            <h4 key={index} className="error-message">
              {ele}
            </h4>
          ))}
        </div>
        <button type="submit" className="submit-btn" disabled={handlebutton()}>
          Submit
        </button>
      </form>
    </>
  );
};

export default DynamicForms;
