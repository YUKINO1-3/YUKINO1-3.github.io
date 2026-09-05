import react from "@astrojs/react";
import { unified as astroUnified } from "@astrojs/markdown-remark";
import type { AstroIntegration } from "astro";
import { defineConfig } from "astro/config";
import { readFileSync, readdirSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import matter from "gray-matter";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";

function rejectExecutableNoteFiles(): AstroIntegration {
  return {
    name: "reject-executable-note-files",
    hooks: {
      "astro:config:setup": ({ logger }) => {
        const notesDirectory = resolve(
          process.cwd(),
          process.env.NOTE_CONTENT_DIRECTORY ?? "src/content/notes",
        );
        const files = readdirSync(notesDirectory, { recursive: true, withFileTypes: true }).filter(
          (entry) => entry.isFile(),
        );
        const executableExtensions = new Set([".astro", ".jsx", ".mdx", ".tsx"]);
        const invalidFile = files.find((entry) => executableExtensions.has(extname(entry.name)));

        if (invalidFile) {
          logger.error(
            `Unsupported executable Note file "${invalidFile.name}". MDX, Astro, and React content are not allowed.`,
          );
          throw new Error("Executable Note content is not allowed");
        }

        const noteBySlug = new Map<string, string>();
        for (const file of files.filter((entry) => extname(entry.name) === ".md")) {
          const filePath = join(file.parentPath, file.name);
          const parsedNote = matter(readFileSync(filePath, "utf8"));
          const slug = parsedNote.data.slug;
          if (typeof slug !== "string") continue;

          const markdownTree = unified().use(remarkParse).parse(parsedNote.content);
          visit(markdownTree, "html", (node) => {
            const harmlessInlineMarkup = /^<\/?(?:kbd|mark|sub|sup)>$/i;
            if (harmlessInlineMarkup.test(node.value.trim())) return;

            throw new Error(
              `Unsafe executable or embedded markup in ${file.name}: ${node.value.slice(0, 60)}. ` +
                "Use Markdown, fenced code, math, or harmless inline kbd/mark/sub/sup markup.",
            );
          });

          const existingNote = noteBySlug.get(slug);
          if (existingNote) {
            throw new Error(
              `Duplicate Note slug "${slug}" in "${existingNote}" and "${file.name}". ` +
                "Give every Note a unique stable slug.",
            );
          }
          noteBySlug.set(slug, file.name);
        }
      },
    },
  };
}

export default defineConfig({
  integrations: [rejectExecutableNoteFiles(), react()],
  markdown: {
    processor: astroUnified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
  output: "static",
  site: "https://yukino1-3.github.io",
});
