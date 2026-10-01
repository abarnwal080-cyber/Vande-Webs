export interface AwardItem {
  id: string;
  title: string;
  date?: string;
  recipient?: string;
  images: string[];
  description: string;
  badge: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  hindiTitle: string;
  iconName: string;
  intro: string;
  images: string[];
  groups: {
    groupName: string;
    subgroups?: {
      subheading: string;
      items: string[];
    }[];
    items?: string[];
  }[];
}

export interface VideoItem {
  id: string;
  title: string;
  clientType: string;
  url: string;
  thumbnailPlaceholder?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
  avatarText: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  service: string;
  date: string;
  timeSlot: string;
  notes: string;
}
