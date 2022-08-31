import { useEffect } from "react";
import { nanoid } from "nanoid";
window.$device = {
  a: 123,
};
export default () => {
  useEffect(() => {
    console.log(`changed`, window.$device.a);
  }, [$device.a]);
  return (
    <button
      onClick={() => {
        window.$device.a = nanoid();
      }}
    >
      1123123123
    </button>
  );
};
