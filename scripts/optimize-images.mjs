import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ASSETS_DIR = join(__dirname, "..", "src", "assets");
const QUALITY = 80;
const RESPONSIVE_WIDTHS = [480, 800];

async function getFileSize(filePath) {
  const stats = await stat(filePath);
  return stats.size;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  const mb = kb / 1024;
  return `${mb.toFixed(2)} MB`;
}

function calcReduction(original, optimized) {
  const percent = ((original - optimized) / original) * 100;
  return percent.toFixed(1);
}

async function optimizeImage(filePath) {
  const name = basename(filePath, extname(filePath));
  const originalSize = await getFileSize(filePath);

  // Full-size WebP
  const webpPath = join(ASSETS_DIR, `${name}.webp`);
  await sharp(filePath).webp({ quality: QUALITY }).toFile(webpPath);
  const webpSize = await getFileSize(webpPath);

  console.log(
    `  ${name}.webp | ${formatBytes(originalSize)} -> ${formatBytes(webpSize)} (${calcReduction(originalSize, webpSize)}% smaller)`
  );

  // Responsive variants
  for (const width of RESPONSIVE_WIDTHS) {
    const responsivePath = join(ASSETS_DIR, `${name}-${width}w.webp`);
    await sharp(filePath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(responsivePath);

    const responsiveSize = await getFileSize(responsivePath);
    console.log(
      `  ${name}-${width}w.webp | ${formatBytes(responsiveSize)} (${calcReduction(originalSize, responsiveSize)}% smaller than original)`
    );
  }
}

async function main() {
  console.log("Image optimization: JPG -> WebP\n");
  console.log(`Source: ${ASSETS_DIR}`);
  console.log(`Quality: ${QUALITY}`);
  console.log(`Responsive widths: ${RESPONSIVE_WIDTHS.join(", ")}px\n`);

  const files = await readdir(ASSETS_DIR);
  const jpgFiles = files.filter((f) => f.endsWith(".jpg") || f.endsWith(".jpeg"));

  if (jpgFiles.length === 0) {
    console.log("No JPG files found in assets directory.");
    return;
  }

  console.log(`Found ${jpgFiles.length} JPG files to convert:\n`);

  let totalOriginal = 0;
  let totalWebp = 0;

  for (const file of jpgFiles) {
    const filePath = join(ASSETS_DIR, file);
    const originalSize = await getFileSize(filePath);
    totalOriginal += originalSize;

    console.log(`Processing: ${file}`);
    await optimizeImage(filePath);

    const webpPath = join(ASSETS_DIR, `${basename(file, extname(file))}.webp`);
    const webpSize = await getFileSize(webpPath);
    totalWebp += webpSize;

    console.log("");
  }

  console.log("---");
  console.log(
    `Total (full-size only): ${formatBytes(totalOriginal)} -> ${formatBytes(totalWebp)} (${calcReduction(totalOriginal, totalWebp)}% reduction)`
  );
  console.log("\nDone! WebP files saved alongside originals in src/assets/");
}

main().catch((err) => {
  console.error("Error during image optimization:", err);
  process.exit(1);
});
