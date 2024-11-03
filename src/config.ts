import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  HomePageContent,
  ModulePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Nil Distefano",
  logo: "/profile.jpg",
  email: "disnil7@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Master's Modules",
    url: "/modules",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/nildistefano",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:disnil7@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Nil Distefano - Master's Portfolio",
    description:
      "Portfolio of Nil Distefano, Data Engineer and AI enthusiast, created as part of the Master's program in AI at the University of Essex.",
    image: identity.logo,
  },
  role: "Data Engineer & AI Enthusiast",
  description:
    "I'm Nil Distefano, a Data Engineer with a passion for artificial intelligence, currently building this portfolio as part of my Master's degree in AI.",
  socialLinks: socialLinks,
  links: [
    {
      title: "About Me",
      url: "/about",
    },
    {
      title: "Master's Modules",
      url: "/modules",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Nil Distefano",
    description:
      "Learn more about Nil Distefano, Data Engineer and Master's student specializing in AI.",
    image: identity.logo,
  },
  subtitle: "A little about myself",
  about: {
    description: `
I'm Nil Distefano, a Data Engineer specializing in AI integration and development. Currently, I'm pursuing a Master's in Artificial Intelligence at the University of Essex online, and this portfolio showcases projects and research related to my studies.
<br/><br/>
In addition to my professional and academic interests, I enjoy playing basketball and the drums in my free time. My background includes a degree in mathematics and data science, which fuels my current focus on AI-driven projects.`,
    image_l: {
      url: "/profile-1.jpg",
      alt: "Profile Picture",
    },
    image_r: {
      url: "/profile-2.jpg",
      alt: "Professional Picture",
    },
  },
  work: {
    description: `I have experience in data engineering and AI, working with diverse tools and technologies. Here are some of my roles and accomplishments.`,
    items: [
      {
        title: "Data Engineer",
        company: {
          name: "Current Company",
          image: "/logo.webp",
          url: "https://current-company.com",
        },
        date: "2023 - Present",
      },
      {
        title: "AI Development Intern",
        company: {
          name: "AI Lab",
          image: "/logo.webp",
          url: "https://ai-lab.com",
        },
        date: "2021 - 2023",
      },
    ],
  },
  connect: {
    description: `I'm always open to connecting with others in the tech and AI communities. Reach out to me on any of the platforms below.`,
    links: socialLinks,
  },
};

// Modules (/modules)
export const modulesPageContent: ModulePageContent = {
  seo: {
    title: "Master's Modules | Nil Distefano",
    description: "Explore detailed content from each module in my Master's program in AI.",
    image: identity.logo,
  },
  subtitle: "Master's Modules Overview",
  modules: [
    {
      title: "Machine Learning",
      description: "A deep dive into the world of machine learning.",
      image: "/machine-learning.jpg", // Replace with the actual image path
      year: "2023",
      projects: [
        {
          title: "Predictive Model for Customer Churn",
          description: "Built a predictive model to identify customers at risk of churning.",
          image: "/churn-model.png", // Replace with the actual image path
          url: "https://github.com/nildistefano/churn-model",
          year: "2001"
        },
        // ... other projects
      ],
    },
    // ... other modules
  ],
};
