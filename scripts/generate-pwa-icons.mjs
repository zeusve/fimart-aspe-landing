import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

// Usar el favicon más grande como fuente
const sourceIcon = join(publicDir, 'favicon-48x48.png');

const sizes = [192, 512];

async function generateIcons() {
  console.log('Generando iconos PWA...\n');

  for (const size of sizes) {
    const outputPath = join(publicDir, `favicon-${size}x${size}.png`);

    await sharp(sourceIcon)
      .resize(size, size, {
        kernel: sharp.kernel.lanczos3,
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png({ quality: 100, compressionLevel: 9 })
      .toFile(outputPath);

    console.log(`✓ favicon-${size}x${size}.png generado`);
  }

  console.log('\n¡Iconos PWA generados correctamente!');
  console.log('Recuerda actualizar site.webmanifest e index.html');
}

generateIcons().catch(console.error);
