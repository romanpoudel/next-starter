import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const staticSrcPath = path.join(__dirname, ".next/static");
const staticDestPath = path.join(
  __dirname,
  ".next/standalone/next-js/.next/static"
);

const publicSrcPath = path.join(__dirname, "public");
const publicDestPath = path.join(__dirname, ".next/standalone/next-js/public");

function copyAssets(src, dest) {
  return fs
    .mkdir(dest, { recursive: true })
    .then(() => fs.readdir(src, { withFileTypes: true }))
    .then((items) => {
      const promises = items.map((item) => {
        const srcPath = path.join(src, item.name);
        const destPath = path.join(dest, item.name);

        if (item.isDirectory()) {
          return copyAssets(srcPath, destPath);
        }
        return fs.copyFile(srcPath, destPath);
      });
      return Promise.all(promises);
    })
    .catch((err) => {
      console.error(`Error: ${err}`);
      throw err;
    });
}

const greenTick = "\x1b[32m\u2713\x1b[0m";
const redCross = "\x1b[31m\u274C\x1b[0m";
copyAssets(staticSrcPath, staticDestPath)
  .then(() => copyAssets(publicSrcPath, publicDestPath))
  .then(() => console.log(`${greenTick} Assets copied successfully`))
  .catch((err) => console.error(`${redCross} Failed to copy assets: ${err}`));
