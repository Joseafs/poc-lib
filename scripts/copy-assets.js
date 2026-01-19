const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const distDir = path.join(__dirname, '..', 'dist');

function copyCSS(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      copyCSS(filePath);
    } else if (file.endsWith('.css')) {
      const relativePath = path.relative(srcDir, filePath);
      const destPath = path.join(distDir, relativePath);
      const destDirPath = path.dirname(destPath);
      
      if (!fs.existsSync(destDirPath)) {
        fs.mkdirSync(destDirPath, { recursive: true });
      }
      
      fs.copyFileSync(filePath, destPath);
      console.log(`Copied: ${relativePath}`);
    }
  });
}

copyCSS(srcDir);
console.log('CSS files copied successfully!');
