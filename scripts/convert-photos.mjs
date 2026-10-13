// Converts the raw photos (HEIC/JPG) into web-sized JPGs in public/works
// and writes their dimensions to src/data/photos.json.
// Usage: node scripts/convert-photos.mjs "<source dir>"
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import convert from "heic-convert";

const src = process.argv[2];
if (!src) throw new Error("Pass the source folder as the first argument");

const outDir = path.resolve("public/works");
await fs.mkdir(outDir, { recursive: true });

const files = (await fs.readdir(src))
  .filter((f) => /\.(heic|jpe?g)$/i.test(f))
  .sort((a, b) => a.localeCompare(b, "en", { numeric: true }));

const photos = [];
for (const [i, file] of files.entries()) {
  const id = String(i + 1).padStart(3, "0");
  let input = await fs.readFile(path.join(src, file));
  if (/\.heic$/i.test(file)) {
    input = Buffer.from(await convert({ buffer: input, format: "JPEG", quality: 0.95 }));
  }
  const { data, info } = await sharp(input)
    .rotate()
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer({ resolveWithObject: true });
  await fs.writeFile(path.join(outDir, `${id}.jpg`), data);
  photos.push({ id, src: `/works/${id}.jpg`, width: info.width, height: info.height, original: file });
  console.log(`${id} ← ${file} (${info.width}×${info.height})`);
}

await fs.mkdir("src/data", { recursive: true });
await fs.writeFile("src/data/photos.json", JSON.stringify(photos, null, 2));
