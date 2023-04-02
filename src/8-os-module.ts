import os from "os";

console.log("\n User:");
console.log(os.userInfo());

console.log(`\n Uptime: ${os.uptime()}`);

console.log("\n OS:");
const currentOs = {
  name: os.type(),
  relase: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
