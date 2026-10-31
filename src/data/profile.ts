import {
  Cloud,
  Boxes,
  FileCode2,
  GitBranch,
  Radar,
  ShieldCheck,
  Terminal,
  BrainCircuit,
  AudioWaveform,
  Activity,
  BarChart3,
} from 'lucide-react';

export const PROFILE = {
  name: 'Juan Hoyos',
  fullName: 'Juan José Hoyos Urcué',
  role: 'Senior Cloud & Platform Engineer',
  discipline: 'Azure · Kubernetes · Terraform · CI/CD · AI Platform Engineering',
  location: 'Cali, Colombia',
  availability: 'Open to remote roles in US time zones',
  languages: 'Spanish (native) · English (professional)',
  email: 'juan.hoyosu@outlook.com',
  resume: 'Juan-Hoyos-CV.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/hoyosjuan/',
    github: 'https://github.com/2203juan',
  },

  headline: 'I build the platforms engineers ship on.',
  intro:
    '5+ years in cloud and platform engineering — the last four designing and operating the enterprise Azure and Kubernetes platform behind a customer-facing financial product — and now building agentic LLM systems with the same engineering discipline.',

  about: [
    'I spend my days on the layer most people never see: the internal developer platform, the Terraform modules, the pipelines and the service mesh that decide how fast a team can ship and how calmly it sleeps. For the past four years that layer has belonged to GM Financial — account creation, payments, authentication, offers and vehicle financing — first through Perficient and, since September 2025, through Vrize. Same platform, same accountability, two consulting firms.',
    'What I care about is turning repeated effort into infrastructure. A .NET API that took two weeks to stand up now takes two days, because I built the generator that does it. About twenty Terraform modules became the provisioning source the whole organization consumes. Releases that could only happen after 9 p.m. moved into business hours with zero downtime. None of that is glamorous work — it is the work that compounds.',
    'I am finishing an M.Sc. in Artificial Intelligence and Data Science, building multi-agent LLM systems with RAG, LangChain and LangGraph. My interest is not in prompting models but in what they need around them: retrieval that behaves, orchestration that is observable, and cost routing that survives contact with production. That is a platform problem, and it is the one I want to solve next.',
  ],

  stack: [
    { layer: 'apps', value: '~40 microservices across ~9 product teams' },
    { layer: 'delivery', value: 'Azure DevOps · Helm · Argo Rollouts' },
    { layer: 'runtime', value: 'AKS · Istio · Calico · private clusters' },
    { layer: 'platform', value: 'Internal developer platform · 10 teams' },
    { layer: 'infra', value: 'Terraform · 10 Azure subscriptions' },
    { layer: 'signals', value: 'Splunk Cloud · Application Insights' },
  ],

  metrics: [
    { value: '5+', unit: 'yrs', label: 'Cloud & platform engineering, since 2021' },
    { value: '10', unit: 'teams', label: 'Adopted the internal developer platform I built' },
    { value: '~20', unit: 'modules', label: 'Terraform library across 10 Azure subscriptions' },
    { value: '~130', unit: 'engineers', label: 'Served by the centralized CI/CD platform' },
  ],

  impact: [
    {
      before: '2 weeks',
      after: '2 days',
      title: 'Setting up a new .NET API',
      icon: Boxes,
      body:
        'Built an internal developer platform that generates repository scaffolding, Azure DevOps pipelines, the client-mandated .NET security libraries, Docker images, variable groups and dynamic Azure integrations — Key Vault, Application Insights and more.',
      facts: ['10 teams adopted it', '20 services created with it', 'Evolved into the org’s NextGen platform'],
    },
    {
      before: '2 months',
      after: '1 month',
      title: 'Onboarding a service to production',
      icon: GitBranch,
      body:
        'Extended a centralized CI/CD platform with Helm onboarding, a versioning strategy, automated deployment notifications and Playwright test integration, standardizing how every team promotes code across environments.',
      facts: ['~9 product teams', '~40 microservices', 'dev · qa · uat · prod'],
    },
    {
      before: 'After 9 p.m.',
      after: 'Business hours',
      title: 'Release windows',
      icon: Radar,
      body:
        'Introduced blue-green and canary deployments with Argo Rollouts. A secondary environment is deployed and validated during the day; the night is reduced to a traffic switch.',
      facts: ['Zero-downtime cutovers', 'Automated rollback', 'Multiple microservices'],
    },
    {
      before: 'Scattered logs',
      after: 'End-to-end correlation',
      title: 'Incident diagnosis',
      icon: ShieldCheck,
      body:
        'Designed unified Splunk Cloud observability so a failure is traced to the exact component and its position in the architecture flow, instead of being hunted across dozens of per-service log streams.',
      facts: ['2 products × 4 environments', 'Sev 2 / 3 escalation point', 'Six products'],
    },
  ],

  skills: {
    core: [
      {
        category: 'Cloud & Platform',
        icon: Cloud,
        items: [
          'Azure', 'AKS', 'App Services', 'APIM', 'Key Vault', 'Entra ID',
          'Storage', 'Azure Monitor', 'Application Insights', 'Log Analytics',
          'Multi-subscription governance',
        ],
      },
      {
        category: 'Kubernetes & Delivery',
        icon: Boxes,
        items: [
          'Kubernetes', 'Helm', 'Kustomize', 'Istio', 'Calico',
          'Ingress', 'Private clusters', 'Argo Rollouts', 'Blue-green', 'Canary',
        ],
      },
      {
        category: 'Infrastructure as Code',
        icon: FileCode2,
        items: [
          'Terraform', 'Reusable modules', 'Remote state',
          'Multi-environment', 'Multi-subscription', 'Ansible',
        ],
      },
      {
        category: 'CI/CD & Developer Experience',
        icon: GitBranch,
        items: [
          'Azure DevOps', 'Azure Pipelines', 'Reusable pipeline templates',
          'Scaffolding automation', 'Self-service onboarding',
          'GitHub Actions', 'Jenkins', 'Playwright in pipelines',
        ],
      },
      {
        category: 'Reliability & Observability',
        icon: Radar,
        items: [
          'Splunk Cloud', 'Azure Monitor', 'Application Insights', 'New Relic',
          'Root cause analysis', 'Incident response', 'On-call', 'SRE practices',
        ],
      },
      {
        category: 'Security & Networking',
        icon: ShieldCheck,
        items: [
          'RBAC', 'Key Vault-backed secrets', 'Network policies', 'DNS',
          'Load balancing', 'Private networking', 'Prisma Cloud', 'Black Duck',
        ],
      },
    ],
    ai: {
      category: 'AI & Machine Learning',
      icon: BrainCircuit,
      note: 'Graduate coursework, capstone work and prior ML research.',
      items: [
        'Agent workflows', 'RAG', 'Vector databases', 'LangChain', 'LangGraph',
        'OpenAI / Anthropic / Gemini APIs', 'Locally hosted models', 'Voice models',
        'PyTorch', 'Keras', 'scikit-learn', 'Pandas', 'Flask model serving',
      ],
    },
    languages: {
      category: 'Languages & Systems',
      icon: Terminal,
      items: ['Python', 'Bash', 'PowerShell', 'Linux', 'Windows', 'Git', 'Docker'],
    },
    footnote:
      'Also familiar with AWS (EC2, S3, IAM) from earlier hybrid-cloud work — listed honestly, well below my depth in Azure.',
  },

  experience: [
    {
      company: 'Vrize',
      period: 'Sep 2025 — Present',
      mode: 'Remote',
      badge: null as string | null,
      roles: [
        {
          title: 'Senior Cloud / Platform Engineer (SRE)',
          period: 'Sep 2025 — Present',
          client: 'GM Financial',
          bullets: [
            'Build and extend a centralized CI/CD platform serving ~9 product teams (~130 engineers) and ~40 microservices across dev, QA, UAT and production — contributing Helm onboarding, versioning strategy, automated deployment notifications and Playwright test integration, cutting new-service onboarding from two months to one.',
            'Proposed, presented and shipped automated versioning and release governance for the platform: trunk-based development, conventional commits, automatic tags and versions, and Teams and email notifications that tell every consuming team when to adopt a stable release. In production since September 2026.',
            'Designed unified Splunk Cloud observability across 4 environments and 2 products, replacing scattered per-service logging with end-to-end flow correlation that pinpoints the failing component and its position in the architecture.',
            'Act as escalation point for severity 2 and 3 production incidents across six products, owning diagnosis and documented root cause analysis across SQL timeouts, GraphQL failures, service connectivity, Key Vault access and network policy misconfiguration — including an RCA with Microsoft that delivered a durable fix for recurring SQL timeouts.',
            'Operate AKS environments with Istio service mesh, Calico network policies, Helm and Azure DevOps pipelines, and support the migration to private AKS clusters — hardening network boundaries, DNS and ingress to meet enterprise security and governance requirements.',
            'Designed network policy as code: moved the Calico policies and Istio Virtual Services of 7 services into each service’s own repository, so policy ships with the service, versioned and auditable. Designed and implemented the network layer for multi-region disaster recovery of the MyAccount APIs in East US, from devtest to production.',
            'Designed and built a HubSpot → Splunk log pipeline and Azure Functions alerting for the contact-center platform, and remediated security review findings — including 31 vulnerabilities ahead of a production migration.',
          ],
        },
      ],
    },
    {
      company: 'Perficient Latin America',
      period: 'Jul 2021 — Sep 2025',
      mode: 'Remote',
      badge: 'Junior to Senior in 18 months',
      roles: [
        {
          title: 'Senior DevOps / Cloud Platform Engineer',
          period: 'Jan 2023 — Sep 2025',
          client: 'GM Financial',
          bullets: [
            'Built an internal developer platform generating repository scaffolding, Azure DevOps pipelines, client-mandated .NET security libraries, Docker images, variable groups and dynamic Azure integrations — reducing initial setup of a new .NET API from two weeks to two days, adopted by 10 teams across 20 services, and later evolved into the organization’s next-generation platform tooling.',
            'Authored ~20 reusable Terraform modules spanning 10 Azure subscriptions and one AKS cluster per environment; they remain the company’s primary provisioning source for networking, identity and workload standards.',
            'Introduced blue-green and canary deployments with Argo Rollouts, moving release validation out of a mandatory post-9 p.m. window into business hours on a secondary environment and enabling zero-downtime cutovers with automated rollback.',
            'Embedded security and supply-chain controls into pipelines — Prisma Cloud, Black Duck, Key Vault, RBAC — and trained cross-functional teams on CI/CD, Terraform and Kubernetes to accelerate adoption of platform standards.',
          ],
        },
        {
          title: 'Mid DevOps Engineer',
          period: 'Jan 2022 — Jan 2023',
          client: 'GM Financial',
          bullets: [
            'Designed and deployed cloud-native releases on Azure using Terraform, AKS, APIM and Azure Pipelines, supporting consistent promotion from development to production for customer-facing account creation, payments, authentication, offers and vehicle financing.',
            'Stood up centralized logging and monitoring with Application Insights and Log Analytics, improving incident triage, on-call response and cross-team visibility.',
          ],
        },
        {
          title: 'Jr DevOps Engineer',
          period: 'Jul 2021 — Jan 2022',
          client: 'Safe Fleet',
          bullets: [
            'Implemented synthetic monitoring with New Relic and Slack alerting, supported on-call production response, maintained Azure DevOps pipelines and Terraform provisioning, and wrote a Python script to audit disaster-recovery posture across AWS and Azure.',
          ],
        },
      ],
    },
    {
      company: 'CIDEIM / Pontificia Universidad Javeriana Cali',
      period: 'Jan 2020 — Jan 2022',
      mode: 'Cali, Colombia',
      badge: null as string | null,
      roles: [
        {
          title: 'Machine Learning Research Assistant',
          period: 'Jan 2020 — Jan 2022',
          client: null,
          bullets: [
            'Built, evaluated and served a supervised machine learning model achieving 92% precision predicting treatment effectiveness for Cutaneous Leishmaniasis, using Python, scikit-learn and Pandas, exposed through a Flask API.',
            'Co-authored a published research article on machine learning applied to healthcare; received the Excellence Award for the underlying undergraduate thesis.',
          ],
        },
      ],
    },
  ],

  projectsNote:
    'Graduate research and capstone work for the M.Sc. in Artificial Intelligence and Data Science — academic projects, not client engagements.',

  projects: [
    {
      title: 'Agentic LLM System',
      subtitle: 'RAG · Vector database · LangGraph',
      description:
        'A multi-agent conversational platform built over a public utility company’s public information, answering service FAQs, maintenance schedules, news and support channels. Web-scraping ingestion pipeline, retrieval-augmented generation over a vector database, and agent orchestration with LangChain and LangGraph. Requests are routed across OpenAI, Anthropic and Gemini APIs, with low-complexity tasks delegated to locally hosted models to control inference cost. Integrated with WhatsApp messaging and OpenAI voice models.',
      tags: ['LangGraph', 'LangChain', 'RAG', 'Vector DB', 'OpenAI', 'Anthropic', 'Gemini', 'Local models', 'WhatsApp'],
      featured: true,
    },
    {
      title: 'Deep Learning & Computer Vision',
      subtitle: 'Detection · Classification · Segmentation',
      description:
        'Object detection, image classification and segmentation models built, trained and evaluated with Keras and PyTorch across several datasets.',
      tags: ['PyTorch', 'Keras', 'CNNs', 'Segmentation'],
      featured: false,
      icon: BrainCircuit,
    },
    {
      title: 'Musical Note Classification from Audio',
      subtitle: 'Spectrograms · CNNs · React demo',
      description:
        'Identifies musical notes in audio recordings: spectrogram extraction, convolutional networks trained on the spectrograms, and prediction on new recordings, with a React interface for the demo.',
      tags: ['Keras', 'CNNs', 'Audio', 'scikit-learn', 'React'],
      featured: false,
      icon: AudioWaveform,
    },
    {
      title: 'Motion-Sensor Signal Classification',
      subtitle: 'Time series · Deep learning',
      description:
        'Captures signals from motion sensors and classifies them for different purposes, from feature extraction to trained models, with a React demo interface.',
      tags: ['Keras', 'scikit-learn', 'Signals', 'React'],
      featured: false,
      icon: Activity,
    },
    {
      title: 'Analytics Dashboards',
      subtitle: 'Power BI · DAX',
      description:
        'Dashboards that integrate heterogeneous sources — SQL databases, Excel, unstructured data and Parquet — with dynamic visuals and near real-time refresh.',
      tags: ['Power BI', 'DAX', 'SQL', 'Parquet'],
      featured: false,
      icon: BarChart3,
    },
  ],

  repos: [
    {
      name: 'ML-CIDEIM',
      description: 'Undergrad thesis: predicting cutaneous leishmaniasis treatment response. Six data-augmentation techniques compared on imbalanced clinical data; 92% precision.',
      tags: ['Python', 'scikit-learn', 'SMOTE', 'GANs'],
      url: 'https://github.com/2203juan/ML-CIDEIM',
    },
    {
      name: 'learning_llms',
      description: 'From a local model with Ollama to provider APIs, a Gemini vs OpenAI comparator with web search, and a LangChain agent that calls tools.',
      tags: ['Python', 'LangChain', 'OpenAI', 'Gemini', 'Streamlit'],
      url: 'https://github.com/2203juan/learning_llms',
    },
    {
      name: 'gym-or-money',
      description: 'Telegram bot and mobile web app that tracks weekly workout goals and fines among friends.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Postgres'],
      url: 'https://github.com/2203juan/gym-or-money',
      live: 'https://gym-or-money.vercel.app',
    },
    {
      name: 'my-site',
      description: 'This site. React and TypeScript with a token-based theme, deployed to GitHub Pages by a GitHub Actions workflow.',
      tags: ['React', 'TypeScript', 'Vite', 'Tailwind'],
      url: 'https://github.com/2203juan/my-site',
    },
    {
      name: 'machine-learning-uao',
      description: 'M.Sc. machine learning coursework: EDA, preprocessing, classical models and evaluation.',
      tags: ['Python', 'scikit-learn', 'Jupyter'],
      url: 'https://github.com/2203juan/machine-learning-uao',
    },
    {
      name: 'terraform-demo',
      description: 'Infrastructure-as-code demo I built to teach a Terraform course.',
      tags: ['Terraform', 'IaC'],
      url: 'https://github.com/2203juan/terraform-demo',
    },
  ],

  education: [
    {
      degree: 'M.Sc. in Artificial Intelligence and Data Science',
      school: 'Universidad Autónoma de Occidente',
      place: 'Cali, Colombia',
      period: 'Expected 2027',
      detail: 'Machine learning, deep learning, LLMs, agentic systems and applied AI.',
    },
    {
      degree: 'B.Sc. in Systems Engineering and Computer Science',
      school: 'Pontificia Universidad Javeriana Cali',
      place: 'Cali, Colombia',
      period: '2022',
      detail: 'GPA 4.4 / 5.0. Excellence Award for Undergraduate Thesis.',
    },
  ],

  certifications: [
    'Microsoft Certified: Azure Fundamentals (AZ-900)',
    'Microsoft Certified: Azure AI Fundamentals (AI-900)',
    'Product Practitioner — Perficient',
    'Leadership Fundamentals — Perficient',
  ],

  recognition: [
    'Co-author of a published research article on machine learning applied to healthcare',
    'Excellence Award, Undergraduate Thesis in Computer Science — Pontificia Universidad Javeriana Cali',
  ],

  marquee: [
    'Azure', 'Kubernetes', 'Terraform', 'AKS', 'Helm', 'Istio', 'Calico',
    'Argo Rollouts', 'Azure DevOps', 'Splunk Cloud', 'Docker', 'Python',
    'LangGraph', 'RAG', 'APIM', 'Key Vault', 'GitHub Actions', 'Ansible',
  ],
};

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'AI Work', href: '#ai-work' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];
