import React, { useEffect, useRef, useState } from 'react';
import { FaExternalLinkAlt, FaCheckCircle, FaLinkedin, FaMapMarkerAlt, FaGlobe, FaBriefcase, FaCog } from 'react-icons/fa';
import { FaXTwitter, FaYoutube, FaPuzzlePiece } from 'react-icons/fa6';
import { userImages } from '../../data/images';
import ContactMe from '../contactMe/ContactMe';
import './HeroSection.css';

const CLOUDQUIZZES_REPO = 'https://github.com/rajkumarpawar07/clever-cloud-quizzes';

function useIndiaClock(): string {
  const [time, setTime] = useState<string>(() =>
    new Date().toLocaleTimeString('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    })
  );

  useEffect(() => {
    const id = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

function getProfileVideoByTime(): string {
  const istHourString = new Date().toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    hour12: false,
  });
  const hour = parseInt(istHourString, 10);

  if (hour >= 6 && hour < 14) {
    return '/images/profile/profile-video1.mp4';
  } else if (hour >= 14 && hour < 22) {
    return '/images/profile/profile-video2.mp4';
  } else {
    return '/images/profile/profile-video3.mp4';
  }
}

export const HeroSection: React.FC = () => {
  const clock = useIndiaClock();
  const [videoUnavailable, setVideoUnavailable] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string>(getProfileVideoByTime);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Preload & cache profile videos in background for seamless zero-flicker playback
    const videoUrls = [
      '/images/profile/profile-video1.mp4',
      '/images/profile/profile-video2.mp4',
      '/images/profile/profile-video3.mp4',
    ];
    videoUrls.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'video';
      link.href = url;
      document.head.appendChild(link);
    });

    const id = setInterval(() => {
      const nextSrc = getProfileVideoByTime();
      setVideoSrc((prev) => (prev !== nextSrc ? nextSrc : prev));
    }, 60000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const handleReady = () => {
      setVideoReady(true);
    };

    video.addEventListener('playing', handleReady);
    video.addEventListener('loadeddata', handleReady);
    video.addEventListener('canplay', handleReady);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setVideoReady(true);
        })
        .catch(() => {
          setVideoReady(true);
        });
    }

    if (video.readyState >= 2 || video.currentTime > 0) {
      setVideoReady(true);
    }

    return () => {
      video.removeEventListener('playing', handleReady);
      video.removeEventListener('loadeddata', handleReady);
      video.removeEventListener('canplay', handleReady);
    };
  }, [videoSrc]);

  return (
    <section className="hero-section">
      <div className="hero-top">
        <div className="hero-avatar-wrap">
          <div className="hero-avatar-media">
            <img
              src={userImages.profile.avatar}
              alt="Rajkumar Pawar"
              className="hero-avatar"
              style={{ opacity: videoReady ? 0 : 1, transition: 'opacity 0.3s ease' }}
            />
            {!videoUnavailable && (
              <video
                key={videoSrc}
                ref={videoRef}
                className="hero-profile-video"
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onCanPlay={() => setVideoReady(true)}
                onLoadedData={() => setVideoReady(true)}
                onPlay={() => setVideoReady(true)}
                onError={() => setVideoUnavailable(true)}
              />
            )}
          </div>
        </div>

        <div className="hero-identity">
          <h1 className="hero-name">
            Rajkumar Pawar <span className="hero-emoji" aria-hidden="true">✦</span>
          </h1>
          <div className="hero-meta-row">
            <a
              href={CLOUDQUIZZES_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-status-link"
            >
              <FaMapMarkerAlt className="meta-icon" aria-hidden="true" />
              <span>Building CloudQuizzes</span>
              <FaExternalLinkAlt className="hero-status-icon" aria-hidden="true" />
            </a>
            <span className="meta-divider" aria-hidden="true"></span>
            <span className="hero-location">
              <FaGlobe className="location-icon" aria-hidden="true" />
              India
            </span>
            <span className="meta-sep" aria-hidden="true">·</span>
            <span className="hero-clock">{clock}</span>
          </div>

          <ul className="hero-bio">
            <li>
              <FaBriefcase className="bio-icon" aria-hidden="true" />
              <span>
                Hi, I am an{' '}
                <strong className="bio-highlight">AI Engineer &amp; Cloud Architect</strong>{' '}
                building intelligent systems.
              </span>
            </li>
            <li>
              <FaCog className="bio-icon" aria-hidden="true" />
              <span>
                <strong>Software Engineer</strong> at <strong>Accenture</strong> working on{' '}
                <strong>Google Cloud, DevOps, and Agentic AI</strong>.
              </span>
            </li>
            <li>
              <FaPuzzlePiece className="bio-icon" aria-hidden="true" />
              <span>
                I do my best work in{' '}
                <strong>Go, Python, Kubernetes, GCP, Terraform, and Agentic AI</strong>.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="hero-divider" aria-hidden="true"></div>

      <div className="social-proof-row">
        <div className="social-proof-card">
          <div className="social-card-icon x">
            <FaXTwitter />
          </div>
          <div className="social-card-info">
            <p className="social-card-name">
              Rajkumar Pawar <FaCheckCircle className="verified-check" />
            </p>
            <p className="social-card-sub">@Rajkumap07</p>
          </div>
          <a
            href="https://x.com/Rajkumarp07"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline social-card-btn"
          >
            Follow
          </a>
        </div>

        <div className="social-proof-card">
          <div className="social-card-icon linkedin">
            <FaLinkedin />
          </div>
          <div className="social-card-info">
            <p className="social-card-name">Rajkumar Pawar (linkedin)</p>
            <p className="social-card-sub status-live">
              <span className="live-dot" aria-hidden="true"></span>@rajkumarpawar07
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/rajkumarpawar07/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid social-card-btn"
          >
            Connect :)
          </a>
        </div>
      </div>

      <ContactMe />
    </section>
  );
};

export default HeroSection;
