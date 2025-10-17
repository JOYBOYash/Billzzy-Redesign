// types.ts
export interface Industry {
  id: string; // Unique identifier, also used for the slug in the URL
  title: string;
  description: string;
  icon?: string; // Optional: path to an icon for each industry
}

export const industriesData: Industry[] = [
  {
    id: 'retail',
    title: 'Retail',
    description:
      'Billz streamlines inventory management, billing, and customer tracking for retail businesses, with built-in SMS notifications to keep customers updated from order to delivery.',
    icon: '/industries/retail.svg', // Example icon path
  },
  {
    id: 'logistics-delivery',
    title: 'Logistics & Delivery',
    description:
      'Integrate with courier services, generate tracking IDs, and provide automatic SMS updates to customers about their shipment status and delivery timeline.',
    icon: '/industries/logistics.svg',
  },
  {
    id: 'small-businesses',
    title: 'Small Businesses',
    description:
      'Track sales, manage inventory, and analyze business performance through our comprehensive dashboard, helping small businesses make data-driven decisions.',
    icon: '/industries/small-business.svg',
  },
  {
    id: 'e-commerce',
    title: 'E-commerce',
    description:
      'Create professional online bills with tracking numbers, generate shipping labels, and automatically notify customers when orders are created, packed, and dispatched.',
    icon: '/industries/e-commerce.svg',
  },
];