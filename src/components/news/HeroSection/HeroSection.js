import React, { Component } from 'react';
import { formatDate } from '../../../utils/dateUtils';
import { DEFAULT_IMAGE_URL } from '../../../constants/appConstants';

export class HeroSection extends Component {

  render() {
    const { articles } = this.props;
    
    if (!articles || articles.length === 0) {
      return null;
    }

    const featured = articles[0];
    const sidebar = articles.slice(1, 4);

    return (
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Featured Article */}
            <div className="hero-featured" onClick={() => window.open(featured.url, '_blank')}>
              <img 
                src={featured.urlToImage || DEFAULT_IMAGE_URL} 
                alt={featured.title || "Featured news"} 
              />
              <div className="hero-content">
                <h1 className="hero-title">{featured.title}</h1>
                <div className="hero-meta">
                  <span>{featured.source?.name}</span> • <span>{featured.author ? `By ${featured.author}` : ''}</span> • <span>{formatDate(featured.publishedAt)}</span>
                </div>
              </div>
            </div>

            {/* Sidebar Articles */}
            <div className="hero-sidebar">
              {sidebar.map((article, index) => (
                <div key={index} className="hero-small" onClick={() => window.open(article.url, '_blank')}>
                  <img 
                    src={article.urlToImage || DEFAULT_IMAGE_URL} 
                    alt={article.title || "News image"} 
                  />
                  <div className="hero-small-content">
                    <h4 className="hero-small-title">{article.title}</h4>
                    <div className="hero-small-meta">
                      <span>{article.source?.name}</span> • <span>{formatDate(article.publishedAt)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
