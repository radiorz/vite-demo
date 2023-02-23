import log from "../src";
const tag1 = "tag1";
const tagLog = log.withTag(tag1);
tagLog.debug("123");
