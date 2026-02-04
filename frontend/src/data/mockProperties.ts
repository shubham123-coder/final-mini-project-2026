export interface Property {
  id: string;
  title: string;
  type: 'apartment' | 'room' | 'pg';
  price: number;
  location: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  description: string;
  amenities: string[];
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  available: boolean;
  furnishing: 'furnished' | 'semi-furnished' | 'unfurnished';
}

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Spacious 2BHK Apartment in Downtown',
    type: 'apartment',
    price: 9500,
    location: 'Koramangala',
    city: 'Bangalore',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
    ],
    description: 'Beautiful 2BHK apartment with modern amenities, perfect for families or working professionals. Located in the heart of Koramangala with easy access to malls, restaurants, and metro.',
    amenities: ['Parking', 'Gym', 'Security', 'Power Backup', 'Lift', 'Water Supply'],
    ownerName: 'Rajesh Kumar',
    ownerPhone: '+91 98765 43210',
    ownerEmail: 'rajesh@email.com',
    available: true,
    furnishing: 'semi-furnished'
  },
  {
    id: '2',
    title: 'Cozy Single Room in PG',
    type: 'pg',
    price: 8000,
    location: 'HSR Layout',
    city: 'Bangalore',
    bedrooms: 1,
    bathrooms: 1,
    area: 150,
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800'
    ],
    description: 'Comfortable PG accommodation with all meals included. Ideal for students and young professionals. Clean, safe environment with 24/7 security.',
    amenities: ['Meals Included', 'Wi-Fi', 'AC', 'Laundry', 'Security', 'Housekeeping'],
    ownerName: 'Priya Sharma',
    ownerPhone: '+91 98765 43211',
    ownerEmail: 'priya@email.com',
    available: true,
    furnishing: 'furnished'
  },
  {
    id: '3',
    title: 'Comfortable 3BHK with City View',
    type: 'apartment',
    price: 10000,
    location: 'Indiranagar',
    city: 'Bangalore',
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800'
    ],
    description: 'Comfortable 3BHK apartment with stunning city views. Spacious rooms and modern amenities. Perfect for families and working professionals.',
    amenities: ['Swimming Pool', 'Gym', 'Club House', 'Parking', 'Security', 'Power Backup', 'Lift', 'Garden'],
    ownerName: 'Amit Patel',
    ownerPhone: '+91 98765 43212',
    ownerEmail: 'amit@email.com',
    available: true,
    furnishing: 'furnished'
  },
  {
    id: '4',
    title: 'Affordable 1BHK for Students',
    type: 'apartment',
    price: 7000,
    location: 'BTM Layout',
    city: 'Bangalore',
    bedrooms: 1,
    bathrooms: 1,
    area: 600,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800'
    ],
    description: 'Budget-friendly 1BHK apartment perfect for students and young professionals. Close to colleges and tech parks.',
    amenities: ['Parking', 'Security', 'Water Supply'],
    ownerName: 'Sunita Reddy',
    ownerPhone: '+91 98765 43213',
    ownerEmail: 'sunita@email.com',
    available: true,
    furnishing: 'unfurnished'
  },
  {
    id: '5',
    title: 'Comfortable PG for Women',
    type: 'pg',
    price: 9000,
    location: 'Whitefield',
    city: 'Bangalore',
    bedrooms: 1,
    bathrooms: 1,
    area: 200,
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
    ],
    description: 'Safe and comfortable PG exclusively for women. All modern amenities, delicious home-cooked meals, and friendly environment.',
    amenities: ['Meals Included', 'Wi-Fi', 'AC', 'Laundry', 'Security', 'Housekeeping', 'Study Room', 'Common Area'],
    ownerName: 'Lakshmi Iyer',
    ownerPhone: '+91 98765 43214',
    ownerEmail: 'lakshmi@email.com',
    available: true,
    furnishing: 'furnished'
  },
  {
    id: '6',
    title: 'Shared Room in Tech Hub',
    type: 'room',
    price: 6000,
    location: 'Electronic City',
    city: 'Bangalore',
    bedrooms: 1,
    bathrooms: 1,
    area: 100,
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800'
    ],
    description: 'Shared accommodation near major IT companies. Cost-effective solution for professionals. Clean and well-maintained.',
    amenities: ['Wi-Fi', 'Power Backup', 'Security', 'Common Kitchen'],
    ownerName: 'Vijay Kumar',
    ownerPhone: '+91 98765 43215',
    ownerEmail: 'vijay@email.com',
    available: true,
    furnishing: 'semi-furnished'
  }
];
