"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Brain, LineChart, GitBranch, Presentation, Cloud } from "lucide-react";
import Image from "next/image";



export default function HomePage() {
  const services = [
    { icon: BarChart3, title: "Data Analysis", desc: "Transforming raw data into actionable insights" },
    { icon: Brain, title: "Machine Learning", desc: "Models that predict, classify, and uncover patterns" },
    { icon: LineChart, title: "Time Series Forecasting", desc: "ARIMA, SARIMA, VAR, SARIMAX" },
    { icon: GitBranch, title: "Clustering & Segmentation", desc: "K-means & bisecting K-means from scratch" },
    { icon: Presentation, title: "Dashboarding", desc: "Power BI & Tableau with narrative storytelling" },
    { icon: Cloud, title: "Cloud + Automation", desc: "Azure DevOps, Python automation, ETL pipelines" },
  ];

  const projects = [
    {
      title: "Economic Forecasting of Poultry",
      desc: "Forecasted poultry market prices using ARIMA, SARIMA, and VAR with exogenous variables (CPI, avian flu). Achieved 84.5% accuracy to support supply chain decisions.",
    },
    {
      title: "Airbnb Clustering Analysis",
      desc: "Built K-means and bisecting K-means from scratch after PCA. Visualized clusters with radar and Folium maps for market segmentation insights.",
    },
    {
      title: "Market Basket Analysis Web App",
      desc: "Streamlit rule-mining app using a custom Apriori algorithm with full threshold control and lift-based ranking for non-technical users.",
    },
  ];

  const roadmap = [
    {
      period: "2017–2021",
      title: "Bachelors in Computer Science",
      blurb: "Built strong foundations in CS, algorithms, and cloud.",
      details: [
        "Linear Algebra & Calculus",
        "Discrete Mathematics",
        "Probability & Queueing Theory",
        "Data Structures",
        "Design & Analysis of Algorithms",
        "Database Management Systems",
        "Data Warehousing & Data Mining",
        "Artificial Intelligence",
        "Information Retrieval Techniques",
        "Cloud Computing",
      ],
    },
    {
      period: "2021–2023",
      title: "TCS",
      blurb: "Enterprise data & analytics delivery.",
      details: ["Azure", "ETL Development", "Power BI", "SQL", "DevOps"],
    },
    {
      period: "2023–2025",
      title: "Masters in Business Analytics (UTA)",
      blurb: "Advanced business analytics, forecasting, and data science.",
      details: [
        "Business Statistics",
        "Business & Economic Forecasting",
        "Cloud Computing Theory & Practice",
        "Data Mining",
        "Data Science",
        "Data Warehousing & BI",
        "Evidence-Based Management",
        "Measurement & Analysis for Business Decision Making",
        "Python Programming",
      ],
    },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="text-xl font-semibold tracking-tight">Ajey DS</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <a href="#roadmap" className="hover:underline underline-offset-4">Roadmap</a>
            <a href="#about" className="hover:underline underline-offset-4">About</a>
            <a href="#portfolio" className="hover:underline underline-offset-4">Portfolio</a>
            <a href="#projects" className="hover:underline underline-offset-4">Projects</a>
            <a
              href="/Ajey_Resume_Aug26.pdf"
              download
              className="ml-2"
              aria-label="Download resume as PDF"
            >
              <Button variant="outline" className="rounded-2xl">Download Resume</Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-14 items-center max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="space-y-5">
          <p className="text-gray-600 text-sm">I am</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Ajey Dhayashanker Loganathan</h1>
          <p className="text-gray-700 text-lg max-w-prose">
            Data science professional who creates data-driven solutions with purpose and precision.
          </p>
          <div className="flex gap-3">
            <a href="#projects">
              <Button className="rounded-2xl">My Projects</Button>
            </a>
            <a href="mailto:dhayashankerajey@gmail.com">
              <Button variant="outline" className="rounded-2xl">Contact Me</Button>
            </a>
          </div>
          <div className="flex flex-wrap gap-2 pt-2" aria-label="Skills">
            {["Python", "SQL", "Power BI", "Tableu", "AWS", "Azure", "Forecasting", "ML"].map((s) => (
              <Badge key={s} variant="secondary" className="rounded-2xl px-3 py-1 text-xs">{s}</Badge>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="w-full h-auto">
          <div className="relative w-full rounded-2xl overflow-hidden shadow">
            {/* aspect box keeps the portrait contained & clipped */}
            <div className="relative aspect-[4/5] md:aspect-[3/4]">
              <Image
                src="/Ajey.jpg"
                alt="Ajey Dhayashanker Loganathan"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </motion.div>
      </section>


      {/* Roadmap */}
      <section id="roadmap" className="px-6 py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-2">Roadmap</h2>
          <p className="text-center text-gray-600 mb-10">My journey across undergrad, TCS, and Masters.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmap.map((step, idx) => (
              <Card key={idx} className="rounded-2xl">
                <CardHeader>
                  <div className="text-sm text-gray-500">{step.period}</div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.blurb}</p>
                  <ul className="mt-4 list-disc list-inside text-gray-700 text-sm space-y-1">
                    {step.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-14 max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p>
          I’m Ajey Dhayashanker Loganathan — a Data Science and Business Analytics professional with a sharp eye for
          purpose, not just performance.
        </p>
        <p>
          With 3 years of hands-on experience in analytics and automation, I specialize in turning messy data into
          meaningful insight. My tools of choice: Python, SQL, Power BI, and cloud platforms like Azure. Beyond tools and
          code, I believe data should lead to clarity, not confusion.
        </p>
        <p>
          I’m pursuing a Master’s in Business Analytics at the University of Texas at Arlington (GPA 4.0) and working as a
          Graduate Teaching Assistant. My academic foundation supports a mindset focused on critical thinking,
          evidence-based decision-making, and statistical precision.
        </p>
        <p>
          I’ve helped British Airways streamline operations and co-founded a local business where I modernized everything
          from inventory to advertising — proving that impactful work isn’t limited to big brands.
        </p>
        <p>
          I thrive at the intersection where insights drive strategy and purpose meets progress.
        </p>
      </section>

      {/* Areas of Interest */}
      <section id="portfolio" className="px-6 py-14 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">Areas of Interest</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="mx-auto grid place-items-center h-12 w-12 rounded-full bg-gray-100">
                  <s.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold mt-3">{s.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-14 max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Card key={i} className="rounded-2xl overflow-hidden">
              <div className="h-44 w-full bg-gradient-to-br from-gray-100 to-gray-50" />
              <CardHeader>
                <CardTitle className="text-xl">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-14 max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="text-gray-600">Feel free to reach out via LinkedIn or email.</p>
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/ajeyds"
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
          >
            <Button variant="outline" className="rounded-2xl">LinkedIn</Button>
          </a>
          <a href="mailto:dhayashankerajey@gmail.com" aria-label="Send me an email">
            <Button variant="outline" className="rounded-2xl">Email Me</Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm py-8 border-t">
        © {new Date().getFullYear()} Ajey Dhayashanker Loganathan. Built with clarity, code, and purpose.
      </footer>
    </div>
  );
}

