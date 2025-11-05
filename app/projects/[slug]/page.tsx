import "@/app/projects/project-details.css";
import ContentRenderer from "@/app/projects/ContentRenderer";
import { getProjectSlugs, getProjectData } from "@/app/lib/getProjects";
import Image from "next/image";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug?: string };
}) {
  if (!params?.slug) {
    console.log("🔥 SLUG PARAM:", params.slug);
    return {
      title: "Project — Future Robot Software",
      description: "Project case study loading...",
    };
  }

  console.log("🔥 SLUG PARAM:", params.slug);

  const data = await getProjectData(params.slug);

  return {
    title: `${data.title} — Future Robot Software`,
    description: data.summary ?? "Project case study.",
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProjectPage({ params }: any) {
  const { slug } = await params; // ✅ Unwrap the promise

  if (!slug) return <p>Loading...</p>;

  const raw = await getProjectData(slug);

  // ✅ Serialización para efectos con servidores/metadata
  const data = JSON.parse(JSON.stringify(raw));

  return (
    <article className="card project-detail">
      {data.cover && (
        <Image
          src={data.cover}
          alt={data.title}
          className="project-detail-cover"
          width={1280}
          height={720}
        />
      )}

      <div className="content-wrapper">
        {/* Highlights */}
        {data.highlights?.length > 0 && (
          <section className="project-highlights">
            <h3>Highlights</h3>
            <ul>
              {data.highlights.map((h: string, i: number) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Structured Content */}
        {data.content && <ContentRenderer content={data.content} />}
      </div>
    </article>
  );
}
