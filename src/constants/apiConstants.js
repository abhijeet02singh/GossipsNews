/**
 * API-related constants and configuration
 */

// News API configuration
export const NEWS_API_BASE_URL = 'https://newsapi.org/v2';
export const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY || 'd35b0cbdf42847809f9063afef487908';

// API endpoints
export const API_ENDPOINTS = {
  TOP_HEADLINES: '/top-headlines',
  EVERYTHING: '/everything',
  SOURCES: '/sources'
};

// Default API parameters
export const DEFAULT_API_PARAMS = {
  country: 'us',
  pageSize: 9,
  page: 1
};

// API request timeout (in milliseconds)
export const API_TIMEOUT = 10000;
