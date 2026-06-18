import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://tanishk-jain.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tanishk Jain | Software Engineer & AI Automation Engineer",
    template: "%s | Tanishk Jain",
  },
  description:
    "Software Engineer and AI Automation Engineer specializing in AI agents, LLM workflows, prompt engineering, root cause analysis, and intelligent automation. Building production-grade AI systems with Java, Python, and the Model Context Protocol.",
  keywords: [
    "Tanishk Jain",
    "Software Engineer",
    "AI Engineer",
    "AI Automation Engineer",
    "AI Coding Contributor",
    "Prompt Engineer",
    "AI Evaluator",
    "AI Trainer",
    "Outlier AI",
    "Scale AI",
    "Turing",
    "Invisible Technologies",
    "MCP",
    "Model Context Protocol",
    "Claude AI",
    "LLM",
    "Java",
    "Python",
    "Selenium",
    "Infor",
  ],
  authors: [{ name: "Tanishk Jain" }],
  creator: "Tanishk Jain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Tanishk Jain | Software Engineer & AI Automation Engineer",
    description:
      "Software Engineer building AI agents, LLM workflows, and intelligent automation. Expertise in AI evaluation, prompt engineering, and root cause analysis.",
    siteName: "Tanishk Jain Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanishk Jain | Software Engineer & AI Automation Engineer",
    description:
      "Software Engineer building AI agents, LLM workflows, and intelligent automation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#050509",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tanishk Jain",
  url: SITE_URL,
  jobTitle: "Software Engineer & AI Automation Engineer",
  email: "mailto:tjtanishkjain0009@gmail.com",
  telephone: "+91-7852837166",
  worksFor: {
    "@type": "Organization",
    name: "Infor",
  },
  sameAs: [
    "https://www.linkedin.com/in/tanishk-jain-3b0779225/",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "AI Agents",
    "Model Context Protocol",
    "Large Language Models",
    "Prompt Engineering",
    "AI Evaluation",
    "Root Cause Analysis",
    "Software Engineering",
    "Java",
    "Python",
    "Automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
