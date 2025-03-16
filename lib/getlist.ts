"use server"; // ✅ Ensures it's a server function

import fs from "fs";
import matter from "gray-matter";
import path from "path";

interface Frontmatter {
  [key: string]: any;
}

interface ListPageResult {
  frontmatter: Frontmatter;
  content: string;
  mdxContent: string;
}

export const getListPage = async (filePath: string): Promise<ListPageResult> => {
  try {
    // ✅ Dynamically resolve the correct path (removes hardcoded "content/")
    const fullPath = path.join(process.cwd(), filePath);

    console.log(`📂 Looking for file at: ${fullPath}`);

    // ✅ Check if the file exists before reading
    if (!fs.existsSync(fullPath)) {
      console.error(`❌ File not found: ${fullPath}`);
      throw new Error(`File not found: ${fullPath}`);
    }

    // ✅ Read file content
    const pageData = fs.readFileSync(fullPath, "utf-8");

    // ✅ Parse Markdown frontmatter
    const pageDataParsed = matter(pageData);

    return {
      frontmatter: pageDataParsed.data || {},
      content: pageDataParsed.content || "",
      mdxContent: "",
    };
  } catch (error) {
    console.error(`❌ Error reading file: ${filePath}\n`, error);
    throw new Error(`⚠ Failed to load page data from ${filePath}`);
  }
};
