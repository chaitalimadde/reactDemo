import React, { useState } from "react";

const FunctionalComponent = (props) =>{
const [count, setCount] = useState(0);

    return <div>
        <p>Display props data using Functional component</p>
        <table><tbody>
            <tr><td>Name</td><td>Age</td><td>Gender</td></tr>
            {props.data.map(i =><tr><td>{i.name}</td><td>{i.age}</td><td>{i.gender}</td></tr>)}
            </tbody></table>
            <p>You clicked {count +1} times.</p>
            <button onClick={() =>setCount(count +1)} >Click me </button>
        </div>
}

export default FunctionalComponent;