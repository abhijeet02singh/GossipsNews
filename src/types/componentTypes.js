/**
 * Component PropTypes definitions
 */

import PropTypes from 'prop-types';

/**
 * NewsItem component props
 */
export const newsItemProps = {
  title: PropTypes.string,
  description: PropTypes.string,
  ImageUrl: PropTypes.string,
  newsUrl: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  source: PropTypes.string
};

/**
 * HeroSection component props
 */
export const heroSectionProps = {
  articles: PropTypes.array
};

/**
 * TrendingSidebar component props
 */
export const trendingSidebarProps = {
  articles: PropTypes.array
};
