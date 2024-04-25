export interface TeamMember {
  firstName: string;
  lastName: string;
  title: string;
  description: string[];
  imageLink: string;
  gitHubLink: string;
  linkedInLink: string;
}

export interface CaseStudy {
  id: string;
  projectName: string;
  tagLine: string;
  description: string;
  organizationName: string;
  websiteLink: string;
  gitHubLink: string;
  imageLink: string;
  featureLink: string;
  downloadLink: string;
  testimonials?: Testimonial[];
}

export interface Testimonial {
  name: string;
  title?: string;
  quote: string;
  link?: string;
  caseStudy?: CaseStudy;
}

export interface Capability {
  title: string;
  description: string;
  icon_url: string;
}

export interface BrandValue {
  id: string;
  title: string;
  description: string;
  icon_url: string;
}
