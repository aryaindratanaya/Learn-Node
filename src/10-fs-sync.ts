import { readFileSync, writeFileSync } from "fs";

const first = readFileSync(
  "/home/godzilla/Mine/Learn-Node/src/content/first.txt",
  "utf8"
);
console.log(first);

const second = readFileSync(
  "/home/godzilla/Mine/Learn-Node/src/content/second.txt",
  "utf8"
);
console.log(second);

writeFileSync(
  "/home/godzilla/Mine/Learn-Node/src/content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);
