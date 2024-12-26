const crypto = require("crypto");
const os = require("os");
const fs = require("fs");
const { createCipheriv, createDecipheriv, randomBytes } = require("node:crypto");

const args = process.argv.slice(2);

switch (args[0]) {
  case "encrypt-decrypt":
    const key = randomBytes(32);
    const iv = randomBytes(16);
    const cipher = createCipheriv("aes-256-cbc", key, iv);
    let encrypted = cipher.update("Hello World", "utf-8", "hex");
    encrypted += cipher.final("hex");
    console.log(encrypted);

    const decipher = createDecipheriv("aes-256-cbc", key, iv);
    let decrypted = decipher.update(encrypted, "hex", "utf-8");
    decrypted += decipher.final("utf-8");
    console.log(decrypted);
    break;

  case "generate-uuid":
    console.log(crypto.randomUUID());
    break;

  case "read-stream":
    const readStream = fs.createReadStream("test.txt", { encoding: "utf-8" });
    console.time("Stream Time");
    readStream.on("data", (chunk) => {
      console.log("data in readStream", chunk);
      console.log("Completed One Chunk");
    });
    readStream.on("end", () => {
      console.timeEnd("Stream Time");
    });
    break;

  case "system-info":
    console.log("System Information:");
    console.log("Operating System:", os.type());
    console.log("Platform:", os.platform());
    console.log("CPU Architecture:", os.arch());
    console.log("Total Memory (bytes):", os.totalmem());
    console.log("Free Memory (bytes):", os.freemem());
    console.log("Number of CPUs:", os.cpus().length);
    console.log("Home Directory:", os.homedir());
    console.log("Uptime (seconds):", os.uptime());
    break;
}
