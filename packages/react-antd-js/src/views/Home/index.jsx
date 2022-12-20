import { useEffect, useState } from "react";
import Progress from "../../components/Progress";
function Home() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  useEffect(() => {
    console.log(`count`, count);
  }, [count]);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => 1 + count);
        }}
      >
        {count}
      </button>
      <button
        onClick={() => {
          setCount1((count1) => 1 + count1);
        }}
      >
        {count1}
      </button>
    </div>
  );
}

export default Home;
