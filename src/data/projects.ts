export interface ProjectData {
  name: string;
  desc: string;
  tech: string[];
  github: string;
  live?: string;
  private?: boolean;
  warning?: boolean;
  image?: string;
  /** Optimised 2x WebP of the same screenshot; the original stays the fallback. */
  imageWebp?: string;
}

const googleCloudQuizzes: ProjectData = {
  name: 'Google Cloud Quizzes',
  desc: 'Solve real-style scenario questions with instant validation, track your progress, and ask Google Gemini.',
  tech: ['TypeScript', 'Firebase', 'Node.js', 'Next.js', 'React'],
  github: 'https://github.com/rajkumarpawar07/clever-cloud-quizzes',
  live: 'https://google-cloud-questions.vercel.app/',
  image: '/images/projects/gcp_quizes.png',
  imageWebp: '/images/projects/gcp_quizes.webp',
};

const ragArchitectures: ProjectData = {
  name: 'RAG Architectures',
  desc: 'AI Engineer — building RAG architectures to make AI agents more reliable, accurate, and trustworthy.',
  tech: ['Python', 'Architructural patterns', 'Vector DBs (PostgreSQL, Pinecone)'],
  github: 'https://github.com/rajkumarpawar07/rag-architectures',
  image: '/images/projects/rag-architectures.jpg',
  imageWebp: '/images/projects/rag-architectures.webp',
};

const modelPulse: ProjectData = {
  name: 'ModelPulse',
  desc: 'AI API Change Intelligence platform watching 15 vendor changelogs daily with self-healing scrapers.',
  tech: ['TypeScript', 'Next.js', 'Bright Data', 'SQLite', 'Webhooks'],
  github: 'https://github.com/rajkumarpawar07/modelpulse',
  live: 'https://modelpulse-ruby.vercel.app',
  image: '/images/projects/modelpulse.png',
  imageWebp: '/images/projects/modelpulse.webp',
};

const searchMagnet: ProjectData = {
  name: 'SearchMagnet',
  desc: 'High-performance multimodal semantic search engine for discovering any file using natural language.',
  tech: ['Go', 'Fiber', 'Next.js', 'React', 'Gemini', 'Embeddings'],
  github: 'https://github.com/rajkumarpawar07/searchmagnet',
  image: '/images/projects/searchmagnet.png',
  imageWebp: '/images/projects/searchmagnet.webp',
};

const bigga: ProjectData = {
  name: 'Bigga',
  desc: 'A Flutter and Flame-based gaming app with weekly game releases, real cash rewards, and secure KYC verification.',
  tech: ['Flutter', 'Flame Engine', 'Firebase', 'Razorpay'],
  github: 'https://github.com/rajkumarpawar07/Bigga',
  image: '/images/projects/bigga.png',
  imageWebp: '/images/projects/bigga.webp',
};

const playflex: ProjectData = {
  name: 'Playflex',
  desc: 'Feature-rich app offering information of movies and shows with AI voice control, real-time sentiment analysis.',
  tech: ['Alan AI', 'NLP', 'Machine Learning', 'Sentiment Analysis', 'Flutter', 'Flask'],
  github: 'https://github.com/rajkumarpawar07/playflex-video-streaming-flutter-application',
  image: '/images/projects/playflex.png',
  imageWebp: '/images/projects/playflex.webp',
};

export const allProjects: ProjectData[] = [
  googleCloudQuizzes,
  ragArchitectures,
  modelPulse,
  searchMagnet,
  bigga,
  playflex,
];

/**
 * Home-page picks: the strongest production and AI architecture work leads,
 * the earlier mobile/college projects sit behind "More Projects".
 */
export const featuredProjects: ProjectData[] = [
  googleCloudQuizzes,
  ragArchitectures,
  modelPulse,
  searchMagnet,
];
