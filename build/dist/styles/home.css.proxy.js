// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".container {\r\n  height: 100vh;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.main-container {\r\n  height: clamp(400px, 50%, 600px);\r\n  width: clamp(400px, 33%, 450px);\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\r\n  border-top: none;\r\n}\r\n\r\n.top-bar {\r\n  height: 40px;\r\n  width: 100%;\r\n\r\n  display: flex;\r\n  justify-content: stretch;\r\n  align-items: center;\r\n\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.tab-item {\r\n  width: 80px;\r\n  height: 100%;\r\n  border-right: 1px solid rgba(44, 44, 44, 0.25);\r\n}\r\n\r\n.tab-item button {\r\n  height: 100%;\r\n  width: 100%;\r\n\r\n  background-color: transparent;\r\n  border: none;\r\n\r\n  font-size: inherit;\r\n  font-family: cursive;\r\n}\r\n\r\n.active-tab {\r\n  border: 1px solid rgba(0, 0, 0, 0.5);\r\n  border-bottom: 2px solid white;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.message-container {\r\n  position: absolute;\r\n  bottom: 0px;\r\n\r\n  width: 100%;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n\r\n  transition: 0.5s ease;\r\n  visibility: hidden;\r\n}\r\n\r\n.message {\r\n  box-sizing: border-box;\r\n  height: 40px;\r\n  padding: 10px;\r\n\r\n  border-radius: 5px;\r\n  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.general {\r\n  background-color: rgb(65, 125, 238);\r\n  border: 1px solid rgb(16, 47, 105);\r\n  color: white;\r\n  visibility: visible;\r\n}\r\n\r\n.success {\r\n  background-color: rgb(36, 199, 63);\r\n  border: 1px solid rgb(15, 107, 31);\r\n  color: white;\r\n  visibility: visible;\r\n}\r\n\r\n.warning {\r\n  background-color: rgb(226, 58, 7);\r\n  border: 1px solid rgb(155, 0, 0);\r\n  color: white;\r\n  visibility: visible;\r\n}\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}