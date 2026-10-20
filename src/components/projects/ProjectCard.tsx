import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaLock, FaExclamationTriangle } from 'react-icons/fa';
import { ProjectData } from '../../data/projects';
import './Projects.css';

export const ProjectCard: React.FC<ProjectData> = ({
  name,
  desc,
  tech,
  github,
  live,
  private: isPrivate,
  warning,
  image,
  imageWebp,
}) => {
  return (
    <article className="project-card dashed-box">
      <div className="project-media">
        {image ? (
          <picture>
            {imageWebp && <source srcSet={imageWebp} type="image/webp" />}
            <img
              src={image}
              alt={`${name} preview`}
              className="project-image"
              loading="lazy"
              decoding="async"
              width={520}
              height={293}
            />
          </picture>
        ) : (
          <div className="project-image project-image-fallback" aria-hidden="true">
            {name.slice(0, 2).toUpperCase()}
          </div>
        )}
        <span className="project-media-sheen" aria-hidden="true"></span>
      </div>

      <div className="project-content">
        <div className="project-title-row">
          <h3 className="project-title">
            {name}
            {isPrivate && <FaLock className="title-icon lock" title="Private repo" />}
            {warning && <FaExclamationTriangle className="title-icon warn" title="Heads up" />}
          </h3>

          <div className="project-actions">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn-live"
                title={`Visit ${name} Live`}
              >
                <span className="live-pulse">
                  <span className="live-pulse-dot" />
                  <span className="live-pulse-ring" />
                </span>
                <span className="live-label">Live</span>
                <FaExternalLinkAlt className="live-icon" />
              </a>
            )}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-github"
              title={`View ${name} on GitHub`}
              aria-label={`View ${name} on GitHub`}
            >
              <FaGithub className="github-icon" />
            </a>
          </div>
        </div>

        <p className="project-desc">{desc}</p>

        <div className="project-tech">
          <p className="tech-label">Built with</p>
          <ul className="tech-tags">
            {tech.map((item) => (
              <li key={item} className="tech-tag">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
