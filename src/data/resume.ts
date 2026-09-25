export const education = [
  {
    credential: "B.Tech in Computer Science Engineering",
    institution: "Toc H Institute of Science & Technology",
    location: "Kochi, Kerala",
    period: "Aug 2020 — May 2024",
    result: "CGPA: 9.52",
  },
  {
    credential: "Class 12",
    institution: "Kendriya Vidyalaya No. 2, Naval Base",
    location: "Kochi, Kerala",
    period: "Apr 2019 — Mar 2020",
    result: "91.4% · CBSE",
  },
] as const;

export const resumeSkills = [
  { label: "Languages", value: "Java, SQL, Python" },
  { label: "Frameworks", value: "Spring Boot, Spring MVC, Hibernate, JPA" },
  { label: "Backend", value: "REST APIs, Multithreading, API Integrations, Concurrency" },
  { label: "Database", value: "PostgreSQL, Query Optimization, Indexing" },
  { label: "AI-Assisted Development", value: "ChatGPT, Cursor, Claude, Codex" },
  { label: "Cloud & Tools", value: "AWS (SQS, S3), Nginx, Git, Maven, Jenkins, IntelliJ IDEA, Postman" },
  { label: "Security", value: "Spring Security, OAuth2, JWT, RBAC" },
  { label: "API Documentation", value: "Swagger/OpenAPI" },
] as const;

export const resumeSummary =
  "Backend Java Developer with 2+ years of experience designing scalable, production-grade REST APIs and secure backend systems using Java, Spring Boot, PostgreSQL, and AWS. Proficient in OAuth2/JWT, multithreading, concurrency, CI/CD automation, and database query optimization. Experienced in leveraging AI-assisted development tools such as ChatGPT, Cursor, and Claude to accelerate development, optimize code, troubleshoot backend issues, and improve developer productivity.";

export const resumeExperience = {
  role: "Software Engineer",
  period: "June 2024 — Present",
  company: "Simplogics Solutions",
  location: "Technopark, Thiruvananthapuram, Kerala",
  points: [
    "Designed and developed scalable, production-grade RESTful APIs using Java 21 and Spring Boot for enterprise and healthcare platforms.",
    "Implemented secure authentication using Google OAuth2, JWT, and Spring Security with RBAC enforcement.",
    "Designed asynchronous event-driven workflows using AWS SQS and Amazon S3 to improve scalability and background job reliability.",
    "Optimized PostgreSQL queries and indexing strategies, reducing API response times by over 30% for high-volume backend operations.",
    "Designed dynamic search APIs with Spring Data JPA Specifications supporting pagination and sorting for 100k+ records.",
    "Improved bulk data processing throughput by 25% through multithreading and concurrency optimization.",
    "Integrated third-party services including eBay (SOAP/WSDL), Shopee, Digio eKYC, and WhatsApp Business API.",
    "Automated build, testing, and deployment workflows using Jenkins-based CI/CD pipelines, improving release consistency and deployment efficiency.",
    "Developed backend services to process FHIR healthcare data for AI-powered patient summaries.",
    "Leveraged AI-assisted development tools including ChatGPT, Cursor, and Claude to accelerate backend development, optimize SQL queries, troubleshoot Spring Boot applications, and streamline development workflows while ensuring production-quality code through manual review and testing.",
  ],
} as const;

export const resumeProjects = [
  {
    name: "Cricket Video Summarization Platform",
    stack: "Java, Spring Boot, Python",
    summary:
      "Developed JWT-secured REST APIs for an automated cricket video summarization platform, reducing processing latency by 30% through backend optimization.",
  },
  {
    name: "Event Photo Management Platform",
    stack: "Java, Spring Boot, Python",
    summary:
      "Engineered REST APIs integrating a Python face-recognition microservice for AI-powered event photo storage and selfie-based photo search.",
  },
] as const;

export const extracurricular =
  "Cricket — Represented Simplogics Solutions in the Technopark Premier League as Team Captain.";
