import React from "react";

function Details(props) {
  return (
    <div>
      <p className="info">Phone: {props.phone}</p>
      <p className="info">Email: {props.email}</p>
    </div>
  );
}

export default Details;
