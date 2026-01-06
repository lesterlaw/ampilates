import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

const IMAGES_DIR = join(process.cwd(), 'public/images');
const MAX_WIDTHS = {
  // Hero/banner images
  hero: 1920,
  // Card/thumbnail images
  card: 800,
  // Team/profile images
  team: 600,
  // Icon/small images
  icon: 400,
};

// Map images to their optimization settings
const IMAGE_CONFIGS: Record<string, { maxWidth: number; quality: number }> = {
  // Hero/banner images
  'homepage-banner': { maxWidth: MAX_WIDTHS.hero, quality: 85 },
  'about-hero': { maxWidth: MAX_WIDTHS.hero, quality: 85 },
  'pilates-hero': { maxWidth: MAX_WIDTHS.hero, quality: 85 },
  'promotions-header': { maxWidth: MAX_WIDTHS.hero, quality: 85 },
  
  // Large background images
  'first-time-trial': { maxWidth: MAX_WIDTHS.hero, quality: 85 },
  'ready-to-join': { maxWidth: MAX_WIDTHS.hero, quality: 85 },
  'still-have-questions': { maxWidth: MAX_WIDTHS.hero, quality: 85 },
  
  // Class images
  'firm-foundation': { maxWidth: MAX_WIDTHS.card, quality: 85 },
  'essential-strength': { maxWidth: MAX_WIDTHS.card, quality: 85 },
  'active-mobility': { maxWidth: MAX_WIDTHS.card, quality: 85 },
  'introduction-class': { maxWidth: MAX_WIDTHS.card, quality: 85 },
  
  // Location images
  'punggol-outlet': { maxWidth: MAX_WIDTHS.card, quality: 85 },
  'jurong-outlet': { maxWidth: MAX_WIDTHS.card, quality: 85 },
  
  // About/contact images
  'about-am': { maxWidth: MAX_WIDTHS.card, quality: 85 },
  'contact-us-image': { maxWidth: MAX_WIDTHS.card, quality: 85 },
  
  // Team images
  'our-team': { maxWidth: MAX_WIDTHS.team, quality: 85 },
  'our-team1': { maxWidth: MAX_WIDTHS.team, quality: 85 },
  'our-team2': { maxWidth: MAX_WIDTHS.team, quality: 85 },
  'our-team3': { maxWidth: MAX_WIDTHS.team, quality: 85 },
  
  // Promotion images
  'promotions-1': { maxWidth: MAX_WIDTHS.card, quality: 85 },
  'promotions-2': { maxWidth: MAX_WIDTHS.card, quality: 85 },
  'promotions-3': { maxWidth: MAX_WIDTHS.card, quality: 85 },
  'promotions-4': { maxWidth: MAX_WIDTHS.card, quality: 85 },
  
  // Class carousel images
  'our-class-1': { maxWidth: MAX_WIDTHS.card, quality: 85 },
  'our-class-2': { maxWidth: MAX_WIDTHS.card, quality: 85 },
  'our-class-3': { maxWidth: MAX_WIDTHS.card, quality: 85 },
};

async function optimizeImage(filePath: string, fileName: string): Promise<void> {
  const fileExt = fileName.split('.').pop()?.toLowerCase();
  
  // Skip if already WebP (assumed optimized)
  if (fileExt === 'webp') {
    console.log(`⏭️  Skipping ${fileName} (already WebP)`);
    return;
  }
  
  // Get base name without extension
  const baseName = fileName.replace(/\.[^/.]+$/, '');
  
  // Find matching config or use defaults
  const config = IMAGE_CONFIGS[baseName] || { maxWidth: MAX_WIDTHS.card, quality: 85 };
  
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Skip if image is smaller than max width
    if (metadata.width && metadata.width <= config.maxWidth) {
      console.log(`⏭️  Skipping ${fileName} (already optimized size: ${metadata.width}px)`);
      return;
    }
    
    const originalSize = (await stat(filePath)).size;
    
    // Determine output format
    const hasAlpha = metadata.hasAlpha;
    const outputFormat = hasAlpha && fileExt === 'png' ? 'png' : 'webp';
    
    // For PNG files with transparency, create optimized version with -optimized suffix
    // For other files, convert to WebP
    const outputFileName = hasAlpha && fileExt === 'png' 
      ? `${baseName}-optimized.${outputFormat}`
      : `${baseName}.${outputFormat}`;
    const outputPath = join(IMAGES_DIR, outputFileName);
    
    // Skip if output file already exists and is newer
    try {
      const outputStat = await stat(outputPath);
      const inputStat = await stat(filePath);
      if (outputStat.mtime > inputStat.mtime) {
        console.log(`⏭️  Skipping ${fileName} (optimized version already exists)`);
        return;
      }
    } catch {
      // Output file doesn't exist, proceed
    }
    
    // Optimize image
    let pipeline = image.resize(config.maxWidth, null, {
      withoutEnlargement: true,
      fit: 'inside',
    });
    
    if (outputFormat === 'webp') {
      pipeline = pipeline.webp({ quality: config.quality });
    } else {
      pipeline = pipeline.png({ quality: config.quality, compressionLevel: 9 });
    }
    
    await pipeline.toFile(outputPath);
    
    const newSize = (await stat(outputPath)).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ Optimized ${fileName} → ${baseName}.${outputFormat} (${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB, ${savings}% smaller)`);
    
    // If format changed, we might want to keep original or remove it
    // For now, we'll keep both and let you decide
    if (outputFormat !== fileExt || outputPath !== filePath) {
      console.log(`   Note: Original ${fileName} kept. Update code to use ${outputFileName}`);
    }
    
  } catch (error) {
    console.error(`❌ Error optimizing ${fileName}:`, error);
  }
}

async function main() {
  try {
    console.log('🖼️  Starting image optimization...\n');
    
    const files = await readdir(IMAGES_DIR);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );
    
    console.log(`Found ${imageFiles.length} images to optimize\n`);
    
    for (const file of imageFiles) {
      const filePath = join(IMAGES_DIR, file);
      await optimizeImage(filePath, file);
    }
    
    console.log('\n✨ Image optimization complete!');
    
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

main();


