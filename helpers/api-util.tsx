import fs from 'fs';
import path from 'path';

export const getAllData = () => {
  const filePath = path.join(process.cwd(), 'public', 'api', 'cars.json');
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
};
