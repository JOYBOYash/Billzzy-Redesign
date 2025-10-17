// data/pricing.ts

export interface PricingFeature {
  text: string;
  included: boolean; // Not strictly used for the "Starter" list, but good for consistency
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceDetails?: string; // e.g., "/month"
  isMostPopular?: boolean;
  features: PricingFeature[];
  buttonText: string;
  buttonLink: string;
  buttonClass?: string; // Optional: for custom button styling
  highlightColor?: string; // Optional: for border/label highlight
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for getting started and handling your first orders.',
    price: 'Free',
    isMostPopular: false,
    features: [
      { text: 'Up to 50 Bills per month', included: true },
      { text: 'Basic Dashboard Analytics', included: true },
      { text: 'Inventory Management', included: true },
      { text: 'Customer Management', included: true },
    ],
    buttonText: 'Start for Free',
    buttonLink: '/signup',
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For growing businesses that need unlimited scale and power.',
    price: '₹499',
    priceDetails: '/month',
    isMostPopular: true,
    features: [
      { text: 'Unlimited Bills & Invoices', included: true },
      { text: 'Advanced Dashboard Analytics', included: true },
      { text: 'Product Variant Support', included: true },
      { text: 'Order Status SMS Notifications', included: true },
      { text: 'Priority 24/7 Support', included: true },
    ],
    buttonText: 'Go Pro',
    buttonLink: '/signup/pro',
    highlightColor: 'bg-indigo-600', // Example: for a custom highlight color
    buttonClass: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30',
  },
];