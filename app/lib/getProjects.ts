"use server";
import fs from "fs";
import path from "path";

const PROJECTS_DIR = path.join(process.cwd(), "public/data/projects");

export async function getProjectSlugs(): Promise<string[]> {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) => file.replace(".json", ""));
}

export async function getProjectData(slug: string) {
  if (!slug) {
    console.warn("⚠️ getProjectData called without slug. Returning null.");
    return null;
  }

  const filePath = path.join(PROJECTS_DIR, `${slug}.json`);
  const raw = fs.readFileSync(filePath, "utf-8");

  const data = JSON.parse(raw);
  return {
    ...data,
    slug,
  };
}

export async function getAllProjects() {
  const slugs = await getProjectSlugs();
  const projects = await Promise.all(slugs.map((slug) => getProjectData(slug)));
  return projects.filter(Boolean);
}
