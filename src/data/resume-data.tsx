import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Sergio Jovani",
  initials: "SJ",
  location: "Barcelona, Spain",
  locationLink: "https://www.google.com/maps/place/Barcelona,+Spain/",
  about:
    "Chief Technology Officer, commited to building high-quality cost-efficient software solutions through inspirational leadership and team empowerment.",
  summary:
    "As a Chief Technology Officer with more than 15 years of experience in software engineering, my expertise lies in building high-quality software solutions by leading and empowering teams, creating a nurturing and collaborative atmosphere. Passionate about technology, I am constantly seeking new challenges and dedicated to ongoing learning in team-oriented environments.",
  avatarUrl: "https://avatars.githubusercontent.com/u/841257?v=4",
  personalWebsiteUrl: "https://sergiojovani.com",
  contact: {
    email: "hi@sergiojovani.com",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sjovanig",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sergiojovani",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/sjovanig",
        icon: XIcon,
      },
    ],
  },
  work: [
    {
      company: "Erika Lust",
      link: "https://erikalust.com",
      location: "Barcelona, Spain",
      badges: [],
      title: "Chief Technology Officer",
      start: "June 2022",
      end: "Present",
      intro: "Erika Lust is a global sex-positive ethical adult entertainment lifestyle and tech company that produces original movies and provides worldwide top-notch streaming services.",
      description:
        "As the CTO, I lead a team of 8 engineers, focusing on nurturing their growth and integrating innovative technologies. My role involves strategic implementation of advanced cost-effective solutions to enhance system scalability, performance, and security, while aligning technology with business goals. I also promote best practices in software development, fostering a culture of excellence within the team.",
        highlights: "Nuxt, Laravel, AWS, CloudFlare, Kubernetes, Testing (Cypress, Pest), CI/CD (GitHub Actions), MySQL, Varnish, Redis, GTM, BigQuery, DBT, AirByte, AI (SageMaker, Bedrock), IaC (Helm, Terraform), Observability (Prometheus, Grafana, Sentry), CRM (Ometria), Mobile Apps (Kotlin, Swift)"
    },
    {
      company: "Cognizant",
      link: "https://cognizant.com",
      location: "Barcelona, Spain",
      badges: ["Remote"],
      title: "Technical Lead - Senior Manager",
      start: "April 2021",
      end: "June 2022",
      note: "Client: Dufry (Switzerland)",
      intro: "Dufry is a global retailer with stores in airports and other locations. Their ecommerce platform mainly provides a reserve and pick up service, mostly used by travelers, and a home delivery service available in some locations. It is based on Adobe Commerce and integrates a middleware based on Laravel.",
      description:
        "As the technical lead, I am drove the engineering teams (12 engineers) of the ecommerce platform to build high-quality software using the best practices. Working closely with stakeholders and collaborating in the functional and technical definition, I also ensured that the delivered solutions met the client's expectations and that guaranteed the modularity and scalability of the architecture.",
      highlights: "Adobe Commerce (2.x), Laravel (Horizon), AWS, Akamai, Akeneo, Dynamics 365, MySQL, Varnish, Elasticsearch, DynamoDB, Lambda, Jenkins"
    },
    {
      company: "ISDIN",
      link: "https://isdin.com",
      location: "Barcelona, Spain",
      badges: [],
      title: "Software Architect",
      start: "August 2019",
      end: "April 2021",
      intro: "ISDIN is a pharmaceutical company that was experiencing a great and fast international expansion. Their application architecture was based on legacy non-scalable applications that were not aligned with the expected business growth.",
      description:
        "As the digital architect, I defined, planned and executed the new application architecture roadmap based on the migration of monolithic applications to microservices and headless solutions, supporting the engineering teams (+15 engineers) to adopt the best practices, and collaborating with stakeholders, UX and data teams.",
      highlights: "Magento (1.x, 2.x), Salesforce Commerce Cloud, Symfony, Laravel, Drupal (7.x), WordPress, TypeScript, React, Express, Next.js, NestJS, ElasticSearch, MySQL, PostgreSQL, DynamoDB, Redis, Docker, AWS, Jenkins, Cypress, React Testing Library, Jest, Google Optimize"
    },
    {
      company: "The Etailers",
      link: "https://theetailers.com",
      location: "Barcelona, Spain",
      badges: [],
      title: "Software Architect",
      start: "June 2017",
      end: "August 2019",
      intro: "The Etailers is an ecommerce agency specialized in Magento that provides B2B and B2C solutions.",
      description:
        "As the software architect, I defined and promoted a new approach for Magento development best practices and helped the engineering team (5 engineers) in their adoption, providing technical leadership and also writing code.",
      highlights: "Magento (1.x, 2.x), Salesforce Commerce Cloud, Symfony, Laravel, Drupal (7.x), WordPress, TypeScript, React, Express, Next.js, NestJS, ElasticSearch, MySQL, PostgreSQL, DynamoDB, Redis, Docker, AWS, Jenkins, Cypress, React Testing Library, Jest, Google Optimize"
    },
    {
      company: "Mecalux",
      link: "https://mecalux.com",
      location: "Barcelona, Spain",
      badges: [],
      title: "Senior Software Engineer",
      start: "March 2017",
      end: "June 2017",
      intro: "Mecalux is one of the leading warehouse storage companies worldwide. Their B2C ecommerce platform offers smart and innovative storage solutions.",
      description:
        "As the only software engineer expert in Magento in the company, I worked on the maintenance and implementation of new features in the ecommerce platform based on Magento 1.x, collaborating with other teams.",
      highlights: "Magento 1.x, MySQL, Redis, Jenkins, Docker, SonarQube, Selenium, ElasticSearch"
    },
    {
      company: "Freelance @ Comunic-art",
      link: "http://comunic-art.com",
      location: "Barcelona, Spain",
      badges: [],
      title: "Full-Stack Software Engineer",
      start: "June 2009",
      end: "February 2017",
      intro: "Comunic-art was an agency that provided small-medium size web solutions.",
      description:
        "As the main technical partner and full-stack software engineer, I implemented and delivered several software solutions built with Magento and Drupal working closely with the clients and collaborating with some other freelances.",
      highlights: "Magento (1.x, 2.x), Drupal (6.x, 7.x, 8.x), MySQL, Varnish, Redis, Jenkins, Docker"
    },
    {
      company: "PYMAS Parquet",
      location: "Valencia, Spain",
      badges: [],
      title: "IT Manager",
      start: "February 2005",
      end: "August 2008",
      intro: "PYMAS Parquet was a company dedicated to selling parquet and other wood related products.",
      description:
        "As the IT Manager, I was responsible for the IT infrastructure, I worked on the implementation of a new corporate website and participated in the digitalization of logistics and commercial processes.",
      highlights: "PHP, MySQL, CSS"
    },
  ],
  skills: [
    "Software Architecture",
    "Software Engineering",
    "Technical Leadership",
    "Team Management",
    "Mentoring",
    "Agile Methodologies",
    "Cloud Computing",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Vue/Nuxt.js",
    "PHP",
    "Magento",
    "Laravel",
    "Node.js",
  ]
} as const;
