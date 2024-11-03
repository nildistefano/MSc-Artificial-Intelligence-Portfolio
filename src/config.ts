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
  logo: "/MSc-Artificial-Intelligence-Portfolio/NilDistefanoBW.jpg",
  email: "disnil7@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/MSc-Artificial-Intelligence-Portfolio/",
  },
  {
    title: "About",
    url: "/MSc-Artificial-Intelligence-Portfolio/about",
  },
  {
    title: "Master's Modules",
    url: "/MSc-Artificial-Intelligence-Portfolio/modules",
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
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/nildistefano/",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:disnil7@gmail.com",
    icon: "mdi:email",
  }
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
      url: "about",
    },
    {
      title: "Master's Modules",
      url: "modules",
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
    description: `I'm Nil Distefano, a dedicated Data Engineer with a passion for artificial intelligence. 
      I'm currently pursuing a Master's degree in Artificial Intelligence at the University of Essex Online. 
      My expertise lies in data engineering, machine learning, and Python programming. 
      I'm committed to staying up-to-date with the latest advancements in the field and utilizing data-driven approaches to solve complex problems.`,
    image_l: {
      url: "/MSc-Artificial-Intelligence-Portfolio/profile-1.jpg",
      alt: "Profile Picture",
    },
    image_r: {
      url: "/MSc-Artificial-Intelligence-Portfolio/profile-2.jpg",
      alt: "Professional Picture",
    },
  },
  work: {
    description: `I have experience in data engineering and AI, working with diverse tools and technologies. Here are some of my roles and accomplishments.`,
    items: [
      {
        title: "Data Engineer & AI Specialist",
        company: {
          name: "Veolia group, AGBAR - Synectic",
        },
        date: "August 2024 - Present",
      },
      {
        title: "Junior Data Analyst",
        company: {
          name: "CNEX AIE",
        },
        date: "August 2023 - July 2024",
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
