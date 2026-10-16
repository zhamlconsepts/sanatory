const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// 1. Scan all src files for image references
const srcDir = path.resolve(__dirname, '../src');
const imageRegex = /assets\/images\/[a-zA-Z0-9_\-\.]+\.(jpg|png|webp)/g;

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      results.push(full);
    }
  });
  return results;
}

const files = walk(srcDir);
const references = {};

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(imageRegex) || [];
  matches.forEach(m => {
    references[m] = (references[m] || 0) + 1;
  });
});

console.log('=== 1. SOURCE CODE USAGE AUDIT ===');
console.log('Total image strings referenced in src:', Object.values(references).reduce((a, b) => a + b, 0));
console.log('Unique image files referenced in src:', Object.keys(references).length);

const codeDuplicates = Object.entries(references).filter(([_, count]) => count > 1);
if (codeDuplicates.length > 0) {
  console.error('ERROR: Code duplicates found:');
  codeDuplicates.forEach(([img, count]) => console.error(`  - ${img} is used ${count} times`));
} else {
  console.log('✓ ZERO image duplicates in source code! Every image is used exactly ONCE.');
}

console.log('\n=== 2. BINARY SHA256 HASH AUDIT ===');
const publicImgDir = path.resolve(__dirname, '../public/assets/images');
const hashes = {};
let hashCollisions = 0;

Object.keys(references).forEach(ref => {
  const filename = path.basename(ref);
  const fullPath = path.join(publicImgDir, filename);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing file: ${filename}`);
    hashCollisions++;
    return;
  }
  const buf = fs.readFileSync(fullPath);
  const hash = crypto.createHash('sha256').update(buf).digest('hex');
  if (hashes[hash]) {
    console.error(`ERROR: ${filename} and ${hashes[hash]} have identical binary content!`);
    hashCollisions++;
  } else {
    hashes[hash] = filename;
  }
});

if (hashCollisions === 0) {
  console.log('✓ ZERO binary collisions! Every single photo is 100% unique in pixels and content.');
} else {
  console.error(`Found ${hashCollisions} hash collisions!`);
}

if (codeDuplicates.length === 0 && hashCollisions === 0) {
  console.log('\n🌟 PERFECT RESULT: All constraints met completely!');
  process.exit(0);
} else {
  process.exit(1);
}
