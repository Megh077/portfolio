/**
 * Public profile details. Update links here — they are used across the site.
 * Leave linkedinUrl empty until a public profile URL is available.
 */
export const profile = {
  name: "Meghana S.",
  givenName: "Meghana",
  role: "Java Backend Developer",
  shortRole: "Software Engineer with experience in Java, Spring Boot, PostgreSQL, AWS, and React.",
  statement:
    "Software Engineer with 2+ years of experience designing scalable, production-grade REST APIs and secure systems using Java, Spring Boot, PostgreSQL, and AWS, with frontend development in React.",
  email: "meghanapkd@gmail.com",
  emailUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=meghanapkd@gmail.com",
  phone: "+91 9778321636",
  resumeUrl: "/Meghana_S_Java_Developer_Resume.pdf",
  githubUrl: "https://github.com/Megh077",
  linkedinUrl: "https://www.linkedin.com/in/meghana-s-8ba9a9226",
  heroTags: [
    { label: "Java", prominent: true },
    { label: "Spring Boot", prominent: true },
    { label: "PostgreSQL", prominent: false },
    { label: "AWS", prominent: false },
    { label: "React", prominent: false },
    { label: "REST APIs", prominent: false },
  ],
  focus: {
    primary: ["Java", "Spring Boot", "REST APIs", "PostgreSQL"],
    additional: ["React", "AWS"],
  },
} as const;
