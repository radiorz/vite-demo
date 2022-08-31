import { useEffect, useState } from "react";
import Progress from "../../components/Progress";
function Home() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  // useEffect(() => {
  //   (async () => {
  //     if (isLoaded)
  //       // 初始化
  //       await initDevice();
  //     setProgress(10);
  //     setInterval(() => {
  //       setProgress(progress + 10);
  //       console.log(`progress`, progress);
  //     }, 1000);
  //   })();
  //   return () => {};
  // }, [progress]);
  return (
    <div>
      <div>Home</div>

      <Progress />
    </div>
  );
}

export default Home;
