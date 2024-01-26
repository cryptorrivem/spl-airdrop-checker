import fetch from "node-fetch";
import { getWallets } from "../utils";
import PromisePool from "@supercharge/promise-pool";

const [_1, _2, walletsFile] = process.argv;

const token = "WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk";
const decimals = 5;
const wallets = getWallets(walletsFile);

(async function () {
  await PromisePool.for(wallets)
    .withConcurrency(5)
    .handleError(console.error)
    .process(async ({ file, wallet }) => {
      const result = await fetch(
        `https://worker.jup.ag/jup-claim-proof/${token}/${wallet}`
      );
      if (result.ok) {
        const body = await result.text();
        try {
          const { amount } = JSON.parse(body) as { amount: number };
          console.info({
            file,
            wallet,
            amount: `${amount / (1 * 10 ** decimals)} ${token}`,
          });
        } catch (error) {}
      }
    });
})();
