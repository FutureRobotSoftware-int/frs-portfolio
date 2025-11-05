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
  const filePath = path.join(PROJECTS_DIR, `${slug}.json`);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

export async function getAllProjects() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => getProjectData(slug));
}
