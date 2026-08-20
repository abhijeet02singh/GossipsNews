/**
 * Custom hook for pagination logic
 */

import { useState, useCallback } from 'react';

/**
 * Hook for managing pagination state and logic
 * @param {number} totalItems - Total number of items
 * @param {number} itemsPerPage - Number of items per page
 * @returns {Object} Pagination state and functions
 */
export const usePagination = (totalItems = 0, itemsPerPage = 9) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => {
      if (prev < totalPages) {
        return prev + 1;
      }
      return prev;
    });
  }, [totalPages]);

  const goToPreviousPage = useCallback(() => {
    setCurrentPage((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  }, []);

  const goToPage = useCallback((pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  }, [totalPages]);

  const resetPagination = useCallback(() => {
    setCurrentPage(1);
  }, []);

  return {
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    goToPage,
    resetPagination,
    canGoNext: currentPage < totalPages,
    canGoPrevious: currentPage > 1
  };
};
