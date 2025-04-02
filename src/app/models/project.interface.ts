interface ProjectImage {
  id: string;
  photo: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  comment: string;
  photo: string;
  borderColor: string;
}

export interface Project {
  id: number;
  isVisibleOnProjectsPage: boolean;
  slug: string;
  company: string;
  duration: string;
  industry: string;
  projectType: string;
  description: string;
  results: string;
  testimonials: Testimonial[];
  projectImages: ProjectImage[];
}
