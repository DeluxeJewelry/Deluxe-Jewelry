
export interface Product {
  id: string;
  name: string;
  category: 'Gold' | 'Diamond' | 'Watches' | 'Custom';
  price: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  content: string;
  date: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  rating: number;
  reviewCount: number;
  hours: string;
}
