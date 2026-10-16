export type MockupKind = 'search' | 'logo' | 'gradient' | 'blog' | 'game' | 'AI' | 'ML' | 'player' | 'chat' | 'map' | 'shop' | 'Cloud';

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

export const allProjects: ProjectData[] = [
  {
    name: 'Google Cloud Quizes',
    desc: 'Solve real-style scenario questions with instant validation, track your progress, and ask Google Gemini.',
    tech: ['TypeScript', 'Firebase', 'Node.js', 'Next.js', 'React'],
    github: 'https://github.com/rajkumarpawar07/clever-cloud-quizzes',
    live: 'https://google-cloud-questions.vercel.app/',
    badge: 'Google Cloud ☁️',
    mockup: 'Cloud',
    image: '/images/projects/gcp_quizes.png',
  },
  {
    name: 'ModelPulse',
    desc: 'AI API Change Intelligence platform watching 15 vendor changelogs daily with self-healing scrapers.',
    tech: ['TypeScript', 'Next.js', 'Bright Data', 'SQLite', 'Webhooks'],
    github: 'https://github.com/rajkumarpawar07/modelpulse',
    live: 'https://modelpulse-ruby.vercel.app',
    badge: 'AI Intelligence ✨',
    mockup: 'AI',
    image: '/images/projects/modelpulse.png',
  },
  {
    name: 'Bigga',
    desc: 'A Flutter and Flame-based gaming app with weekly game releases, real cash rewards, and secure KYC verification.',
    tech: ['Flutter', 'Flame Engine', 'Firebase', 'Razorpay'],
    github: 'https://github.com/rajkumarpawar07/Bigga',
    badge: 'Weekly mini-games 🎯',
    mockup: 'game',
    image: '/images/projects/bigga.png',
  },
  {
    name: 'SearchMagnet',
    desc: 'High-performance multimodal semantic search engine for discovering any file using natural language.',
    tech: ['Go', 'Fiber', 'Next.js', 'React', 'Gemini', 'Embeddings'],
    github: 'https://github.com/rajkumarpawar07/searchmagnet',
    badge: 'Multimodal AI 🔍',
    mockup: 'AI',
    image: '/images/projects/searchmagnet.png',
  },
  {
    name: 'Playflex',
    desc: 'Feature-rich app offering information of movies and shows with AI voice control, real-time sentiment analysis.',
    tech: ['Alan AI', 'NLP', 'Machine Learning', 'Sentiment Analysis', 'Flutter', 'Flask'],
    github: 'https://github.com/rajkumarpawar07/playflex-video-streaming-flutter-application',
    badge: 'Machine Learning 🧠',
    mockup: 'ML',
    image: '/images/projects/playflex.png',
  },
  {
    name: 'RAG Architectures',
    desc: 'AI Engineer - Building RAG architectures to make AI agents more reliable, accurate, and trustworthy.',
    tech: ['Python', 'Architecural patterns', 'Vector DBs (PostgreSQL, Pinecone)'],
    github: 'https://github.com/rajkumarpawar07/rag-architectures',
    badge: 'AI Engineering ⚙️',
    mockup: 'AI',
    image: '/images/projects/rag-architectures.jpg',
  },
];

// Top 5 projects displayed in the Home tab
export const featuredProjects: ProjectData[] = allProjects.slice(0, 5);
