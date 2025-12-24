
import { Product, Testimonial, BusinessInfo } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'DELUXE JEWELRY',
  address: '1 Awka Street, D-Line, Port Harcourt 500001, Rivers State, Nigeria',
  phone: '0816 428 3142',
  rating: 5.0,
  reviewCount: 8,
  hours: 'Open · Closes 5:30 PM'
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: '18k Cuban Link Chain',
    category: 'Gold',
    price: 'Contact for Quote',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
    description: 'Exquisite 18k solid gold Cuban link, hand-polished for a mirror finish.'
  },
  {
    id: '2',
    name: 'Presidential Diamond Watch',
    category: 'Watches',
    price: 'Price on Request',
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800',
    description: 'A masterpiece of precision, encrusted with VVS diamonds.'
  },
  {
    id: '3',
    name: 'Rose Gold Eternity Ring',
    category: 'Diamond',
    price: 'Premium Pricing',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
    description: 'Elegant rose gold band adorned with seamless brilliant-cut diamonds.'
  },
  {
    id: '4',
    name: 'Custom Signature Pendant',
    category: 'Custom',
    price: 'Bespoke',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b1a30a5af4?auto=format&fit=crop&q=80&w=800',
    description: 'Your vision, our craftsmanship. Pure gold custom lettering.'
  },
  {
    id: '5',
    name: 'VVS Diamond Studs',
    category: 'Diamond',
    price: 'Contact for Quote',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
    description: 'Perfectly matched VVS clarity diamonds in white gold settings.'
  },
  {
    id: '6',
    name: 'Gold Figarope Bracelet',
    category: 'Gold',
    price: 'Contact for Quote',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
    description: 'Classic texture meets modern luxury. Durable solid 22k gold.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Chidi Okoro',
    rating: 5,
    content: 'The best jewelry store in Port Harcourt. Authentic gold and exceptional service. I bought my wedding rings here and couldn\'t be happier.',
    date: '2 months ago'
  },
  {
    id: 't2',
    name: 'Amaka Williams',
    rating: 5,
    content: 'Deluxe Jewelry is truly deluxe. The staff is professional and the quality of their diamond pieces is unmatched in the city.',
    date: '1 month ago'
  },
  {
    id: 't3',
    name: 'Tunde Bakare',
    rating: 5,
    content: 'Fast delivery to Lagos and the packaging was premium. Highly recommend for anyone looking for investment-grade gold.',
    date: '3 weeks ago'
  }
];
