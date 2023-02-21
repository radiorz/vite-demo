import { LEVELS } from "../consts";
import chalk from "chalk";
const LEVEL_COLORS = {
  [LEVELS.debug]: chalk.blue,
  [LEVELS.error]: chalk.red,
  [LEVELS.warn]: chalk.hex("#FFA500"),
  [LEVELS.info]: chalk.black,
};
export function addLevelColorful(level: LEVELS) {
  return LEVEL_COLORS[level];
}
