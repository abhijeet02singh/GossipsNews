import React, { Component } from 'react';
import { formatDate } from '../../../utils/dateUtils';

export class TrendingSidebar extends Component {

  render() {
    const { articles = [] } = this.props;
    
    // Get first 5 articles for trending, or use sample data if no articles
    const trendingArticles = articles.length > 0 ? articles.slice(0, 5) : [
      {
        title: "Breaking: Major Technology Breakthrough Announced",
        source: { name: "TechNews" },
        publishedAt: new Date().toISOString(),
        url: "#"
      },
      {
        title: "Global Markets React to Latest Economic Data",
        source: { name: "FinanceToday" },
        publishedAt: new Date().toISOString(),
        url: "#"
      },
      {
        title: "New Health Study Reveals Surprising Results",
        source: { name: "HealthDaily" },
        publishedAt: new Date().toISOString(),
        url: "#"
      },
      {
        title: "Climate Summit Reaches Historic Agreement",
        source: { name: "EnvironmentNews" },
        publishedAt: new Date().toISOString(),
        url: "#"
      },
      {
        title: "Sports Championship Underway with Exciting Matches",
        source: { name: "SportsCentral" },
        publishedAt: new Date().toISOString(),
        url: "#"
      }
    ];

    return (
      <aside className="trending-sidebar">
        <div className="trending-section">
          <div className="trending-header">
            <h3 className="trending-title">
              <span className="trending-fire">🔥</span>
              Trending
            </h3>
          </div>
          
          <ul className="trending-list">
            {trendingArticles.map((article, index) => (
              <li 
                key={index} 
                className="trending-item"
                onClick={() => article.url !== "#" && window.open(article.url, '_blank')}
              >
                <div className="trending-number">
                  {index + 1}
                </div>
                <div className="trending-content">
                  <h4 className="trending-headline">
                    {article.title}
                  </h4>
                  <div className="trending-meta">
                    <span>{article.source?.name || 'News Source'}</span> • <span>{formatDate(article.publishedAt)}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    );
  }
}

export default TrendingSidebar;
