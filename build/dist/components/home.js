import React, {useState, useEffect, useRef, useContext} from "../../_snowpack/pkg/react.js";
import Login from "./login.js";
import Signup from "./signup.js";
import User from "./user.js";
import {AccessTokenContext} from "../accessTokenContext.js";
import authService from "../services/auth.service.js";
import "../styles/home.css.proxy.js";
const RenderForm = (props) => {
  let {form: formToBeDisplayed} = props;
  if (formToBeDisplayed === "signup")
    return /* @__PURE__ */ React.createElement(Signup, {
      ...props
    });
  else if (formToBeDisplayed === "login")
    return /* @__PURE__ */ React.createElement(Login, {
      ...props
    });
  else
    return /* @__PURE__ */ React.createElement(User, {
      ...props
    });
};
const handleFormSelectors = (formSelection, setForm) => {
  localStorage.setItem("form", formSelection);
  setForm(formSelection);
};
function Home(props) {
  const {accessToken, setAccessToken} = useContext(AccessTokenContext);
  const [form, setForm] = useState("user-details");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [userData, setUserData] = useState(void 0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const messageElement = useRef(null);
  useEffect(async () => {
    let form2 = localStorage.getItem("form");
    if (form2)
      setForm(form2);
    const {status} = await authService.verifyAccessToken(accessToken, setAccessToken);
    if (status === 200)
      setIsLoggedIn(true);
    else
      setIsLoggedIn(false);
  }, [accessToken]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "main-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "top-bar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: (form === "user-details" ? "active-tab " : "") + "tab-item"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => handleFormSelectors("user-details", setForm)
  }, " User ")), /* @__PURE__ */ React.createElement("div", {
    className: (form === "login" ? "active-tab " : "") + "tab-item"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => handleFormSelectors("login", setForm),
    disabled: isLoggedIn
  }, " Login ")), /* @__PURE__ */ React.createElement("div", {
    className: (form === "signup" ? "active-tab " : "") + "tab-item"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => handleFormSelectors("signup", setForm),
    disabled: isLoggedIn
  }, " Sign Up "))), /* @__PURE__ */ React.createElement(RenderForm, {
    form,
    setForm,
    setMessage,
    setMessageType,
    messageElement,
    userData,
    setUserData,
    ...props
  })), /* @__PURE__ */ React.createElement("div", {
    ref: messageElement,
    className: "message-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "message " + messageType
  }, message)));
}
export default Home;
