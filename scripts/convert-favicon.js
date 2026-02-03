const sharp = require('sharp');
const toIco = require('to-ico');
const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

async function convertToIco() {
  const inputPath = join(process.cwd(), 'public', 'images', 'location3.png');
  const outputPath = join(process.cwd(), 'app', 'favicon.ico');

  try {
    // Read the input image
    const inputBuffer = readFileSync(inputPath);

    // Create multiple sizes for the ICO file (common favicon sizes)
    const sizes = [16, 32, 48];
    const buffers = await Promise.all(
      sizes.map(size =>
        sharp(inputBuffer)
          .resize(size, size, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 }
          })
          .png()
          .toBuffer()
      )
    );

    // Convert to ICO format
    const icoBuffer = await toIco(buffers);

    // Write the ICO file
    writeFileSync(outputPath, icoBuffer);
    console.log(`✅ Successfully created favicon.ico at ${outputPath}`);
  } catch (error) {
    console.error('❌ Error converting to ICO:', error);
    process.exit(1);
  }
}

convertToIco();
