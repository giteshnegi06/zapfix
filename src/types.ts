export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  items: string[];
  iconType: 'residential' | 'panel' | 'backup' | 'smart' | 'maintenance' | 'industrial';
  popular?: boolean;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  title: string;
  stat: string;
  content: string;
}

export interface BookingFormData {
  serviceId: string;
  serviceName: string;
  date: string;
  timeSlot: string;
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  urgency: 'routine' | 'urgent' | 'emergency';
  notes: string;
}
