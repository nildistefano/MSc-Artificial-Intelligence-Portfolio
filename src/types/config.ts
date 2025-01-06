import { defineCollection, z } from "astro:content";

export type NavBarLink = {
  title: string;
  url: string;
  external?: boolean;
};

export type SocialLink = {
  title: string;
  url: string;
  icon: string;
  external?: boolean;
};

export type Identity = {
  name: string;
  logo: string;
  email: string;
};

export type SEOInfo = {
  title: string;
  description: string;
  image: string;
};

export type HomePageContent = {
  seo: SEOInfo;
  role: string;
  description: string;
  socialLinks: SocialLink[];
  links: {
    title: string;
    url: string;
    external?: boolean;
  }[];
};

export type ResumeItem = {
  title: string;
  company: {
    name: string;
  };
  date: string;
};

export type AboutPageContent = {
  seo: SEOInfo;
  subtitle: string;
  about: {
    description: string;
    image_l: {
      url: string;
      alt: string;
    };
    image_r: {
      url: string;
      alt: string;
    };
  };

  work: {
    description: string;
    items: ResumeItem[];
  };

  studies: {
    description: string;
    items: ResumeItem[];
  };
  
  connect: {
    description: string;
    links: SocialLink[];
  };
};

export type ProjectPageContent = {
  seo: SEOInfo;
  subtitle: string;
  projects: Project[];
};

export type BlogPageContent = {
  seo: SEOInfo;
  subtitle: string;
};

export type Project = {
  title: string;
  description: string;
  link: string; 
};

export type Module = {
  title: string;
  description: string;
  slug: string;
  year: string;
  month: string;
  projects: Project[];
};

export type ModulesPageContent = {
  seo: SEOInfo;
  subtitle: string;
  modules: Module[];
};

export type ModulePageContent = {
  seo: SEOInfo;
  subtitle: string;
  modules: Project[];
};