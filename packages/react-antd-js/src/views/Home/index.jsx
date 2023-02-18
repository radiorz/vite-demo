/**
 * @author
 * @file index.jsx
 * @fileBase Home
 * @path packages\react-antd-js\src\views\Home\index.jsx
 * @from 
 * @desc 
 * @todo

 *
 * @done
 * @example
 */
const 一到九 = [...new Array(9).keys()].map((i) => i + 1);
const 乘法表 = 一到九.map((纵数字) =>
  // 算出每一行
  [...new Array(纵数字).keys()]
    .map((i) => i + 1)
    .map((横数字) => `${横数字} * ${纵数字} = ${纵数字 * 横数字}`)
);
export default function 九九乘法表() {
  return (
    <div>
      {乘法表.map((行) => {
        return (
          <div
            style={{
              display: "flex",
              "justify-content": "flex-start",
              "flex-direction": "row",
               gap: '20px 20px'
            }}
          >
            {行.map((列) => {
              return <div>{列}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
}
