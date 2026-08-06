export interface UsesItem {
  label: string;
  name: string;
  link?: string;
}

export interface UsesCategory {
  category: string;
  items: UsesItem[];
}

export const usesData: UsesCategory[] = [
  {
    category: 'Languages',
    items: [{ label: 'Programming', name: 'Java, Golang, Dart, C++, Python' }],
  },
  {
    category: 'Mobile & Frontend',
    items: [{ label: 'Mobile', name: 'Flutter, Android, React Native' }],
  },
  {
    category: 'Backend & Databases',
    items: [
      { label: 'Backend', name: 'Node.js, Firebase, GraphQL' },
      { label: 'Database', name: 'MongoDB, MySQL, PostgreSQL' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { label: 'Cloud', name: 'Google Cloud, AWS, Azure' },
      { label: 'DevOps', name: 'Docker, Kubernetes, Terraform, Jenkins, ArgoCD, Helm' },
    ],
  },
  {
    category: 'Observability',
    items: [{ label: 'Monitoring', name: 'Grafana, Prometheus, OpenTelemetry' }],
  },
];
