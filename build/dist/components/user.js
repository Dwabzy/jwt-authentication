import React, {useState, useContext, useEffect} from "../../_snowpack/pkg/react.js";
import userService from "../services/user.service.js";
import authService from "../services/auth.service.js";
import {AccessTokenContext} from "../accessTokenContext.js";
const UserDetails = (props) => {
  const {accessToken, setAccessToken} = useContext(AccessTokenContext);
  const logout = async () => {
    let response = await authService.logout();
    if (response.status === 204) {
      setAccessToken(void 0);
      localStorage.setItem("form", "login");
      props.setForm("login");
      props.setUserData(void 0);
    }
  };
  const getUserDetails = async () => {
    let response = await userService.getPrivateDetails({accessToken, setAccessToken});
    if (response.status === 200) {
      response.data.createdAt = new Date(response.data.createdAt).toDateString();
      props.setUserData(response.data);
    } else {
      props.setMessageType("general");
      props.setMessage("Unauthorized, Please Log in");
      props.messageElement.current.style.bottom = "100px";
      localStorage.setItem("form", "login");
      props.setForm("login");
      setTimeout(() => {
        props.messageElement.current.style.bottom = "-100px";
      }, 2e3);
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "form"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, " ", /* @__PURE__ */ React.createElement("div", {
    className: "key"
  }, "Name: "), props.userData?.firstName, " ", props.userData?.lastName), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, " ", /* @__PURE__ */ React.createElement("div", {
    className: "key"
  }, "Email: "), props.userData?.email), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "key"
  }, "Created On:"), " ", props.userData?.createdAt, " "))), !props.userData ? /* @__PURE__ */ React.createElement("button", {
    onClick: () => getUserDetails()
  }, " Get User Details ") : /* @__PURE__ */ React.createElement("button", {
    onClick: () => logout()
  }, " Logout "));
};
export default UserDetails;
