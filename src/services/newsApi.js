/**
 * News API service for fetching news data
 */

import { NEWS_API_BASE_URL, NEWS_API_KEY, API_ENDPOINTS, API_TIMEOUT } from '../constants/apiConstants';

/**
 * Fetches top headlines based on parameters
 * @param {Object} params - API parameters (country, category, page, pageSize)
 * @returns {Promise<Object>} News data response
 */
export const fetchTopHeadlines = async (params = {}) => {
  const { country = 'us', category = 'general', page = 1, pageSize = 9 } = params;
  
  const url = `${NEWS_API_BASE_URL}${API_ENDPOINTS.TOP_HEADLINES}?country=${country}&category=${category}&apiKey=${NEWS_API_KEY}&page=${page}&pageSize=${pageSize}`;
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);
  
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    clearTimeout(timeoutId);
    console.error('Error fetching news:', error);
    throw error;
  }
};

/**
 * Fetches everything based on search query
 * @param {Object} params - API parameters (q, page, pageSize, etc.)
 * @returns {Promise<Object>} News data response
 */
export const fetchEverything = async (params = {}) => {
  const { q = '', page = 1, pageSize = 9 } = params;
  
  const url = `${NEWS_API_BASE_URL}${API_ENDPOINTS.EVERYTHING}?q=${encodeURIComponent(q)}&apiKey=${NEWS_API_KEY}&page=${page}&pageSize=${pageSize}`;
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);
  
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    clearTimeout(timeoutId);
    console.error('Error fetching news:', error);
    throw error;
  }
};
