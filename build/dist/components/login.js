import React, {useRef, useState, useContext} from "../../_snowpack/pkg/react.js";
import authService from "../services/auth.service.js";
import {AccessTokenContext} from "../accessTokenContext.js";
import "../styles/form.css.proxy.js";
const Login = (props) => {
  const {setAccessToken} = useContext(AccessTokenContext);
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
  const handleLogin = async (e) => {
    e.preventDefault();
    let userData = {
      email: emailInputTag.current.value,
      password: passwordInputTag.current.value
    };
    try {
      let response = await authService.login(userData, setAccessToken);
      if (response?.status === 200) {
        localStorage.setItem("form", "user-details");
        props.setForm("user-details");
        displayMessage("Sucessfully Logged In!", "success");
      }
    } catch (err) {
      if (err.response.status === 401)
        displayMessage("Password is Incorrect", "warning");
      else if (err.response.status === 404)
        displayMessage("User does not exist!", "warning");
    }
  };
  return /* @__PURE__ */ React.createElement("form", {
    className: "form",
    onSubmit: handleLogin
  }, /* @__PURE__ */ React.createElement("div", {
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
  }, " Log In "));
};
export default Login;
