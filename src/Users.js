import React, { useState } from 'react';

const Users = () =>{
    const [name, setName] = useState("Chaitali");
    const [info, setInfo] = useState("");
    return (
        <div>
          <h1>{name}</h1>
          <h4>{info}</h4>
          <button style={{ marginRight: "2%" }} onClick={() => setName("Chaitali Madde")}>
            Username
          </button>
          <button
            onClick={() =>
              setInfo(`This is users test component`)
            }
          >
            info
          </button>
        </div>
      );
    }
    export default Users;
    