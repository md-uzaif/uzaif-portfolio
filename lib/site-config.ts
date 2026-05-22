import type { Metadata } from "next";

export const siteConfig: Metadata = {
  metadataBase: new URL("https://uzaiftechs.wuaze.com"),
  title: {
    default: "Uzaif | Java Full Stack Developer",
    template: "%s | Uzaif",
  },
  description:
    "Portfolio of Uzaif, a backend-focused Java Full Stack Developer and founder of Uzaif Tech Solutions.",
  keywords: [
    "Uzaif",
    "Java Full Stack Developer",
    "Java 8",
    "Spring Boot",
    "React",
    "HTML",
    "CSS",
    "WordPress",
    "Elementor",
    "Uzaif Tech Solutions",
    "Digi Help",
    "REST API",
    "Microservices",
    "Spring Security",
    "JWT",
    "MySQL",
    "JPA",
    "Hibernate",
    "AWS",
    "portfolio",
  ] as Array<string>,
  authors: {
    name: "Uzaif",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Uzaif | Java Full Stack Developer",
    description:
      "Backend-focused Java Full Stack Developer portfolio for Uzaif, founder of Uzaif Tech Solutions.",
    url: "/",
    siteName: "Uzaif",
  },
  twitter: {
    card: "summary",
    title: "Uzaif | Java Full Stack Developer",
    description:
      "Backend-focused Java Full Stack Developer portfolio for Uzaif, founder of Uzaif Tech Solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
} as const;
