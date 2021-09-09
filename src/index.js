import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// function Cards(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <img src={props.img} alt="avatar_img" />
//       <p>Phone: {props.phone}</p>
//       <p>Email: {props.email}</p>
//     </div>
//   );
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
