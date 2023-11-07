export enum SelectedPage {
  Home = "inicio",
  Experience = "experiencia",
  Works = "works",
  Faq = "preguntasfrecuentes",
  Contact = "contact",
  Benefits = "Benefits"
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