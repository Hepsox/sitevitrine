interface ProjectImage {
  id: string;
  photo: string;
}

interface Description {
  title: string;
  text: string;
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
  description: Description[];
  results: string;
  testimonials: Testimonial[];
  projectImages: ProjectImage[];
}
