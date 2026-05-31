import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");
const filenames = fs.readdirSync(postsDir);

const posts = filenames.map((filename) => {
  const filePath = path.join(postsDir, filename);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return { slug: filename.replace(/\.md$/, ""), ...data, content };
});

fs.writeFileSync(
  path.join(process.cwd(), "src/lib/posts-data.json"),
  JSON.stringify(posts, null, 2)
);

console.log(`✅ ${posts.length} posts gerados!`);
