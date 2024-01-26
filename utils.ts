import fs from "fs";

export interface WalletFile {
  file: string;
  wallet: string;
}

export function getWallets(walletsFile: string) {
  const walletsInput = fs.readFileSync(walletsFile, "utf-8").split("\n");
  const wallets: WalletFile[] = [];
  for (let i = 0; i < walletsInput.length / 2; i++) {
    const file = walletsInput[2 * i];
    const wallet = walletsInput[2 * i + 1];
    if (file && wallet) {
      wallets.push({ file, wallet });
    }
  }
  return wallets;
}
