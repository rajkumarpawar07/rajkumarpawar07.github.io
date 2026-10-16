import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaLock, FaExclamationTriangle, FaSearch } from 'react-icons/fa';
import { ProjectData, MockupKind } from '../../data/projects';
import './Projects.css';

const BrowserMockup: React.FC<{ kind: MockupKind; image?: string; name: string }> = ({ kind, image, name }) => {
  if (image) {
    return (
      <div className="project-image-frame">
        <img src={image} alt={`${name} preview`} className="project-image" loading="lazy" decoding="async" />
      </div>
    );
  }

  if (kind === 'player') {
    return (
      <div className="project-image-frame">
        <img src="/images/projects/playflex.jpg" alt="Playflex streaming app preview" className="project-image" loading="lazy" decoding="async" />
      </div>
    );
  }

  return (
    <div className={`mockup mockup-${kind}`}>
      <div className="mockup-bar">
        <span className="mockup-dot red"></span>
        <span className="mockup-dot yellow"></span>
        <span className="mockup-dot green"></span>
        <span className="mockup-url">{kind}</span>
      </div>

      <div className="mockup-body">
        {kind === 'search' && (
          <div className="mockup-search">
            <div className="mockup-search-bar">
              <FaSearch />
              <span>find open-source projects</span>
            </div>
            <p className="mockup-tagline">
              Build useful experiences that people enjoy.
            </p>
          </div>
        )}

        {kind === 'logo' && (
          <div className="mockup-logo">
            <span className="mx-logo">✦</span>
            <p className="mockup-logo-text">mx-icons</p>
          </div>
        )}

        {kind === 'gradient' && (
          <div className="mockup-gradient">
            <div className="mockup-brand">
              <span className="mockup-brand-emoji">✦</span>
              <p className="mockup-brand-name">Jenzy</p>
              <p className="mockup-brand-sub">Color Meditation</p>
            </div>
          </div>
        )}

        {kind === 'blog' && (
          <div className="mockup-blog">
            <p className="blog-overline">Welcome to Blog Zone</p>
            <p className="blog-subline">Your Personal Writing Space</p>
            <p className="blog-heading">Join the Blogging Revolution Today</p>
          </div>
        )}

        {kind === 'game' && (
          <div className="mockup-game">
            <span className="mockup-brand-emoji">⌁</span>
            <p className="mockup-brand-name">Bigga</p>
            <p className="mockup-brand-sub">Mini-games every week</p>
          </div>
        )}

        {kind === 'map' && (
          <div className="mockup-map">
            <span className="mockup-brand-emoji">⌖</span>
            <p className="mockup-brand-name">Tack Tik</p>
            <p className="mockup-brand-sub">Live guard tracking</p>
            <div className="mockup-route" aria-hidden="true"></div>
          </div>
        )}

        {kind === 'shop' && (
          <div className="mockup-shop">
            <span className="mockup-brand-emoji">◫</span>
            <p className="mockup-brand-name">TStore</p>
            <p className="mockup-brand-sub">Multi-category shopping</p>
          </div>
        )}

        {kind === 'chat' && (
          <div className="mockup-chat">
            <div className="mockup-bubble left">Hey there!</div>
            <div className="mockup-bubble right">Let's connect.</div>
            <p className="mockup-brand-name">NetTeam</p>
            <p className="mockup-brand-sub">Business networking</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const ProjectCard: React.FC<ProjectData> = ({
  name,
  desc,
  tech,
  github,
  live,
  badge,
  private: isPrivate,
  warning,
  mockup,
  image,
}) => {
  return (
    <div className="project-card dashed-box">
      <div className="mockup-wrap">
        {badge && <span className="project-badge">{badge}</span>}
        <BrowserMockup kind={mockup} image={image} name={name} />
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
          <p className="tech-label">Technologies Used:</p>
          <div className="tech-tags">
            {tech.map((t, idx) => (
              <span key={idx} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
