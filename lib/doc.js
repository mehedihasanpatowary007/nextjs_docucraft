import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "doc");
//cwd() => current working directory

export function getDocuments() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allDocuments = fileNames.map((name) => {
    const id = name.replace(".md", "");

    const fullPath = path.join(postsDirectory, name);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      ...matterResult.data,
      id,
    };
  });
  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    } else if (a.order > b.order) {
      return 1;
    } else {
      return 0;
    }
  });
}

export async function getDocumentsContent(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processContent.toString();

  return {
    contentHtml,
    ...matterResult.data,
    id,
  };
}
