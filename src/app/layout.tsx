import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import { getSiteUrl, siteDescription } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Meghana S. | Java Backend Developer",
    template: "%s · Meghana S.",
  },
  description: siteDescription,
  applicationName: "Meghana S.",
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    "Java Backend Developer",
    "Spring Boot",
    "REST APIs",
    "PostgreSQL",
    "FHIR",
    "AWS",
    "React",
    "Meghana S.",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: profile.name,
    title: "Meghana S. | Java Backend Developer",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Meghana S. | Java Backend Developer",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: profile.email,
  url: siteUrl,
  sameAs: [profile.githubUrl, profile.linkedinUrl].filter(Boolean),
  knowsAbout: [
    "Java",
    "Spring Boot",
    "REST APIs",
    "PostgreSQL",
    "FHIR",
    "Amazon Web Services",
    "React",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
