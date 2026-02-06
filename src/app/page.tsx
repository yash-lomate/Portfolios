"use client";
import React from "react";
import { ParticleTextEffect } from "@/components/ui/interactive-text-particle";
import { FluidGlass } from "@/components/ui/fluid-glass";
import { GlareCard } from "@/components/ui/glare-card";
import { GlassIcon } from "@/components/ui/glass-icon";
import { Stack, StackItem } from "@/components/ui/stack";
import { Lanyard } from "@/components/ui/lanyard";
import Hyperspeed from "@/components/ui/hyperspeed";
import { hyperspeedPresets } from "@/components/ui/hyperspeed-presets";
import { Github, Linkedin, Mail, Code, Cpu, Database, Globe, Layers, Brain, Server, Cloud, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

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
      description: "Engineered a contactless fingerprint verification system using CNNs and Bezier-surface modeling. Implemented score-level fusion combining deep learning-based CNN descriptors with traditional minutiae-based features using TensorFlow. Achieved 93.75% accuracy across 10K+ fingerprint samples.",
      tech: ["Python", "TensorFlow", "OpenCV", "MLflow", "Git"],
    },
    {
      title: "Image Mosaic Reconstruction Engine",
      description: "Developed an image-processing pipeline that segments images into grids, classifies cells via intensity/color thresholds using PyTorch, and reconstructs mosaics from a curated tile dataset. Optimized with vectorized NumPy operations achieving 32x speedup. Evaluated using MSE/SSIM metrics across grid sizes (8x8 to 64x64).",
      tech: ["Python", "PyTorch", "NumPy", "Gradio", "Git"],
    },
    {
      title: "LLM-Powered Document Q&A System",
      description: "Built end-to-end RAG pipeline using LangChain and Hugging Face Transformers for intelligent document retrieval and question answering. Implemented semantic chunking and embedding generation with sentence-transformers; stored vectors in Pinecone for sub-100ms retrieval. Deployed on Azure with CI/CD pipeline.",
      tech: ["LangChain", "Hugging Face", "Pinecone", "Azure", "MLflow"],
    },
  ];

  const experience = [
    {
      role: "Research and Development Intern",
      company: "Speed Tech, Pune",
      period: "Oct 2024 - Apr 2025",
      description: "Designed and fine-tuned Generative AI and RAG models using TensorFlow, PyTorch, and OpenAI APIs. Collaborated with a 5-member cross-functional team. Implemented semantic vector search and AI-driven pipelines. Architected multi-agent AI system for Data Analytics, integrating NLP chatbots and automated data pipelines processing 10K+ daily transactions.",
    },
    {
      role: "Cloud Engineering Intern",
      company: "Thyssenkrupp Industrial Solutions, Mumbai",
      period: "Feb 2023 - Jul 2023",
      description: "Contributed to automating cloud resource provisioning across 3 global regions, reducing deployment time. Partnered with cloud engineers and security specialists to support global provisioning processes and build knowledge of cloud risk management, MFA, and resource optimization.",
    },
  ];

  const technologies = [
    { icon: <Brain className="h-8 w-8" />, name: "Gen AI" },
    { icon: <Layers className="h-8 w-8" />, name: "RAG" },
    { icon: <Code className="h-8 w-8" />, name: "Python" },
    { icon: <Cpu className="h-8 w-8" />, name: "TensorFlow" },
    { icon: <Terminal className="h-8 w-8" />, name: "PyTorch" },
    { icon: <Cloud className="h-8 w-8" />, name: "Azure" },
    { icon: <Server className="h-8 w-8" />, name: "AWS" },
    { icon: <Database className="h-8 w-8" />, name: "SQL" },
    { icon: <Globe className="h-8 w-8" />, name: "LangChain" },
    { icon: <Layers className="h-8 w-8" />, name: "Hugging Face" },
    { icon: <Code className="h-8 w-8" />, name: "C++" },
    { icon: <Globe className="h-8 w-8" />, name: "JavaScript" },
    { icon: <Terminal className="h-8 w-8" />, name: "MLflow" },
    { icon: <Database className="h-8 w-8" />, name: "Pinecone" },
  ];

  const certifications: StackItem[] = [
    {
      id: 1,
      content: (
        <div className="text-center">
          <h3 className="text-xl font-bold text-purple-400">Research Publication</h3>
          <p className="mt-2 text-neutral-400">Co-authored &quot;Contactless Fingerprint Verification Using CNN&quot;</p>
          <p className="mt-4 text-sm text-neutral-500">International Journal of Scientific Research and Engineering Development (IJSRED)</p>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="text-center">
          <h3 className="text-xl font-bold text-orange-400">Generative AI Fundamentals</h3>
          <p className="mt-2 text-neutral-400">Academy Accreditation — Databricks</p>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="text-center">
          <h3 className="text-xl font-bold text-pink-400">Python Course</h3>
          <p className="mt-2 text-neutral-400">GUVI — IITM Research Park</p>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="text-center">
          <h3 className="text-xl font-bold text-blue-400">MySQL Bootcamp</h3>
          <p className="mt-2 text-neutral-400">Noble Work Foundation</p>
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div className="text-center">
          <h3 className="text-xl font-bold text-green-400">Agile Metrics for Project Management</h3>
          <p className="mt-2 text-neutral-400">Udemy</p>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen text-white selection:bg-purple-500/30 relative">
      <div className="fixed inset-0 -z-10">
        <Hyperspeed effectOptions={hyperspeedPresets.one} />
      </div>
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ParticleTextEffect
            text="YASH LOMATE"
            colors={['ff6b6b', 'feca57', '48dbfb', '1dd1a1']}
            animationForce={30}
            particleDensity={10}
            className="opacity-80"
          />
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-500">
          Scroll to Explore
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-24">
        <GradientHeading>About Me</GradientHeading>
        <div className="mx-auto max-w-3xl text-center text-lg text-neutral-300 leading-relaxed">
          <p className="mb-4">
            Hi, I&apos;m Yash Lomate. I&apos;m currently pursuing my Master&apos;s in Artificial Intelligence. I am passionate about teaching computers to learn from data and make better decisions — like how people learn from experience.
          </p>
          <p className="mb-8">
            Passionate about AI/ML and graduate student with hands-on experience in generative AI, RAG systems, and deep learning model deployment.
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

      {/* Projects Section */}
      <section className="container mx-auto min-h-screen px-4 py-24">
        <GradientHeading>Projects</GradientHeading>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FluidGlass key={index} className="min-h-[300px]">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-4 text-neutral-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="rounded-full bg-white/10 px-3 py-1 text-xs text-purple-300">
                    {t}
                  </span>
                ))}
              </div>
            </FluidGlass>
          ))}
        </div>
      </section>

      {/* Experience Section */}
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

      {/* Technologies Section */}
      <section className="container mx-auto min-h-[50vh] px-4 py-24 overflow-hidden">
        <GradientHeading>Technologies</GradientHeading>
        <div className="relative mt-12 flex w-full overflow-hidden py-8">
          <div className="flex animate-marquee gap-12 whitespace-nowrap">
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <GlassIcon>{tech.icon}</GlassIcon>
                <span className="text-sm text-neutral-400 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="container mx-auto min-h-screen px-4 py-24 flex flex-col items-center">
        <GradientHeading>Certifications</GradientHeading>
        <div className="mt-12 w-full flex justify-center">
          <Stack items={certifications} />
        </div>
      </section>

      {/* Socials Section */}
      <section className="container mx-auto min-h-[50vh] px-4 py-24 flex flex-col items-center">
        <GradientHeading>Connect</GradientHeading>
        <div className="mt-12 flex gap-12">
          <Lanyard href="mailto:lomate.y@northeastern.edu">
            <Mail className="h-6 w-6 text-white" />
          </Lanyard>
          <Lanyard href="https://linkedin.com">
            <Linkedin className="h-6 w-6 text-white" />
          </Lanyard>
          <Lanyard href="https://github.com">
            <Github className="h-6 w-6 text-white" />
          </Lanyard>
        </div>
        <p className="mt-8 text-neutral-500">Yash Lomate | +1 (207) 408-3655</p>
      </section>
    </main>
  );
}
