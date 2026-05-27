const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

(async () => {
  try {
    const svgPath = path.resolve(__dirname, '../public/social-preview.svg');
    const pngPath = path.resolve(__dirname, '../public/social-preview.png');
    const jpgPath = path.resolve(__dirname, '../public/social-preview.jpg');

    if (!fs.existsSync(svgPath)) {
      console.error('SVG not found:', svgPath);
      process.exit(1);
    }

    const buffer = fs.readFileSync(svgPath);

    await sharp(buffer)
      .resize(1200, 630)
      .png({ quality: 90 })
      .toFile(pngPath);

    await sharp(buffer)
      .resize(1200, 630)
      .jpeg({ quality: 90 })
      .toFile(jpgPath);

    console.log('Wrote', pngPath, jpgPath);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
