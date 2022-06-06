import { delay } from "~/utils";
// A mock function to mimic making an async request for data
export async function fetchCount(amount = 1) {
  await delay(500);
  return { data: amount };
}
