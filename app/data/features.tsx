// data/features.ts
export interface Feature {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string[]; // Array of paragraphs for detailed description
  imageUrl: string;
  altText: string;
  caseStudy: {
    title: string;
    summary: string;
    link: string; // Link to a separate case study page or a section on this page
  };
  benefits: string[];
}

export const features: Feature[] = [
  {
    slug: 'order-confirmation-automation',
    title: 'Order Confirmation Automation',
    subtitle: 'Streamline your order processing.',
    description: 'Instantly confirm orders and reduce errors with automated confirmations.',
    detailedDescription: [
      'Our advanced system automatically verifies incoming orders against your inventory and customer data, ensuring accuracy from the moment an order is placed.',
      'This automation drastically cuts down on manual review time, accelerating your order fulfillment cycle and improving customer satisfaction through prompt updates.'
    ],
    imageUrl: '/features/orders.svg',
    altText: 'Laptop with a checkmark for order confirmation',
    caseStudy: {
      title: 'Case Study: Speedy Orders Inc.',
      summary: 'Speedy Orders Inc. saw a 40% reduction in order processing time and a 15% decrease in customer support inquiries related to order status after implementing our automation.',
      link: '/case-studies/speedy-orders-inc'
    },
    benefits: [
      'Reduced manual effort and human error',
      'Faster order processing times',
      'Improved customer satisfaction',
      'Better inventory management'
    ]
  },
  {
    slug: 'automatic-amount-confirmation',
    title: 'Automatic Amount Confirmation',
    subtitle: 'Ensure financial accuracy with ease.',
    description: 'Automatically verify amounts to avoid discrepancies and manual checks.',
    detailedDescription: [
      'This feature is critical for financial accuracy, automatically cross-referencing transaction amounts with expected values to flag any inconsistencies immediately.',
      'It eliminates the tedious process of manual reconciliation, saving countless hours and preventing costly financial errors.'
    ],
    imageUrl: '/features/payments.svg',
    altText: 'Receipt with a checkmark for amount confirmation',
    caseStudy: {
      title: 'Case Study: Secure Payments Co.',
      summary: 'Secure Payments Co. eliminated 99% of payment discrepancies and reduced audit preparation time by 50% using our automatic amount confirmation.',
      link: '/case-studies/secure-payments-co'
    },
    benefits: [
      'Eliminate financial discrepancies',
      'Automate reconciliation processes',
      'Enhance audit readiness',
      'Boost financial team productivity'
    ]
  },
  {
    slug: 'label-printing',
    title: 'Label Printing',
    subtitle: 'Seamless and efficient label generation.',
    description: 'Seamlessly print labels for shipping and inventory management.',
    detailedDescription: [
      'Our integrated label printing solution allows you to generate high-quality shipping and inventory labels directly from your system, supporting various formats and carriers.',
      'This not only speeds up the packing process but also reduces errors associated with manual label creation and application.'
    ],
    imageUrl: '/features/labels.svg',
    altText: 'Printer printing a barcode label',
    caseStudy: {
      title: 'Case Study: Logistics Master',
      summary: 'Logistics Master reduced shipping errors by 25% and increased their daily shipping volume by 30% after integrating our label printing solution.',
      link: '/case-studies/logistics-master'
    },
    benefits: [
      'Streamlined shipping processes',
      'Accurate inventory tracking',
      'Support for multiple label formats',
      'Cost savings on third-party label services'
    ]
  },
  {
    slug: 'packing-tracking-automation',
    title: 'Packing & Tracking Automation',
    subtitle: 'End-to-end fulfillment visibility.',
    description: 'Automate packing and track orders in real-time for better inventory control.',
    detailedDescription: [
      'From the moment an item is picked to when it’s loaded onto a delivery truck, our system provides real-time updates on its status and location.',
      'This comprehensive tracking offers unparalleled visibility into your supply chain, enabling proactive management of potential delays and enhancing customer communication.'
    ],
    imageUrl: '/features/tracks.svg',
    altText: 'Boxes and a map for packing and tracking',
    caseStudy: {
      title: 'Case Study: Global Goods Co.',
      summary: 'Global Goods Co. improved their order fulfillment accuracy by 20% and reduced lost packages by 10% with our packing and tracking automation.',
      link: '/case-studies/global-goods-co'
    },
    benefits: [
      'Real-time order visibility',
      'Optimized packing workflows',
      'Reduced lost or misdirected packages',
      'Enhanced customer communication regarding deliveries'
    ]
  },
];