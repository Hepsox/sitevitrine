import { Testimonial } from './testimonial.interfaces';

interface ProjectImage {
  id: string;
  photo: string;
}

export interface Project {
  id: number;
  company: string;
  industry: string;
  projectType: string;
  description: string;
  goals: string;
  testimonials: Testimonial[];
  projectImages: ProjectImage[];
}
