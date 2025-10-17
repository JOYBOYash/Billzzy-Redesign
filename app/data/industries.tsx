// data/industries.ts

export interface Industry {
  id: string; // Used as the slug for dynamic routing
  title: string;
  subtitle: string; // New: for the small tag under the title
  description: string; // Short description for card/meta
  detailedDescription: string[]; // New: Array of paragraphs for the detailed page
  icon?: string; // Icon for the card and page header
  imageUrl: string; // New: Hero image for the detailed page
  altText: string; // New: Alt text for the hero image
  benefits: string[]; // New: List of benefits specific to this industry
  ctaText?: string; // Optional custom CTA text
}

export const industriesData: Industry[] = [
  {
    id: 'retail',
    title: 'Retail',
    subtitle: 'Streamline Your Store',
    description:
      'Billz streamlines inventory management, billing, and customer tracking for retail businesses, with built-in SMS notifications to keep customers updated from order to delivery.',
    detailedDescription: [
      'For retail businesses, Billz offers a comprehensive suite of tools to manage every aspect of your operations. From point-of-sale to sophisticated inventory tracking, ensure your products are always in stock and your customers are always satisfied.',
      'Automated SMS alerts keep buyers informed at every stage, from order confirmation to delivery, enhancing their experience and trust. Our intuitive interface allows you to track sales, manage returns, and gain valuable insights into customer behavior.',
      'Beyond transactions, Billz helps you build lasting customer relationships through personalized communication and efficient service.',
    ],
    icon: '/industries/retail.svg',
    imageUrl: '/industries/retail.svg', // Placeholder image
    altText: 'A modern retail store using a billing system',
    benefits: [
      'Efficient Inventory Control',
      'Integrated POS Solutions',
      'Automated Customer SMS Updates',
      'Comprehensive Sales Analytics',
      'Enhanced Customer Loyalty',
      'Reduced Operational Costs',
    ],
  },
  {
    id: 'logistics-delivery',
    title: 'Logistics & Delivery',
    subtitle: 'Optimize Your Shipments',
    description:
      'Integrate with courier services, generate tracking IDs, and provide automatic SMS updates to customers about their shipment status and delivery timeline.',
    detailedDescription: [
      'Power your logistics operations with Billz. Seamlessly integrate with major courier services to generate tracking IDs and labels directly from your dashboard. This eliminates manual errors and speeds up your dispatch process.',
      'Keep your customers fully in the loop with real-time, automated SMS notifications about their shipment status, expected delivery times, and successful deliveries. This proactive communication significantly reduces customer inquiries and improves overall satisfaction.',
      'Our robust system supports detailed tracking logs, delivery manifest management, and performance analytics to ensure every package reaches its destination efficiently.',
    ],
    icon: '/industries/logistics.svg',
    imageUrl: '/industries/logistics.svg', // Placeholder image
    altText: 'Logistics workers organizing packages for delivery',
    benefits: [
      'Seamless Courier Integration',
      'Automated Tracking & Labeling',
      'Real-time Customer Notifications',
      'Efficient Route Planning',
      'Reduced Delivery Errors',
      'Improved Customer Communication',
    ],
  },
  {
    id: 'small-businesses',
    title: 'Small Businesses',
    subtitle: 'Grow Your Enterprise',
    description:
      'Track sales, manage inventory, and analyze business performance through our comprehensive dashboard, helping small businesses make data-driven decisions.',
    detailedDescription: [
      'Billz is the ideal partner for small businesses looking to grow without the overhead of complex enterprise systems. Our intuitive dashboard provides a holistic view of your sales, inventory levels, and customer interactions, all in one place.',
      'Make informed decisions, identify growth opportunities, and streamline your daily operations with ease. We provide the tools you need to manage invoices, track expenses, and understand your financial health without requiring extensive training.',
      'Designed to scale with you, Billz ensures that as your business expands, your billing and management system keeps pace, providing reliable support every step of the way.',
    ],
    icon: '/industries/small-business.svg',
    imageUrl: '/industries/small-business.svg', // Placeholder image
    altText: 'Small business owner reviewing data on a tablet',
    benefits: [
      'Comprehensive Business Dashboard',
      'Simplified Sales & Expense Tracking',
      'User-Friendly Inventory Tools',
      'Actionable Business Insights',
      'Cost-Effective Operations',
      'Scalable Solutions',
    ],
  },
  {
    id: 'e-commerce',
    title: 'E-commerce',
    subtitle: 'Boost Your Online Sales',
    description:
      'Create professional online bills with tracking numbers, generate shipping labels, and automatically notify customers when orders are created, packed, and dispatched.',
    detailedDescription: [
      'Elevate your e-commerce experience with Billz. From the moment an order is placed to its final delivery, automate your billing, shipping label generation, and customer communication to ensure a smooth workflow.',
      'Ensure your customers receive timely SMS notifications at every key stage of their order – creation, packing, dispatch, and delivery. This transparency fosters trust, reduces "where is my order?" inquiries, and significantly lowers abandoned carts.',
      'Our platform seamlessly integrates with popular e-commerce platforms, providing a centralized system for managing online transactions, tracking inventory for digital storefronts, and optimizing your fulfillment process.',
    ],
    icon: '/industries/e-commerce.svg',
    imageUrl: '/industries/e-commerce.svg', // Placeholder image
    altText: 'E-commerce dashboard with product listings and sales data',
    benefits: [
      'Automated Order Processing',
      'Integrated Shipping Solutions',
      'Real-time Order Status SMS',
      'Enhanced Customer Experience',
      'Reduced Operational Load',
      'Seamless Platform Integration',
    ],
  },
];