/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllProjects } from "@/app/lib/getProjects";
import "@/app/projects/projects.css";
import ProjectsClient from "./ProjectsClients";

export const metadata = {
  title: "Projects — Future Robot Software",
};

export default async function ProjectsPage() {
  const rawProjects = await getAllProjects();
  const projects = JSON.parse(JSON.stringify(rawProjects));

  return <ProjectsClient initialProjects={projects} />;
}
