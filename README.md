# Airdrop check

## Building the wallets list

Create a `wallets.output` file with each pubkey you want to check (one per line)

## Getting wallets from filesystem

First scan for wallets in your filesystem. You can use the following regex for VS Code to find them:

Search: `^\[\d{1,3},`
Files to include: `*.json`

Then select all search results, and copy their paths, you should have a file like this:

```
/full-path-to/project-a/keys/wallet1.json
/full-path-to/project-a/keys/wallet2.json
/full-path-to/project-a/keys/wallet2.json
/full-path-to/project-b/keys/wallet1.json
/full-path-to/project-c/keys/wallet1.json
```

Save them to `wallets.txt`.

## Get your wallets pub keys

`npx vite-node get-wallets.ts -- wallets.txt > wallets.output`

This will traverse the `wallets.txt` and run the `solana address` command to get each file's pub key.

# Check airdrops

I'll be adding upcoming endpoints to check which wallets are elegible. Below is a list to use for checking

## WEN (WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk)

`npx vite-node airdrops/wen.ts -- wallets.output`
