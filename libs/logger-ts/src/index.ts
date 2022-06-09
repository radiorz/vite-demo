import { DEFAULT_NAME } from "./utils/constants";

import ConsoleLogger from "~/loggers/ConsoleLogger";

export function useLogger(name: String, options: Object) {
  return new ConsoleLogger(name, options);
}

export const logger = useLogger(DEFAULT_NAME);
