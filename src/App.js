import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const id1 = 100;
  const list = [1, 1, 1];
  const [cardCss, setCardcss] = useState("bg-primary text-light fs-3 p-4 mb-1");

  const primaryTheme = () => setCardcss("bg-primary text-light fs-3 p-4 mb-1");
  const darkTheme = () => setCardcss("bg-dark text-light fs-3 p-4 mb-1");
  const dangerTheme = () => setCardcss("bg-danger text-light fs-3 p-4 mb-1");
  const ajinkyaTheme = () => setCardcss("bg-light text-dark fs-1 p-5 mb-5");

  return (
    <div>
      <input
        type="button"
        value="Primary Theme"
        className="btn btn-primary btn-sm"
        onClick={primaryTheme}
      />
      <input
        type="button"
        value="Primary Theme"
        className="btn btn-dark btn-sm"
        onClick={darkTheme}
      />
      <input
        type="button"
        value="Danger Theme"
        className="btn btn-danger btn-sm"
        onClick={dangerTheme}
      />
      <input
        type="button"
        value="ajinkya theme"
        className=" btn btn-warning btn-sm "
        onClick={ajinkyaTheme}
      />
      {list.map(() => (
        <div className={cardCss}> akshay, Rathor </div>
      ))}
    </div>
  );
}
