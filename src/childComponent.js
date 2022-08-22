

function ChildComponent(props){
    
    function handleChange(event) {
        // Here, we invoke the callback with the new value
        props.onChange(props.isbuttonClicked +1);
    }

  return (
    <div>
        <button onClick={handleChange} isbuttonClicked = {props.value}>Click me</button>
    </div>
  );
}


export default ChildComponent;
