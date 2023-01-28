import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getWritings = () => {
  const dirFiles = fs.readdirSync(
    path.join(process.cwd(), "pages", "writings")
  );

  return dirFiles
    .map((file) => {
      const fileContent = fs.readFileSync(
        path.join(process.cwd(), "pages", "writings", file.name),
        "utf-8"
      );
      const { data, content } = matter(fileContent);

      const slug = file.name;
      return { data, content, slug };
    })
    .filter((writing) => writing);
};
