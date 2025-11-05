"use client";
import Link from "next/link";

type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "link"; href: string; label: string };

export default function ContentRenderer({
  content,
}: {
  content: ContentBlock[];
}) {
  return (
    <div className="project-content">
      {content.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} className="section-heading">
                {block.text}
              </h2>
            );

          case "paragraph":
            return (
              <p key={i} className="section-paragraph">
                {block.text}
              </p>
            );

          case "list":
            return (
              <ul key={i} className="section-list">
                {block.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            );

          case "link":
            return (
              <p key={i} className="section-link">
                <Link href={block.href} target="_blank">
                  {block.label}
                </Link>
              </p>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
