export const site = {
  name: 'Gaston Woollands',
  wordmark: 'gw',
  role: 'Senior ML Engineer',
  headline:
    'I design ML systems and the products around them — from field agents to market research terminals.',
  tenure: 'Qualifyze · previously Kantar Media, Fossil Group · 2020–present',
  email: 'contact@gwoollands.com',
  contactLine: 'For hiring, consulting, and product work.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/GastonWoollands' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gaston-woollands/' },
    { label: 'Medium', href: 'https://medium.com/@g.woollands' },
  ],
  education:
    'MSc Quantitative Finance · MSc Data Science & Machine Learning · BSc Econometrics',
  skillGroups: [
    { label: 'DS / ML Eng', items: 'Python, SQL, PyTorch, NLP, RAG' },
    { label: 'Infra', items: 'AWS, Azure, Kubernetes, Terraform, MLflow' },
  ],
} as const

export const experience = [
  {
    company: 'Qualifyze',
    role: 'Senior ML Eng',
    dates: 'Sep 2025 – present',
    summary:
      'Pharma risk scoring and entity resolution on unstructured industry text. ML platforms on AWS with Terraform, EKS, and high-availability serving.',
  },
  {
    company: 'Kantar Media',
    role: 'Data Scientist',
    dates: 'Mar 2024 – Sep 2025',
    summary:
      'Visual-AI detection service with CI/CD. Private RAG for domain Q&A. Kubernetes workflows on Azure DevOps.',
  },
  {
    company: 'Fossil Group',
    role: 'Data Scientist',
    dates: 'Feb 2020 – Mar 2024',
    summary:
      'Demand forecasting, customer segmentation, and price elasticity — four years of production models for supply chain and pricing.',
  },
] as const

export const navItems = [
  { id: 'work', label: 'work' },
  { id: 'experience', label: 'experience' },
  { id: 'contact', label: 'contact' },
] as const
