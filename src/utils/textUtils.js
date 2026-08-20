/**
 * Text utility functions for processing and formatting text
 */

/**
 * Calculates reading time for a text
 * @param {string} text - Text to calculate reading time for
 * @param {number} wordsPerMinute - Average reading speed (default: 200)
 * @returns {string} Reading time string
 */
export const calculateReadingTime = (text, wordsPerMinute = 200) => {
  if (!text) return '2 min read';
  const words = text.split(' ').length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  return `${readingTime} min read`;
};

/**
 * Capitalizes the first letter of a string
 * @param {string} string - String to capitalize
 * @returns {string} Capitalized string
 */
export const capitalizeFirstLetter = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Truncates text to a specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 150) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Converts a string to URL-friendly slug
 * @param {string} text - Text to convert
 * @returns {string} URL-friendly slug
 */
export const slugify = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};
