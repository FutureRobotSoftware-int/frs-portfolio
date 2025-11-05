import "../project-details.css";
import { getProjectSlugs, getProjectData } from "@/app/lib/getProjects";
import Image from "next/image";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getProjectData(params.slug);
  return {
    title: `${data.title} — Future Robot Software`,
    description: data.summary ?? "Project case study.",
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const raw = await getProjectData(params.slug);

  // ✅ Serialización para evitar non-serializable issues
  const data = JSON.parse(JSON.stringify(raw));

  return (
    <article className="card project-detail">
      {data.cover && (
        <Image
          src={data.cover}
          alt={data.title}
          className="project-detail-cover"
          width={1280} // ✅ requerido por Next.js
          height={720}
        />
      )}

      <div className="project-detail-body">
        <h1 className="project-title">{data.title}</h1>

        {data.summary && <p className="project-summary">{data.summary}</p>}

        <div className="grid cols-2 project-info">
          <div>
            <h3>Client</h3>
            <p>{data.client}</p>

            {data.role && (
              <>
                <h3>Role</h3>
                <p>{data.role}</p>
              </>
            )}

            {data.service && (
              <>
                <h3>Service</h3>
                <p>{data.service}</p>
              </>
            )}
          </div>

          <div>
            <h3>Tech</h3>
            <p>{(data.tech || []).join(", ")}</p>

            {data.demo && (
              <p style={{ marginTop: ".6rem" }}>
                <a href={data.demo} target="_blank" rel="noopener noreferrer">
                  View Demo
                </a>
              </p>
            )}
          </div>
        </div>

        <div className="content">{/* TODO: render structured content */}</div>
      </div>
    </article>
  );
}
