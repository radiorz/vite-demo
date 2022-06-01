import { useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
  }, [count]);
  useEffect(() => {
    console.log("useEffect2");
    return () => {
      console.log("useEffect2 out");
    };
  });
  useEffect(() => {
    console.log("useEffect3");
    return () => {
      console.log("useEffect3 out");
    };
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
