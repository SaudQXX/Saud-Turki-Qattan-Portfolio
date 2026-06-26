import fs from 'fs';
import path from 'path';

const dirsToCopy = ['css', 'js', 'assets', 'data'];
const filesToCopy = ['index.html', 'projects.html', 'experience.html', 'contact.html', 'README.md'];

fs.mkdirSync('dist', { recursive: true });
for (const item of [...dirsToCopy, ...filesToCopy]) {
  if (fs.existsSync(item)) {
    fs.cpSync(item, path.join('dist', item), { recursive: true });
  }
}
console.log('Build complete');
