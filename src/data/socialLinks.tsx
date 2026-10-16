import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { SiMedium, SiHashnode } from 'react-icons/si';

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  label?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rajkumar-pawar-147000211/',
    icon: <FaLinkedin />,
    label: 'in',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/rajkumarpawar07',
    icon: <FaGithub />,
    label: 'gh',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/r.rajkumarrr/',
    icon: <FaInstagram />,
    label: 'ig',
  },
  {
    name: 'X / Twitter',
    url: 'https://x.com/Rajkumarp07',
    icon: <FaXTwitter />,
    label: 'x',
  },
];
