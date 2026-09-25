import type { ExperienceItem } from "@/types/portfolio";

export const experience: ExperienceItem[] = [
  {
    company: "Simplogics Solutions",
    location: "Technopark, Thiruvananthapuram, Kerala",
    role: "Software Engineer",
    period: "June 2024 — Present",
    summary:
      "Design and development of production-grade REST APIs and secure backend systems using Java, Spring Boot, PostgreSQL, and AWS, with frontend development in React.",
    points: [
      "Designed and developed scalable, production-grade RESTful APIs using Java 21 and Spring Boot for enterprise and healthcare platforms.",
      "Implemented secure authentication using Google OAuth2, JWT, and Spring Security with role-based access control.",
      "Designed asynchronous workflows using Amazon SQS and Amazon S3 for background processing and object storage.",
      "Optimized PostgreSQL queries and indexing, reducing API response times by over 30% for high-volume operations.",
      "Designed search APIs with Spring Data JPA Specifications, supporting pagination and sorting for 100k+ records.",
      "Improved bulk processing throughput by 25% through multithreading and concurrency optimization.",
      "Integrated third-party services including eBay, Shopee, Digio eKYC, WhatsApp Business API, and Epic FHIR R4.",
      "Automated build and deployment workflows with Jenkins CI/CD pipelines.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Flyway",
      "FHIR R4",
      "Amazon SQS",
      "Amazon S3",
      "React",
    ],
    projects: [
      {
        name: "SupaSellr",
        focus: "Marketplace integration",
        period: "2024 — 2025",
      },
      {
        name: "FinnBee",
        focus: "Financial distribution APIs",
        period: "2025 — 2026",
      },
      {
        name: "Empowered Home",
        focus: "FHIR and EMR integration",
        period: "2025 — 2026",
      },
      {
        name: "PicPura",
        focus: "Event media APIs",
        period: "2026",
      },
    ],
  },
];
