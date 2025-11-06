import {
  SiUnity,
  SiVuedotjs,
  SiNextdotjs,
  SiFastapi,
  SiPostgresql,
} from "react-icons/si";
import { IconType } from "react-icons";
import React from "react";

const techIcons: Record<string, IconType> = {
  unity: SiUnity,
  vue: SiVuedotjs,
  "next.js": SiNextdotjs,
  fastapi: SiFastapi,
  postgres: SiPostgresql,
  postgresql: SiPostgresql,
};

export function TechIcon({ name, size = 22 }: { name: string; size?: number }) {
  const key = name.toLowerCase();
  const Icon = techIcons[key];

  return Icon ? React.createElement(Icon, { size }) : null;
}
