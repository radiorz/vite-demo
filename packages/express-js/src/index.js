import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config(".env");
// import logger from "@tikkhun/logger";
// your beautiful code...
app.route("/").get((req, res) => {
  res.send("asdf");
});
if (import.meta.env.PROD) {
  dotenv.config(".env.prod");
  app.listen(process.env.PORT);
  console.log("运行在", process.env.PORT);
}

// logger.debug("开始运行了");

export const viteNodeApp = app;
