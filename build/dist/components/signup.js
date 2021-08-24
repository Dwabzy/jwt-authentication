import React, {useRef} from "../../_snowpack/pkg/react.js";
import AuthService from "../services/auth.service.js";
import "../styles/form.css.proxy.js";
const SignUp = (props) => {
  const firstNameInputTag = useRef(null);
  const lastNameInputTag = useRef(null);
  const emailInputTag = useRef(null);
  const passwordInputTag = useRef(null);
  const displayMessage = (message, messageType) => {
    props.setMessage(message);
    props.setMessageType(messageType);
    props.messageElement.current.style.bottom = "100px";
    setTimeout(() => {
      props.messageElement.current.style.bottom = "-100px";
    }, 2e3);
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    let userData = {
      firstName: firstNameInputTag.current.value,
      lastName: lastNameInputTag.current.value,
      email: emailInputTag.current.value,
      password: passwordInputTag.current.value
    };
    try {
      let response = await AuthService.signup(userData);
      if (response.status === 201) {
        displayMessage("Sucessfully Registered!", "success");
      }
    } catch (err) {
      if (err.response.status === 409)
        displayMessage("Email already exists. Please Log in", "general");
    }
  };
  return /* @__PURE__ */ React.createElement("form", {
    className: "form",
    onSubmit: handleSignup
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-field"
  }, /* @__PURE__ */ React.createElement("input", {
    ref: firstNameInputTag,
    type: "text",
    name: "firstName",
    id: "firstName",
    required: true
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "firstName"
  }, " First Name: ")), /* @__PURE__ */ React.createElement("div", {
    className: "form-field"
  }, /* @__PURE__ */ React.createElement("input", {
    ref: lastNameInputTag,
    type: "text",
    name: "lastName",
    id: "lastName",
    required: true
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "lastName"
  }, " Last Name: ")), /* @__PURE__ */ React.createElement("div", {
    className: "form-field"
  }, /* @__PURE__ */ React.createElement("input", {
    ref: emailInputTag,
    type: "text",
    name: "email",
    id: "email",
    required: true
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email"
  }, " Email: ")), /* @__PURE__ */ React.createElement("div", {
    className: "form-field"
  }, /* @__PURE__ */ React.createElement("input", {
    ref: passwordInputTag,
    type: "password",
    name: "password",
    id: "password",
    required: true
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password"
  }, " Password: ")), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, " Sign Up "));
};
export default SignUp;
