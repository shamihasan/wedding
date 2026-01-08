import { useEffect } from 'react';

/**
 * Custom hook to dynamically update meta tags based on config
 * @param {Object} config - Wedding configuration object
 */
export const useMetaTags = (config) => {
  useEffect(() => {
    const { couple, hashtag, dates, venue, website, socialPreview } = config;
    const { bride, groom } = couple;

    // Generate dynamic content
    const title = website.title(hashtag, bride.firstName, groom.firstName);
    const description = website.description(
      bride.firstName,
      groom.firstName,
      dates.wedding.displayDate,
      venue.name
    );
    const url = website.url;
    const imageUrl = `${url}${socialPreview.image}`;

    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property, content, isName = false) => {
      const attribute = isName ? 'name' : 'property';
      let tag = document.querySelector(`meta[${attribute}="${property}"]`);

      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, property);
        document.head.appendChild(tag);
      }

      tag.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description, true);

    // Open Graph tags
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:url', url);
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', imageUrl);
    updateMetaTag('og:image:width', socialPreview.width);
    updateMetaTag('og:image:height', socialPreview.height);

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', url);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', imageUrl);

  }, [config]);
};

export default useMetaTags;
