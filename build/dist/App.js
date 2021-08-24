import React, {useState, useMemo} from "../_snowpack/pkg/react.js";
import {BrowserRouter as Router, Switch, Route} from "../_snowpack/pkg/react-router-dom.js";
import {AccessTokenContext} from "./accessTokenContext.js";
import Home from "./components/home.js";
function PageNotFound() {
  return /* @__PURE__ */ React.createElement("div", null, " Error 404: Page not Found");
}
function App() {
  const [accessToken, setAccessToken] = useState("");
  const value = useMemo(() => ({accessToken, setAccessToken}), [accessToken, setAccessToken]);
  return /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(AccessTokenContext.Provider, {
    value
  }, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/",
    component: Home
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/*",
    component: PageNotFound
  }))));
}
export default App;
