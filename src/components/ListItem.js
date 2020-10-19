import React from "react";

//card to show the email,s id, name, balance

function ListItem(props) {
  const { id, name, email, balance } = props;
  return <div>{(id, name, email, balance)}</div>;
}

export default ListItem;
