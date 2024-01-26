import { spawnSync } from "child_process";
import fs from "fs";

const [_1, _2, walletsFile] = process.argv;

const wallets = fs.readFileSync(walletsFile, "utf-8").split("\n");

wallets.forEach((w) => {
  const { output } = spawnSync("solana", ["address", "-k", w]);
  if (output[1]) {
    console.info(w);
    console.info(output[1]?.toString().trim());
  }
});
