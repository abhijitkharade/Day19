import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  // let counter=0;
  let [counter, setCounter] = useState(0); //6

  const increment = () => {
    counter = counter + 1;

    // RERENDER THE UI :: UPDATE THE INNERHTML ; innerHTML
    setCounter(counter);
  };

  return (
    <div>
      <h1>Counter Application</h1>
      <input type="button" value="Click Me" onClick={increment} />
      <div>
        <h1>Like {counter}</h1>
      </div>
    </div>
  );
}
