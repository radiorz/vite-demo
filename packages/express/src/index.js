import express from "express";
const app = express();
import logger from "@tikkhun/logger";
// your beautiful code...
app.route("/").get((req, res) => {
  res.send("Hello World!");
});
if (import.meta.env.PROD) {
  app.listen(3333);
}
// logger.debug("开始运行了");

export const viteNodeApp = app;
