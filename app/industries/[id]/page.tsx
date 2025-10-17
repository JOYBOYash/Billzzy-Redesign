// app/industries/[id]/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Make sure to use next/image for optimized images
import { notFound } from 'next/navigation';
import { Industry, industriesData } from '../../data/industries'; // Adjust path relative to your project

interface IndustryPageProps {
  params: {
    id: string; // The dynamic segment from the URL, e.g., 'retail'
  };
}

// Generates all static paths for industries
export async function generateStaticParams() {
  return industriesData.map((industry) => ({
    id: industry.id,
  }));
}

// Fetches data for each static path for metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  const industry = industriesData.find((f) => f.id === params.id);
  if (!industry) {
    return { title: 'Industry Not Found' };
  }
  return {
    title: `${industry.title} Solutions | Billz`,
    description: industry.description, // Use the short description for meta
  };
}

const IndustryDetailPage = async ({ params }: IndustryPageProps) => {
  const { id } = params;
  const industry = industriesData.find((f) => f.id === id);

  if (!industry) {
    notFound(); // Next.js utility to render a 404 page
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Breadcrumb - Adapted for Industries */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center text-sm font-medium">
            <Link
              href="/"
              className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-semibold">
              {industry.title}
            </span>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        {/* Hero Section - Adapted for Industries */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2 animate-pulse"></span>
              {industry.subtitle}
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {industry.title} Solutions
            </h1>

            <div className="space-y-4">
              {industry.detailedDescription.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <Link
                href="/contact" // Example CTA link
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:cursor-pointer hover:bg-indigo-700 transition-all shadow-sm shadow-indigo-600/20 hover:shadow-sm hover:shadow-indigo-600/30 hover:-translate-y-0.5"
              >
                {industry.ctaText || `Get Started with Billzzy for ${industry.title}`}
              </Link>
              {/* Optional secondary CTA */}
              {/*
              <Link
                href="/demo"
                className="px-8 py-4 bg-gray-100 text-gray-900 rounded-xl hover:cursor-pointer font-semibold hover:bg-gray-200 transition-all"
              >
                See a Demo
              </Link>
              */}
            </div>
          </div>

          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative overflow-hidden rounded-2xl">
              {/* Using Next.js Image component for optimization */}
              <Image
                src={industry.imageUrl}
                alt={industry.altText}
                width={800} // Provide appropriate width
                height={600} // Provide appropriate height
                style={{ objectFit: 'cover' }}
                className="rounded-2xl transform transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Benefits Section - Identical design */}
        <section className="mt-20 lg:mt-24">
          <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-indigo-900 mb-4 tracking-tight">
              Key Benefits for {industry.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how Billz empowers {industry.title.toLowerCase()} businesses to thrive and excel in their market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
            {industry.benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-indigo-100
                            transform transition-all duration-300 ease-out
                            hover:-translate-y-2 hover:border-indigo-200
                            flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center
                                    group-hover:bg-indigo-100 transition-colors duration-300">
                    <svg className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-xl font-semibold text-gray-800 leading-snug">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Back Link - Adapted for Industries */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-indigo-600 text-lg font-medium group transition-colors"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>

      {/* Footer Gradient */}
      <div className="h-2 bg-gradient-to-r from-indigo-600 via-blue-600 to-green-600"></div> {/* Adjust end color if needed */}
    </div>
  );
};

export default IndustryDetailPage;