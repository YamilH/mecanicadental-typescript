export enum SelectedPage {
  Home = "inicio",
  Experience = "experiencia",
  Works = "works",
  Faq = "preguntas frecuentes",
  Contact = "contact",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}