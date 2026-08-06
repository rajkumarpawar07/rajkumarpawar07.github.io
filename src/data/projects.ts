export type MockupKind = 'search' | 'logo' | 'gradient' | 'blog' | 'game' | 'AI' | 'ML' | 'player' | 'chat' | 'map' | 'shop';

export interface ProjectData {
  name: string;
  desc: string;
  tech: string[];
  github: string;
  live?: string;
  badge?: string;
  private?: boolean;
  warning?: boolean;
  mockup: MockupKind;
  image?: string;
}

export const featuredProjects: ProjectData[] = [

  {
    name: 'Playflex',
    desc: 'Feature-rich app offering information of movies and shows with AI voice control, real-time sentiment analysis.',
    tech: ['Alan AI', 'NLP', 'Machine Learning', 'Sentiment Analysis', 'Flutter', 'Fask', ],
    github: 'https://github.com/rajkumarpawar07/playflex-video-streaming-flutter-application',
    badge: 'Machine Learning',
    mockup: 'ML',
    image: '/images/projects/playflex.png',
  },
  {
    name: 'RAG Architectures',
    desc: 'AI Engineer - Building RAG architectures to make AI agents more reliable, accurate, and trustworthy.',
    tech: ['Python', 'Architecural patterns', 'Vector DBs (PostgreSQL, Pinecone)'],
    github: 'https://github.com/rajkumarpawar07/rag-architectures',
    badge: 'AI Engineering 🤖',
    mockup: 'AI',
    image: '/images/projects/rag-architectures.jpg',
  },
  {
    name: 'Bigga',
    desc: 'A Flutter and Flame-based gaming app with weekly game releases, real cash rewards, and secure KYC verification.',
    tech: ['Flutter', 'Flame Engine', 'Firebase', 'Razorpay'],
    github: 'https://github.com/rajkumarpawar07/Bigga',
    badge: 'Weekly mini-games 🎮',
    mockup: 'game',
    image: '/images/projects/bigga.png',
  },
  {
    name: 'SearchMagnet',
    desc: 'High-performance multimodal semantic search engine for discovering any file using natural language.',
    tech: ['Go', 'Fiber', 'Next.js', 'React', 'Gemini', 'Embeddings'],
    github: 'https://github.com/rajkumarpawar07/searchmagnet',
    badge: 'Multimodal AI',
    mockup: 'AI',
    image: '/images/projects/searchmagnet.png',
  },
];

export const allProjects: ProjectData[] = [...featuredProjects];
