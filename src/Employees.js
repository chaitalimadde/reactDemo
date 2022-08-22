import React, { useState } from 'react';

const Employees = (props) =>{
    const [name, setName] = useState("Chaitali");
    const [info, setInfo] = useState("");
    return (
        <div>
          <h1>{name}</h1>
          <h4>{info}</h4>
          <button style={{ marginRight: "2%" }} onClick={() => setName(props.name)}>
            Username
          </button>
          <button
            onClick={() =>
              setInfo(props.info)
            }
          >
            info
          </button>
        </div>
      );
    }
    export default Employees;
    