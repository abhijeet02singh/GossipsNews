/**
 * News-related PropTypes definitions
 */

import PropTypes from 'prop-types';

/**
 * Article shape
 */
export const articleShape = PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.string,
  source: PropTypes.shape({
    name: PropTypes.string
  })
});

/**
 * News component props
 */
export const newsProps = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
};
