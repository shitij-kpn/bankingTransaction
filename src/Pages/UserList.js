import React from "react";

//1. get all users
//2. display all users in a list
// user details - name,email,id,current balance

function UserList({ data }) {
  const users = data.map((el) => {
    return (
      <ListItem
        key={el.id}
        id={el.id}
        name={el.name}
        email={el.email}
        balance={balance}
      />
    );
  });
  return <div>{users}</div>;
}

export default UserList;
