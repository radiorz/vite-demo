export function doParsers(messages: any[], parsers: Function[]): any {
  let temp: any = messages;
  for (const parser of parsers) {
    temp = parser(temp);
  }
  return temp;
}
