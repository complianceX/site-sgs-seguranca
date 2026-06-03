import sharp from "sharp";
import { readFileSync, writeFileSync, unlinkSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const assets = [
  {
    src: join(root, "src", "assets", "logo-sgs.png"),
    dstWebP: join(root, "src", "assets", "logo-sgs.webp"),
    dstSmall: join(root, "src", "assets", "logo-sgs-sm.png"),
    options: { width: 200 },
  },
  {
    src: join(root, "src", "assets", "sgs-dashboard.png"),
    dstWebP: join(root, "src", "assets", "sgs-dashboard.webp"),
    dstSmall: join(root, "src", "assets", "sgs-dashboard-sm.png"),
    options: { width: 1200, quality: 75 },
  },
  {
    src: join(root, "public", "og.png"),
    dstWebP: join(root, "public", "og.webp"),
    dstSmall: null,
    options: { width: 1200, height: 630, quality: 75 },
  },
];

async function optimize() {
  for (const asset of assets) {
    console.log(`\nProcessing: ${asset.src}`);

    const originalSize = readFileSync(asset.src).length;
    console.log(`  Original: ${(originalSize / 1024).toFixed(1)} KB`);

    // WebP version
    let pipeline = sharp(asset.src)
      .resize(asset.options.width, asset.options.height, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: asset.options.quality ?? 80 });

    await pipeline.toFile(asset.dstWebP);
    const webpSize = readFileSync(asset.dstWebP).length;
    console.log(`  WebP:     ${(webpSize / 1024).toFixed(1)} KB (${((1 - webpSize / originalSize) * 100).toFixed(0)}% reduction)`);

    // Optimized PNG (smaller version for mobile)
    if (asset.dstSmall) {
      pipeline = sharp(asset.src)
        .resize(asset.options.width, asset.options.height, { fit: "inside", withoutEnlargement: true })
        .png({ compressionLevel: 9, palette: true });

      await pipeline.toFile(asset.dstSmall);
    }
  }

  console.log("\nDone! Images optimized.");
  console.log("\nTo use WebP images, update imports in your components:");
  console.log("  - logo-sgs.png  → logo-sgs.webp");
  console.log("  - sgs-dashboard.png → sgs-dashboard.webp");
  console.log("  - public/og.png → public/og.webp");
}

optimize().catch(console.error);
