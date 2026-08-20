import React, { Component } from 'react';

export class SkeletonLoader extends Component {
  render() {
    const { count = 6 } = this.props;
    
    return (
      <div className="news-grid">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
              <div className="skeleton-line title"></div>
              <div className="skeleton-line text"></div>
              <div className="skeleton-line text"></div>
              <div className="skeleton-line short"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default SkeletonLoader;
