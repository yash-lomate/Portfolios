"use client";
import React, { lazy, Suspense } from "react";
import { ParticleTextEffect } from "@/components/ui/interactive-text-particle";
import { FluidGlass } from "@/components/ui/fluid-glass";
import { GlareCard } from "@/components/ui/glare-card";
import { OrbitingTech } from "@/components/ui/orbiting-tech";
import { Lanyard } from "@/components/ui/lanyard";
import { hyperspeedPresets } from "@/components/ui/hyperspeed-presets";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Cpu,
  Database,
  Globe,
  Layers,
  Brain,
  Server,
  Cloud,
  Terminal,
  Download,
  ExternalLink,
  Award,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Hyperspeed = lazy(() => import("@/components/ui/hyperspeed"));

const GradientHeading = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h2
    className={cn(
      "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-4xl font-bold text-transparent animate-gradient-x md:text-6xl mb-12 text-center",
      className
    )}
  >
    {children}
  </h2>
);

export default function Home() {
  const projects = [
    {
      title: "Contactless Fingerprint Verification System",
      description:
        "Engineered a contactless fingerprint verification system using CNNs and Bezier-surface modeling. Implemented score-level fusion combining deep learning-based CNN descriptors with traditional minutiae-based features using TensorFlow. Achieved 93.75% accuracy across 10K+ fingerprint samples.",
      tech: ["Python", "TensorFlow", "OpenCV", "MLflow", "Git"],
      repo: "https://github.com/yashlomate",
    },
    {
      title: "Image Mosaic Reconstruction Engine",
      description:
        "Developed an image-processing pipeline that segments images into grids, classifies cells via intensity/color thresholds using PyTorch, and reconstructs mosaics from a curated tile dataset. Optimized with vectorized NumPy operations achieving 32x speedup. Evaluated using MSE/SSIM metrics across grid sizes (8x8 to 64x64).",
      tech: ["Python", "PyTorch", "NumPy", "Gradio", "Git"],
      repo: "https://github.com/yashlomate",
    },
    {
      title: "LLM-Powered Document Q&A System",
      description:
        "Built end-to-end RAG pipeline using LangChain and Hugging Face Transformers for intelligent document retrieval and question answering. Implemented semantic chunking and embedding generation with sentence-transformers; stored vectors in Pinecone for sub-100ms retrieval. Deployed on Azure with CI/CD pipeline.",
      tech: ["LangChain", "Hugging Face", "Pinecone", "Azure", "MLflow"],
      repo: "https://github.com/yashlomate",
    },
  ];

  const experience = [
    {
      role: "Research and Development Intern",
      company: "Speed Tech, Pune",
      period: "Oct 2024 - Apr 2025",
      description:
        "Designed and fine-tuned Generative AI and RAG models using TensorFlow, PyTorch, and OpenAI APIs. Collaborated with a 5-member cross-functional team. Implemented semantic vector search and AI-driven pipelines. Architected multi-agent AI system for Data Analytics, integrating NLP chatbots and automated data pipelines processing 10K+ daily transactions.",
    },
    {
      role: "Cloud Engineering Intern",
      company: "Thyssenkrupp Industrial Solutions, Mumbai",
      period: "Feb 2023 - Jul 2023",
      description:
        "Contributed to automating cloud resource provisioning across 3 global regions, reducing deployment time. Partnered with cloud engineers and security specialists to support global provisioning processes and build knowledge of cloud risk management, MFA, and resource optimization.",
    },
  ];

  const techCategories = [
    {
      label: "Languages",
      color: "#f472b6",
      items: [
        { icon: <Code className="h-6 w-6" />, name: "Python" },
        { icon: <Code className="h-6 w-6" />, name: "C++" },
        { icon: <Database className="h-6 w-6" />, name: "SQL" },
        { icon: <Globe className="h-6 w-6" />, name: "JavaScript" },
      ],
    },
    {
      label: "ML Frameworks",
      color: "#a78bfa",
      items: [
        { icon: <Cpu className="h-6 w-6" />, name: "TensorFlow" },
        { icon: <Terminal className="h-6 w-6" />, name: "PyTorch" },
        { icon: <Layers className="h-6 w-6" />, name: "Hugging Face" },
      ],
    },
    {
      label: "LLM / GenAI",
      color: "#38bdf8",
      items: [
        { icon: <Brain className="h-6 w-6" />, name: "Gen AI" },
        { icon: <Layers className="h-6 w-6" />, name: "RAG" },
        { icon: <Globe className="h-6 w-6" />, name: "LangChain" },
        { icon: <Database className="h-6 w-6" />, name: "Pinecone" },
      ],
    },
    {
      label: "Cloud & DevOps",
      color: "#34d399",
      items: [
        { icon: <Cloud className="h-6 w-6" />, name: "Azure" },
        { icon: <Server className="h-6 w-6" />, name: "AWS" },
        { icon: <Terminal className="h-6 w-6" />, name: "Git" },
        { icon: <Terminal className="h-6 w-6" />, name: "MLflow" },
      ],
    },
  ];

  const certifications = [
    {
      title: "Research Publication",
      description:
        'Co-authored "Contactless Fingerprint Verification Using CNN" — proposed a hybrid fingerprint-verification model using CNNs, Bezier surfaces, and score-level fusion.',
      source: "International Journal of Scientific Research and Engineering Development (IJSRED)",
      icon: <BookOpen className="h-6 w-6" />,
      color: "purple",
    },
    {
      title: "Generative AI Fundamentals",
      description: "Academy Accreditation — Databricks",
      source: "Databricks",
      icon: <Award className="h-6 w-6" />,
      color: "orange",
    },
    {
      title: "Python Course",
      description: "GUVI — IITM Research Park",
      source: "GUVI",
      icon: <Award className="h-6 w-6" />,
      color: "pink",
    },
    {
      title: "MySQL Bootcamp",
      description: "Noble Work Foundation",
      source: "Noble Work Foundation",
      icon: <Award className="h-6 w-6" />,
      color: "blue",
    },
    {
      title: "Agile Metrics for Project Management",
      description: "Udemy",
      source: "Udemy",
      icon: <Award className="h-6 w-6" />,
      color: "green",
    },
  ];

  const certColorMap: Record<string, string> = {
    purple: "text-purple-400 border-purple-500/30 bg-purple-500/5",
    orange: "text-orange-400 border-orange-500/30 bg-orange-500/5",
    pink: "text-pink-400 border-pink-500/30 bg-pink-500/5",
    blue: "text-blue-400 border-blue-500/30 bg-blue-500/5",
    green: "text-green-400 border-green-500/30 bg-green-500/5",
  };

  /* Reduce Hyperspeed preset for performance */
  const litePreset = {
    ...hyperspeedPresets.one,
    totalSideLightSticks: 8,
    lightPairsPerRoadWay: 15,
    lanesPerRoad: 2,
    fov: 90,
    movingAwaySpeed: [40, 60] as [number, number],
    movingCloserSpeed: [-80, -120] as [number, number],
  };

  return (
    <main className="min-h-screen text-white selection:bg-purple-500/30 relative">
      {/* ── Top Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/40 border-b border-white/5">
        <span className="text-lg font-bold tracking-wide bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Yash Lomate
        </span>
        <a
          href="/YashLomateResume.pdf"
          download
          className="flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 transition-all hover:bg-purple-500/20 hover:border-purple-400/60"
        >
          <Download className="h-4 w-4" />
          Resume
        </a>
      </nav>

      {/* ── Background (lazy + lite preset) ── */}
      <div className="fixed inset-0 -z-10">
        <Suspense fallback={<div className="h-full w-full bg-black" />}>
          <Hyperspeed effectOptions={litePreset} />
        </Suspense>
      </div>

      {/* ── Hero Section ── */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ParticleTextEffect
            text="YASH LOMATE"
            colors={["ff6b6b", "feca57", "48dbfb", "1dd1a1"]}
            animationForce={30}
            particleDensity={12}
            className="opacity-80"
          />
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-500">
          Scroll to Explore
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="container mx-auto px-4 py-24">
        <GradientHeading>About Me</GradientHeading>
        <div className="mx-auto max-w-3xl text-center text-lg text-neutral-300 leading-relaxed">
          <p className="mb-4">
            Hi, I&apos;m Yash Lomate. I&apos;m currently pursuing my Master&apos;s in Artificial Intelligence at Northeastern University. I am passionate about teaching computers to learn from data and make better decisions — like how people learn from experience.
          </p>
          <p className="mb-8">
            Graduate student with hands-on experience in generative AI, RAG systems, and deep learning model deployment.
          </p>
          <div className="grid gap-6 md:grid-cols-2 text-left">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-purple-400 mb-2">Northeastern University</h3>
              <p className="text-white">Master of Science in Artificial Intelligence</p>
              <p className="text-sm text-neutral-400">Sep 2025 - Present | GPA: 4.0/4.0</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-pink-400 mb-2">Savitribai Phule Pune University</h3>
              <p className="text-white">B.E. in Computer Engineering — D.Y. Patil College of Engineering</p>
              <p className="text-sm text-neutral-400">Sep 2020 - Jul 2024 | GPA: 3.55/4.0</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects Section ── */}
      <section className="container mx-auto min-h-screen px-4 py-24">
        <GradientHeading>Projects</GradientHeading>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FluidGlass key={index} className="min-h-[300px] flex flex-col">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-4 text-neutral-300 flex-1">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="rounded-full bg-white/10 px-3 py-1 text-xs text-purple-300">
                    {t}
                  </span>
                ))}
              </div>
              {/* Repository link */}
              <div className="mt-4 flex justify-end">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300 transition-all hover:bg-white/10 hover:text-white hover:border-white/20"
                >
                  <Github className="h-3.5 w-3.5" />
                  Repository
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </FluidGlass>
          ))}
        </div>
      </section>

      {/* ── Experience Section ── */}
      <section className="container mx-auto min-h-screen px-4 py-24">
        <GradientHeading>Experience</GradientHeading>
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <GlareCard key={index}>
              <div className="flex flex-col justify-between md:flex-row md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-purple-400 font-semibold">{exp.company}</p>
                </div>
                <p className="text-sm text-neutral-500">{exp.period}</p>
              </div>
              <p className="text-neutral-300 leading-relaxed">{exp.description}</p>
            </GlareCard>
          ))}
        </div>
      </section>

      {/* ── Technologies Section (Orbiting Circles by Category) ── */}
      <section className="container mx-auto px-4 py-24">
        <GradientHeading>Technologies</GradientHeading>
        <OrbitingTech categories={techCategories} className="mt-12" />
      </section>

      {/* ── Certifications Section (Separate Cards) ── */}
      <section className="container mx-auto px-4 py-24">
        <GradientHeading>Certifications &amp; Accomplishments</GradientHeading>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={cn(
                "rounded-2xl border p-6 backdrop-blur-sm transition-all hover:scale-[1.02]",
                certColorMap[cert.color]
              )}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className={cn("rounded-lg p-2 bg-white/5", `text-${cert.color}-400`)}>
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{cert.title}</h3>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">{cert.description}</p>
              <p className="mt-3 text-xs text-neutral-500">{cert.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Connect Section ── */}
      <section className="container mx-auto min-h-[50vh] px-4 py-24 flex flex-col items-center">
        <GradientHeading>Connect</GradientHeading>
        <div className="mt-12 flex gap-12">
          <Lanyard href="mailto:lomate.y@northeastern.edu">
            <Mail className="h-6 w-6 text-white" />
          </Lanyard>
          <Lanyard href="https://www.linkedin.com/in/yash-lomate">
            <Linkedin className="h-6 w-6 text-white" />
          </Lanyard>
          <Lanyard href="https://github.com/yashlomate">
            <Github className="h-6 w-6 text-white" />
          </Lanyard>
        </div>
        <p className="mt-8 text-neutral-500">lomate.y@northeastern.edu</p>
      </section>
    </main>
  );
}
