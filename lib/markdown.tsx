import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export function getContent(filePath:string) {
  const fileContents = fs.readFileSync(path.join(filePath), 'utf8');
  const { data, content } = matter(fileContents);

  return { data, content };
}