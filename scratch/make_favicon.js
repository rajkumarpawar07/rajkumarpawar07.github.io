import fs from 'fs';
import path from 'path';

const imgPath = path.join(process.cwd(), 'public', 'images', 'profile', 'pfp-latest.jpg');
const imgBuffer = fs.readFileSync(imgPath);
const base64Img = `data:image/jpeg;base64,${imgBuffer.toString('base64')}`;

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <clipPath id="circle-clip">
      <circle cx="64" cy="64" r="64" />
    </clipPath>
  </defs>
  <image href="${base64Img}" width="128" height="128" preserveAspectRatio="xMidYMid slice" clip-path="url(#circle-clip)" />
</svg>
`;

fs.writeFileSync(path.join(process.cwd(), 'public', 'favicon.svg'), svgContent);
console.log('Circular favicon.svg successfully created!');
