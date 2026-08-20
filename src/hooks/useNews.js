/**
 * Custom hook for fetching and managing news data
 */

import { useState, useEffect } from 'react';
import { fetchTopHeadlines } from '../services/newsApi';

/**
 * Hook for fetching news articles
 * @param {Object} params - News parameters (country, category, page, pageSize)
 * @returns {Object} News data and loading state
 */
export const useNews = (params = {}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchTopHeadlines(params);
      setArticles(data.articles || []);
      setTotalResults(data.totalResults || 0);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching news:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [params.country, params.category, params.page, params.pageSize]);

  return {
    articles,
    loading,
    totalResults,
    error,
    refetch: fetchNews
  };
};
