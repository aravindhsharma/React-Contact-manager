import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Cards(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <p className="id">{props.id}</p>
          <h2 className="name">{props.name}</h2>
          <Avatar imgURL={props.imgURL} />
        </div>
        <div className="bottom"></div>
        <Details phone={props.phone} email={props.email} />
      </div>
    </div>
  );
}

export default Cards;
