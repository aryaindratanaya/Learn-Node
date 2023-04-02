import { readFile, writeFile } from "fs";

readFile(
  "/home/godzilla/Mine/Learn-Node/src/content/first.txt",
  "utf8",
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const first = result;

    readFile(
      "/home/godzilla/Mine/Learn-Node/src/content/second.txt",
      "utf8",
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        const second = result;

        writeFile(
          "/home/godzilla/Mine/Learn-Node/src/content/result-async.txt",
          `Here is the result: ${first}, ${second}`,
          { flag: "a" },
          (err) => {
            if (err) {
              console.log(err);
            }
          }
        );
      }
    );
  }
);
