window.isDev = process.env.NODE_ENV === "development";
window.isProd = process.env.NODE_ENV === "production";
window.isTest = process.env.NODE_ENV === "test";
import logger from "./logger";
window.logger = logger;
