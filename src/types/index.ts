export interface NavItem {
  label: string;
  href: string;
}

export type FeatureStatus = "available" | "coming-soon";

export interface FeatureItem {
  title: string;
  description: string;
  status: FeatureStatus;
}

export interface FeatureGroup {
  badge: string;
  icon: string;
  title: string;
  description: string;
  items: FeatureItem[];
}

export interface Step {
  number: number;
  icon: string;
  title: string;
  description: string;
}

export interface SecurityItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactMethod {
  icon: string;
  label: string;
  value: string;
  alt: string;
}

export interface FooterInfo {
  icon: string;
  label: string;
  value: string;
  alt: string;
}
