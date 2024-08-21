import React from "react";

export default function ListTile(props) {
  return (
    <div className="listtile">
      <div className="display">
        <h2>{props.name}</h2>
      </div>
      <div className="icons">
        <i className="fas fa-edit" onClick={() => props.edit(props.name)}></i>
        <i className="fas fa-xmark" onClick={() => props.del(props.name)}></i>
      </div>
    </div>
  );
}
