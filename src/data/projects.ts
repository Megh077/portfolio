import type { Project } from "@/types/portfolio";

/**
 * Public case studies. Add a project by appending an object.
 * Keep descriptions free of credentials, hostnames, and client-confidential detail.
 */
export const projects: Project[] = [
  {
    slug: "empowered-home",
    title: "Empowered Home",
    shortTitle: "Empowered Home",
    domain: "Healthcare & Interoperability",
    summary:
      "Production Spring Boot services for remote care, including Epic FHIR R4 retrieval and real-time clinical updates.",
    contribution: "backend",
    contributionLabel: "Backend development",
    period: "2025 — 2026",
    overview:
      "Empowered Home supports care coordination and remote monitoring. The backend provides enrollment, patient, clinician, vitals, notification, and access-control APIs, and exchanges clinical data with an electronic medical record through FHIR R4.",
    challenge:
      "Clinical data must be retrieved from the EMR, mapped into an internal model, and tracked independently of the source system. Vital updates require a real-time channel rather than repeated polling.",
    role: "Developed the Spring Boot service on Java 21 with PostgreSQL, including REST APIs, persistence, Epic FHIR mapping, activity audit logging, and WebSocket integration for real-time updates.",
    contributions: [
      {
        title: "Backend",
        items: [
          "Developed Epic EMR integration that retrieves FHIR R4 data, including Patient, Observation, Coverage, AllergyIntolerance, Immunization, MedicationDispense, CarePlan, and DocumentReference resources.",
          "Mapped those payloads into the application model so EMR fields stay isolated from the rest of the API.",
          "Extended REST endpoints for patients, enrollment, clinicians, vitals, and access control.",
          "Added activity audit logging around clinical and administrative actions.",
          "Integrated a WebSocket client used to exchange vital and clinical updates with a real-time data service.",
          "Implemented Flyway migrations for the PostgreSQL schema.",
        ],
      },
    ],
    architecture: {
      title: "Care API and clinical systems",
      caption: "",
      steps: [
        {
          nodes: [{ label: "Care applications", detail: "Consume the REST API" }],
        },
        {
          nodes: [
            {
              label: "Spring Boot API",
              detail: "Java 21 · JWT · role-based access",
            },
          ],
        },
        {
          nodes: [{ label: "PostgreSQL", detail: "Flyway migrations" }],
        },
        {
          nodes: [
            { label: "Epic FHIR R4", detail: "Clinical data retrieval" },
            { label: "Real-time data service", detail: "WebSocket updates" },
          ],
        },
      ],
    },
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "PostgreSQL",
      "Flyway",
      "FHIR R4",
      "JWT",
      "WebSocket",
      "Maven",
    ],
    engineeringHighlights: [
      {
        title: "FHIR at the API boundary",
        body: "Epic responses are mapped from dedicated DTOs into internal records. Raw FHIR documents are not passed through the public API.",
      },
      {
        title: "Observable EMR synchronization",
        body: "Retrieval status is stored in PostgreSQL, so synchronization progress can be tracked without querying the EMR for every status check.",
      },
      {
        title: "Real-time clinical updates",
        body: "A WebSocket integration delivers near-real-time vital and clinical updates, separate from the FHIR calls used to retrieve a clinical record.",
      },
    ],
    featured: true,
    showInArchitecture: true,
  },
  {
    slug: "marketplace-integration",
    title: "SupaSellr",
    shortTitle: "SupaSellr",
    domain: "E-commerce & Marketplace Integrations",
    summary:
      "Backend platform that synchronizes catalog, inventory, and shipping data with Shopee and eBay.",
    contribution: "backend",
    contributionLabel: "Backend development",
    period: "2024 — 2025",
    overview:
      "SupaSellr is a multi-marketplace seller platform. The backend manages stores, products, categories, inventory, shipping configuration, and the publish lifecycle for listings on external marketplaces.",
    challenge:
      "Shopee and eBay model products, categories, and shipping differently. Catalog synchronization is long-running and cannot be completed within a single HTTP request.",
    role: "Developed REST APIs, PostgreSQL schema changes, and the Shopee and eBay integration layer, including queued synchronization on Amazon SQS.",
    contributions: [
      {
        title: "Backend",
        items: [
          "Implemented Shopee and eBay services for product generation, listing updates, category attributes, and shipping channels.",
          "Published long-running sync and generation work to Amazon SQS and recorded progress in PostgreSQL.",
          "Built REST APIs for products, stores, categories, inventory, and sync operations.",
          "Extended Flyway migrations for catalog, shipping, and sync-state tables.",
          "Isolated marketplace payloads behind mapper classes so the public API model remains stable.",
        ],
      },
    ],
    architecture: {
      title: "API, queue, and marketplace adapters",
      caption: "",
      steps: [
        { nodes: [{ label: "API clients", detail: "Store and catalog operations" }] },
        { nodes: [{ label: "Spring Boot API", detail: "Java 21 · JWT" }] },
        {
          nodes: [
            { label: "PostgreSQL", detail: "Catalog, inventory, sync state" },
            { label: "Amazon SQS", detail: "Generation and sync jobs" },
          ],
        },
        {
          nodes: [
            { label: "Queue listeners", detail: "Process sync work" },
            { label: "Amazon S3", detail: "Product media" },
          ],
        },
        {
          nodes: [
            { label: "Shopee API", detail: "Catalog and shipping" },
            { label: "eBay API", detail: "Listings and policies" },
          ],
        },
      ],
    },
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Data JPA",
      "PostgreSQL",
      "Flyway",
      "Amazon SQS",
      "Amazon S3",
      "REST APIs",
      "OAuth",
      "Maven",
    ],
    engineeringHighlights: [
      {
        title: "Dedicated marketplace adapters",
        body: "Shopee and eBay are integrated through separate services and mappers. Category attributes, shipping channels, and listing requests remain in those adapters.",
      },
      {
        title: "Asynchronous catalog synchronization",
        body: "Product generation and store synchronization are published to Amazon SQS. Progress is recorded in PostgreSQL so clients can query status without waiting on the marketplace call.",
      },
      {
        title: "Channel-specific shipping",
        body: "eBay logistics data and Shopee shipping channels are stored and synchronized separately, because the two platforms do not share a shipping model.",
      },
    ],
    featured: true,
    showInArchitecture: true,
  },
  {
    slug: "picpura",
    title: "PicPura",
    shortTitle: "PicPura",
    domain: "Event Photography",
    summary:
      "Event photography platform. Developed the Spring Boot API for events, media, and organizations.",
    contribution: "backend",
    contributionLabel: "Backend development",
    period: "2026",
    overview:
      "PicPura supports organizers, photographers, and guests for events and photo galleries. The backend is a Spring Boot API with PostgreSQL. Web and desktop clients consume the API, and image processing runs in a separate Python worker.",
    challenge:
      "Upload, face search, and archive generation cannot complete inside the request that registers a photo. The API must store the file, persist metadata, and hand processing to a worker while keeping a consistent contract for every client.",
    role: "Developed REST APIs, PostgreSQL schema changes, Amazon S3 presigned uploads, and dispatch of image processing to a Python worker.",
    contributions: [
      {
        title: "Backend",
        items: [
          "Developed REST APIs for events, images, organizations, and related workflows, secured with JWT and role checks.",
          "Evolved the PostgreSQL schema with Flyway.",
          "Implemented Amazon S3 presigned URLs so clients transfer media directly to object storage.",
          "Dispatched image work to a Python worker over HTTP or Amazon SQS, including processing and ZIP archive jobs.",
          "Configured messaging notifications used by the platform.",
        ],
      },
    ],
    architecture: {
      title: "Clients, API, storage, and worker",
      caption: "",
      steps: [
        {
          nodes: [
            { label: "Web clients", detail: "Organisation and admin" },
            { label: "Electron uploader", detail: "Desktop" },
          ],
        },
        {
          nodes: [{ label: "Spring Boot API", detail: "REST · JWT · Java 21" }],
        },
        {
          nodes: [
            { label: "PostgreSQL", detail: "Flyway" },
            { label: "Amazon S3", detail: "Presigned URLs" },
          ],
        },
        {
          nodes: [{ label: "HTTP or Amazon SQS", detail: "Image and ZIP jobs" }],
        },
        {
          nodes: [
            {
              label: "Python worker",
              detail: "Processing, face search, archives",
            },
          ],
        },
        { nodes: [{ label: "Amazon S3", detail: "Processed media" }] },
      ],
    },
    technologies: [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "Flyway",
      "Amazon S3",
      "Amazon SQS",
      "Python",
    ],
    engineeringHighlights: [
      {
        title: "One API for every client",
        body: "Organisation, admin, and desktop clients call a single Spring Boot API and authenticate with a bearer token.",
      },
      {
        title: "Presigned uploads",
        body: "Clients upload through presigned Amazon S3 URLs. The API records metadata and then dispatches processing, so image registration is separate from face search and archive generation.",
      },
      {
        title: "Worker dispatch over HTTP or SQS",
        body: "The API invokes the Python worker over HTTP or Amazon SQS. Archive downloads use a separate queue. PostgreSQL remains the system of record.",
      },
      {
        title: "Jenkins delivery pipelines",
        body: "Jenkins pipelines build the API and deploy the worker to a Linux host. Implementation work covered the application code those pipelines deliver.",
      },
    ],
    featured: true,
    showInArchitecture: true,
  },
  {
    slug: "financial-distribution",
    title: "FinnBee",
    shortTitle: "FinnBee",
    domain: "Financial Distribution",
    summary:
      "Spring Boot backend for a sales hierarchy covering leads, products, commissions, payouts, and document storage.",
    contribution: "backend",
    contributionLabel: "Backend development",
    period: "2025 — 2026",
    overview:
      "FinnBee is a financial product distribution platform. The backend models sales managers, relationship managers, and distributors, and tracks leads, product assignment, commissions, and payouts.",
    challenge:
      "Each role requires a different view of the same lead and commission data. Documents must be stored durably, administrators require exports, and access must follow the sales hierarchy.",
    role: "Developed services, REST APIs, JWT authentication, Amazon S3 document storage, Excel exports, and Flyway migrations.",
    contributions: [
      {
        title: "Backend",
        items: [
          "Developed APIs and services for sales managers, relationship managers, distributors, leads, products, commissions, and payouts.",
          "Implemented stateless JWT authentication and role-based access for the hierarchy.",
          "Stored uploaded documents in Amazon S3 and exposed upload and download through the API.",
          "Generated commission Excel exports for administrators.",
          "Maintained the PostgreSQL schema with Flyway migrations.",
        ],
      },
    ],
    architecture: {
      title: "Role-based API and stored documents",
      caption:
        "Architecture overview. An external eKYC provider is part of the platform. The engineering work covered distribution, leads, commissions, and storage.",
      steps: [
        {
          nodes: [{ label: "Role-based clients", detail: "Admin, managers, distributors" }],
        },
        {
          nodes: [{ label: "Spring Boot API", detail: "Java 21 · JWT · method security" }],
        },
        {
          nodes: [{ label: "PostgreSQL", detail: "Flyway" }],
        },
        {
          nodes: [
            { label: "Amazon S3", detail: "Lead documents" },
            { label: "Excel export", detail: "Commission reports" },
          ],
        },
      ],
    },
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "PostgreSQL",
      "Flyway",
      "Amazon S3",
      "JWT",
      "Apache POI",
      "Maven",
    ],
    engineeringHighlights: [
      {
        title: "Role-based access",
        body: "Sales managers, relationship managers, distributors, and administrators are distinct roles. Method security restricts list and update operations to the appropriate role.",
      },
      {
        title: "Lead status history",
        body: "Status changes are stored separately from the lead record, so the API can return submission history without overloading the lead entity.",
      },
      {
        title: "Document storage on Amazon S3",
        body: "File content is stored in Amazon S3. PostgreSQL retains the metadata required to list documents and authorize downloads.",
      },
    ],
    featured: true,
    showInArchitecture: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getArchitectureProjects(): Project[] {
  return projects.filter((project) => project.showInArchitecture);
}
