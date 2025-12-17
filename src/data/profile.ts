import { 
  Cloud, 
  Server, 
  Code2, 
  Terminal, 
  Activity, 
  Cpu, 
  Globe, 
  ShieldCheck,
  Zap,
  GitBranch,
  Database,
  Container,
  Award,
  BookOpen
} from 'lucide-react';

export const PROFILE = {
  name: "Juan Hoyos",
  role: "Senior DevOps & Cloud Engineer",
  headline: "Building resilient cloud infrastructure & AI-driven automation.",
  bio: "Senior DevOps Engineer with 5+ years of experience designing scalable Azure architectures. I specialize in Infrastructure as Code, Kubernetes, and SRE practices to accelerate delivery and reduce operational costs. Currently exploring the intersection of DevOps and AI to build smarter, self-healing systems.",
  email: "Juan.hoyosu@outlook.com",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com/in/hoyosjuan/",
  },
  skills: [
    {
      category: "Cloud & Infrastructure",
      icon: Cloud,
      items: ["Azure", "AWS", "Terraform", "Ansible", "Kubernetes", "Docker"]
    },
    {
      category: "CI/CD & DevOps",
      icon: GitBranch,
      items: ["Azure DevOps", "GitHub Actions", "Jenkins", "ArgoCD", "Helm"]
    },
    {
      category: "Development & Scripting",
      icon: Code2,
      items: ["Python", "Bash", "PowerShell", "C#", "Go"]
    },
    {
      category: "Observability & Security",
      icon: ShieldCheck,
      items: ["Azure Monitor", "Prometheus", "Grafana", "Prisma Cloud", "Entra ID"]
    }
  ],
  achievements: [
    {
      title: "Cloud Architecture",
      description: "Designed scalable, secure cloud-native architectures on Azure.",
      icon: Cloud
    },
    {
      title: "Deployment Velocity",
      description: "Reduced deployment time by 40% via optimized CI/CD pipelines.",
      icon: Zap
    },
    {
      title: "Cost Optimization",
      description: "Implemented auto-scaling and spot instances, cutting cloud costs by 25%.",
      icon: Activity
    },
    {
      title: "Reliability",
      description: "Achieved 99.99% uptime through robust SRE practices and monitoring.",
      icon: ShieldCheck
    }
  ],
  projects: [
    {
      title: "Azure DevOps Accelerator",
      description: "Created a template engine that bootstraps .NET microservices with full CI/CD pipelines in minutes, saving ~2 weeks of setup time per project.",
      tags: ["Azure DevOps", "Automation", ".NET"],
      link: "#"
    },
    {
      title: "Zero-Downtime K8s Rollouts",
      description: "Implemented Argo Rollouts for blue-green deployments, eliminating downtime during releases for critical financial services.",
      tags: ["Kubernetes", "ArgoCD", "Istio"],
      link: "#"
    },
    {
      title: "AI-Powered Health Prediction",
      description: "Developed a machine learning model achieving 92% accuracy in predicting treatment outcomes for tropical diseases.",
      tags: ["Python", "ML", "Healthcare"],
      link: "#"
    },
    {
      title: "Multi-Cloud DR Automation",
      description: "Built an automated audit and failover system for disaster recovery across AWS and Azure regions.",
      tags: ["Python", "AWS", "Azure"],
      link: "#"
    }
  ],
  experience: [
    {
      role: "Senior Cloud Engineer",
      company: "Vrize",
      period: "2025 – Present",
      description: "Leading cloud architecture and SRE initiatives. Focused on Azure optimization, Kubernetes scalability, and integrating AI into DevOps workflows."
    },
    {
      role: "Sr. DevOps Consultant",
      company: "Perficient (Automotive Client)",
      period: "2022 – 2025",
      description: "Orchestrated cloud-native releases for a global automotive finance platform. Implemented Terraform for IaC, managed AKS clusters, and established blue-green deployment strategies."
    },
    {
      role: "DevOps Consultant",
      company: "Perficient (Fleet Safety Client)",
      period: "2021 – 2022",
      description: "Automated disaster recovery compliance and enhanced observability using New Relic. Reduced incident response time by 50% through automated alerting."
    },
    {
      role: "Machine Learning Engineer",
      company: "Javeriana University",
      period: "2020 – 2022",
      description: "Researched and deployed ML models for healthcare applications. Published findings on predictive modeling for infectious diseases."
    }
  ]
};
