export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  businessName?: string;
  entityType: string;
  serviceNeeded: string;
  message?: string;
  preferredContact: 'phone' | 'email';
}

export interface HeroImageConfig {
  imageUrl: string;
  isBackgroundMode: boolean;
  opacity: number;
  altText: string;
  architecturalStyle: string;
}
