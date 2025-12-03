const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');

const images = [
  'cce2ytcce2ytcce2.png',
  'band_ny6ckxny6ckxny6c.png',
  'coleira_e1h9o3e1h9o3e1h9.png',
  'Image_52pa5j52pa5j52pa.png'
];

async function optimizeImages() {
  console.log('🚀 Iniciando otimização de imagens...\n');

  for (const img of images) {
    const inputPath = path.join(imagesDir, img);
    const outputWebP = path.join(imagesDir, img.replace('.png', '.webp'));
    const outputJPG = path.join(imagesDir, img.replace('.png', '.jpg'));

    try {
      // Converter para WebP (melhor compressão para web)
      const metadata = await sharp(inputPath).metadata();
      console.log(`📸 Processando: ${img}`);
      console.log(`   Dimensões originais: ${metadata.width}x${metadata.height}`);

      // WebP - redimensionar para 256x256 (suficiente para miniaturas)
      await sharp(inputPath)
        .resize(256, 256, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: 80 })
        .toFile(outputWebP);

      const webpSize = fs.statSync(outputWebP).size;
      const originalSize = fs.statSync(inputPath).size;
      const compression = ((1 - webpSize / originalSize) * 100).toFixed(2);

      console.log(`   ✅ WebP criado: ${(webpSize / 1024).toFixed(2)} KB (compressão: ${compression}%)\n`);
    } catch (error) {
      console.error(`   ❌ Erro ao processar ${img}:`, error.message, '\n');
    }
  }

  console.log('✨ Otimização concluída!');
}

optimizeImages();
