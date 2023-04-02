import path from "path";

const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

const basename = path.basename(filePath);
console.log(basename);

const absolute = path.resolve("content", "subfolder", "test-2.txt");
console.log(absolute);
