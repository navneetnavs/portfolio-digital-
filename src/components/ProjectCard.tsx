/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="overflow-hidden min-h-full min-w-full project-card rounded-xl">
      <img
        src={project.imgUrl}
        alt={project.name}
        className="h-80 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-white">
          {project.name}
        </h3>
        <p className="mb-4 text-gray-400">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded bg-zinc-900 px-2 py-1 text-sm text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-secondary hover:text-green-300"
          >
            <ExternalLink size={18} className="mr-1" /> Live Demo
          </a>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-secondary hover:text-green-300"
            >
              <Github size={18} className="mr-1" /> Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
