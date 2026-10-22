import React from 'react';
import { Helmet } from 'react-helmet-async';

// Global assets fallbacks for metadata rich snippet previews
import previewThumb from '../assets/Images/Logo/Al_Kausar_Logo.png';

function SEOManager({ pageTitle, description = "Discover pure, non-alcoholic concentrated Attars, luxury signature perfumes, and traditional Bakhoor aged in copper stills by the House of Al Kausar." }) {
  const displayTitle = pageTitle 
    ? `${pageTitle} | Al Kausar Fragrances — Premium Curation`
    : "Al Kausar Fragrances | Luxury Artisanal Attars & Perfumes";

  return (
    <Helmet>
      {/* Basic Title and Meta Elements */}
      <title>{displayTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="AlKausar, AL-Kausar, AlKausar Perfumes, AL-Kausar Perfumes, AL-Kausar attar, AL-Kausar attars, AL-Kausar bakhoors, AlKausar attar, AlKausar attars, AlKausar bakhoors, Pure Attar, Oud Concentrate, Non-Alcoholic Perfume, Bakhoor Incense, Luxury Fragrance Boutique, Al Kausar Mumbai, AL-Kausar Mumbai, Al-Kausar Mumbai" />

      {/* Open Graph / Facebook Content Preview Cards */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={previewThumb} />

      {/* Twitter Card Layout Structure */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={displayTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={previewThumb} />
    </Helmet>
  );
}

export default SEOManager;
