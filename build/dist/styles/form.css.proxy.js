// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".form {\r\n  position: relative;\r\n  width: calc(100% - 20px);\r\n  height: calc(100% - 60px);\r\n  padding: 0px 10px 20px 10px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n\r\n  border: 1px solid rgba(0, 0, 0, 0.5);\r\n  border-top: none;\r\n}\r\n.title {\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.form-field {\r\n  position: relative;\r\n\r\n  height: 40px;\r\n  width: clamp(300px, 50%, 600px);\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  padding: 10px;\r\n}\r\n\r\n.form-field label {\r\n  position: absolute;\r\n\r\n  left: 17px;\r\n  top: 20px;\r\n\r\n  color: rgb(99, 99, 99);\r\n  transition: 0.3s;\r\n}\r\n\r\n.form-field input {\r\n  box-sizing: border-box;\r\n\r\n  width: 100%;\r\n  height: 45px;\r\n  padding-left: 5px;\r\n  padding-top: 10px;\r\n\r\n  border-style: solid;\r\n  border-color: rgb(141, 141, 141);\r\n  border-radius: 5px;\r\n}\r\n\r\n.form-field input:focus {\r\n  outline: none;\r\n}\r\n\r\ninput:focus {\r\n  border-color: #2a7be4;\r\n}\r\n\r\ninput:focus ~ label,\r\ninput:valid ~ label,\r\ninput:-webkit-autofill ~ label {\r\n  top: 10px;\r\n  font-size: 0.75rem;\r\n}\r\n\r\n.form button {\r\n  position: absolute;\r\n  bottom: 30px;\r\n\r\n  width: 80px;\r\n  height: 40px;\r\n\r\n  margin: 5px;\r\n  outline: none;\r\n\r\n  border: 1px solid #2a7be4;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.form button:hover {\r\n  background-color: #60a0f5;\r\n  color: white;\r\n  border-color: #094696;\r\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.card {\r\n  font-family: cursive;\r\n}\r\n\r\n.card .row {\r\n  height: 40px;\r\n  display: flex;\r\n}\r\n\r\n.card .row .key {\r\n  min-width: 100px;\r\n}\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}