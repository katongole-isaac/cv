import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Isaac Katongole",
  initials: "IK",
  location: "Kampala, Uganda, EAT",
  locationLink: "https://www.google.com/maps/place/kampala",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      Frontend-focused Full Stack Engineer specializing in high-performance
      React/Nextjs applications, scalable Node.js services, and real-time
      collaboration. Experienced in cloud-native tools like Firebase, AWS,
      Docker and Ngnix.
    </>
  ),
  avatarUrl:
    "https://avatars.githubusercontent.com/u/87535414?s=400&u=088b584acfd7e432d602f04b3b5803e4db9211f3&v=4",
  personalWebsiteUrl: "https://katongole-isaac.github.io/",
  contact: {
    email: "katongolelsaac78@gmail.com",
    tel: "+256705465771",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/katongole-isaac",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/katongole-isaac/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/zac_codes",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Makerere University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2019",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Fiftyskills",
      link: "https://fiftyskills.com/",
      badges: [
        "Freelancer/Upwork",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Firebase",
      ],
      title: "Fullstack Developer",
      logo: ConsultlyLogo,
      start: "",
      end: "2025",
      description: (
        <>
          React developer migrating a Vanilla JS and CSS website to a Next.js
          App Router architecture
          <ul className="list-inside list-disc">
            <li>
              Integrated Firebase authentication into a Next.js App Router
              project for secure user login{" "}
            </li>
            <li>
              Refactored legacy Vanilla JS code into reusable React components
              for improved scalability
            </li>
            <li>
              Enhanced performance by optimizing images and animations with lazy
              loading
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Sum1 Investments",
      link: "https://sum1investments.co.za/",
      badges: ["Freelancer/Remote", "React", "TypeScript", "Firebase"],
      title: "Frontend Developer",
      logo: ParabolLogo,
      start: "",
      end: "2025",
      description: (
        <>
          Frontend Developer to fix bugs and implement new calculation logic for
          stokvels
          <ul className="list-inside list-disc">
            <li>
              Implement new calculation logic for stokvels account in both user
              and admin dashboards
            </li>
            <li>
              Refactored code and built features for admins to view results
              based on updated stokvel calculations.
            </li>
            <li>
              Implemented CI/CD pipelines using GitHub Actions workflows to
              automate deployment to firebase.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Stratcom Limited",
      link: "https://www.facebook.com/stratcomug/",
      badges: ["On-Site", "React", "TypeScript", "Node.js"],
      title: "Software Engineer",
      logo: ClevertechLogo,
      start: "",
      end: "2023",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Developed an intuitive UI with Tailwind CSS and Next.js, enhancing
              SEO.
            </li>
            <li>
              Pioneered API redesign from long polling to WebSockets with
              Socket.io and WebRTC, enabling real-time communication.
            </li>
            <li>
              Configured Nginx as a load balancer and reverse proxy with SSL
              certificates to secure backend servers on AWS Lightsail.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Azimuth Inc.",
      link: "#",
      badges: ["Freelancer/Remote", "React", "Mapbox", "Typescript"],
      title: "Frontend Developer",
      logo: JojoMobileLogo,
      start: "",
      end: "2023",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Migrated a PHP web portal to React.js integrating KeplerGL and
              Mapbox.
            </li>
            <li>
              Implemented data caching with Redux to minimize redundant data
              fetching and optimizing bandwidth.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Makerere AI Labs",
      link: "https://air.ug/",
      badges: ["On Site", "Node.js", "Docker", "Typescript"],
      title: "Full Stack Developer Intern",
      logo: NSNLogo,
      start: "",
      end: "2020",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Gained expertise in Dockerizing full-stack apps with Docker and
              Docker Compose.
            </li>
            <li>
              Collaborated in a Scrum team to review code, identify bugs, and
              implement effective fixes.
            </li>
            <li>
              Redesigned the backend using Test-Driven Development (TDD) with
              Node.js (Express) and Jest to ensure reliable functionality and
              comprehensive test coverage.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "React/Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Docker/Docker-compose",
    "Node.js/Express",
    "MongoDB",
    "Restful APIs",
    "AWS",
    "Firebase",
    "WebRTC",
    "WebSockets",
  ],
  projects: [
    {
      title: "Web Apps",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "Restful APIs",
        "WebRTC",
        "Redux",
        "Tailwind CSS",
        "AWS",
        "Firebase",
      ],
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              <a
                href="https://blog-seven-wine-40.vercel.app/"
                rel="noreferrer noopener"
                target="_blank"
                className="hover:underline"
              >
                Blog Site
              </a>
            </li>
            <li>
              <a
                href="https://games-ashen-eight.vercel.app/"
                rel="noreferrer noopener"
                target="_blank"
                className="hover:underline"
              >
                Games API
              </a>
            </li>
            <li>
              <a
                href="https://dashboard-livid-one.vercel.app/"
                rel="noreferrer noopener"
                target="_blank"
                className="hover:underline"
              >
                Dashboard Example
              </a>
            </li>
            <li>
              <a
                href="https://forex-sessions-clock.vercel.app/"
                rel="noreferrer noopener"
                target="_blank"
                className="hover:underline"
              >
                Forex Session Clock
              </a>
            </li>
          </ul>
        </>
      ),
      logo: ConsultlyLogo,
    },
    {
      title: "APIs",
      techStack: [
        "TypeScript",
        "Next.js",
        "MongoDB",
        "Jest",
        "Docker/Docker-compose",
        "Websocket",
        "JWT",
        "Restful APIs",
      ],
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              <a
                href="https://github.com/katongole-isaac/we-chat-server"
                rel="noreferrer noopener"
                target="_blank"
                className="hover:underline"
              >
                Chatroom Server
              </a>
            </li>
            <li>
              <a
                href="https://github.com/katongole-isaac/e-shop-server"
                rel="noreferrer noopener"
                target="_blank"
                className="hover:underline"
              >
                E-shop Server
              </a>
            </li>

            <li>
              <a
                href="https://github.com/katongole-isaac/uptime-backend"
                rel="noreferrer noopener"
                target="_blank"
                className="hover:underline"
              >
                Uptime Backend
              </a>
            </li>

            <li>
              <a
                href="https://github.com/katongole-isaac/userApi"
                rel="noreferrer noopener"
                target="_blank"
                className="hover:underline"
              >
                User&apos;s API
              </a>
            </li>
          </ul>
        </>
      ),
      logo: MonitoLogo,
    },
    {
      title: "Landing Pages",
      techStack: [
        "TypeScript",
        "React",
        "Next.js",
        "Light House",
        "Tailwindcss",
      ],
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              <a
                href="https://singh-delta.vercel.app/"
                rel="noreferrer noopener"
                target="_blank"
                className="hover:underline"
              >
                India client&pos;s landing page
              </a>
            </li>
            <li>
              <a
                href="https://majestic-chebakia-058f9d.netlify.app/"
                rel="noreferrer noopener"
                target="_blank"
                className="hover:underline"
              >
                Gaman landing page
              </a>
            </li>
            <li>
              <a
                href="https://katongole-isaac.github.io/easybank/"
                rel="noreferrer noopener"
                target="_blank"
                className="hover:underline"
              >
                Easybank Assignment
              </a>
            </li>
            <li>
              <a
                href="https://katongole-isaac.github.io/bookmark/"
                rel="noreferrer noopener"
                target="_blank"
                className="hover:underline"
              >
                Bookmark Assignment
              </a>
            </li>
          </ul>
        </>
      ),
      logo: MonitoLogo,
    },
  ],
} as const;
