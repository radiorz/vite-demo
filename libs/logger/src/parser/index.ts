import { isString } from "lodash";
import { LEVELS } from "../consts";
interface Parser {
  // ()=>any
}
export function toJsonStringify(messages: any[]): string[] {
  return messages.map((message) => {
    try {
      if (isString(message)) {
        return message;
      }
      return JSON.stringify(message);
    } catch (error) {
      console.log("messageParser 出现错误的值");
      return "错误的值";
    }
  });
}
export function addSquareBrackets(value: any) {
  return `[${value}]`;
}
export function joinByVerticalBar(value: any[]) {
  return value.join("|");
}
export const addLevel = (messages: any[], level: LEVELS) => {
  const levelKey = LEVELS[level].toUpperCase();
  return [addSquareBrackets(levelKey), ...messages];
};
export function addPrefixes(messages: any[], prefixes: string[]) {
  console.log(`prefixes`, prefixes);
  return [joinByVerticalBar(prefixes), ...messages];
}
export function joinBySpace(messages: any[]) {
  return messages.join(" ");
}
export function joinByComma(value: any[]) {
  return value.join(",");
}
export function addPrefix(messages: any[], prefix: string) {
  return [prefix, ...messages];
}
