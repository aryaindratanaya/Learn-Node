import { john, peter } from "./4-names.js";
import { sayHi } from "./5-utils.js";
import data from "./6-alternative-flavor.cjs";

console.log(data);

sayHi("susan");
sayHi(john);
sayHi(peter);
