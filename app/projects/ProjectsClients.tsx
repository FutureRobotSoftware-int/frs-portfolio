"use client";
import { useState } from "react";
import Link from "next/link";
import { TechIcon } from "./techicons";
import "@/app/projects/projects.css";

type ProjectData = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  cover?: string;
};

export default function ProjectsClient({
  initialProjects = [],
}: {
  initialProjects?: ProjectData[];
}) {
  const [activeTech, setActiveTech] = useState<string[]>([]);

  const projects = initialProjects ?? [];

  const techLists = projects.map((p) => (Array.isArray(p.tech) ? p.tech : []));

  const allTech = [
    ...new Set(techLists.flatMap((techs) => techs.map((t) => t.toLowerCase()))),
  ];

  const visible = activeTech.length
    ? projects.filter((p) =>
        (p.tech ?? []).some((t) => activeTech.includes(t.toLowerCase()))
      )
    : projects;

  return (
    <>
      <h1 style={{ fontFamily: "var(--font-title)", margin: "0 0 .25rem" }}>
        Projects
      </h1>
      <p style={{ opacity: 0.9, marginBottom: "1rem" }}>Filter by technology</p>

      <div className="tech-filter">
        {allTech
          .filter((tech) => {
            // Check if this tech has an icon by testing if TechIcon returns something
            const key = tech.toLowerCase();
            const iconMap = {
              unity: true,
              vue: true,
              "next.js": true,
              fastapi: true,
              postgres: true,
              postgresql: true,
            };
            return key in iconMap;
          })
          .map((tech) => (
            <button
              key={tech}
              className={`tech-chip ${
                activeTech.includes(tech) ? "active" : ""
              }`}
              onClick={() =>
                setActiveTech((prev) =>
                  prev.includes(tech)
                    ? prev.filter((t) => t !== tech)
                    : [...prev, tech]
                )
              }
              title={tech}
            >
              <TechIcon name={tech} size={18} />
            </button>
          ))}
      </div>

      <div className="carousel">
        {visible.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="card card-project"
          >
            {p.cover && (
              <img src={p.cover} alt={p.title} className="project-cover" />
            )}

            <div style={{ padding: "1rem" }}>
              <h2 style={{ margin: ".2rem 0 .4rem", fontSize: "1.1rem" }}>
                {p.title}
              </h2>

              <div style={{ display: "flex", gap: ".35rem" }}>
                {(p.tech ?? []).slice(0, 4).map((t) => (
                  <span key={t}>
                    <TechIcon name={t} size={16} />
                  </span>
                ))}
              </div>

              <p style={{ opacity: 0.8, margin: ".5rem 0 0" }}>{p.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
