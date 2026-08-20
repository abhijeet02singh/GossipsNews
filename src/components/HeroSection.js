import React, { Component } from 'react';

export class HeroSection extends Component {
  formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

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
                src={featured.urlToImage || "https://assets2.cbsnewsstatic.com/hub/i/r/2025/10/03/93fcf742-eb77-40a8-b0ea-150efcd5ebaf/thumbnail/1200x630/518884b3fdc649ca8111d6aa45a356fb/screenshot-2025-10-03-at-2-45-23-pm.png"} 
                alt={featured.title || "Featured news"} 
              />
              <div className="hero-content">
                <h1 className="hero-title">{featured.title}</h1>
                <div className="hero-meta">
                  <span>{featured.source?.name}</span> • <span>{featured.author ? `By ${featured.author}` : ''}</span> • <span>{this.formatDate(featured.publishedAt)}</span>
                </div>
              </div>
            </div>

            {/* Sidebar Articles */}
            <div className="hero-sidebar">
              {sidebar.map((article, index) => (
                <div key={index} className="hero-small" onClick={() => window.open(article.url, '_blank')}>
                  <img 
                    src={article.urlToImage || "https://assets2.cbsnewsstatic.com/hub/i/r/2025/10/03/93fcf742-eb77-40a8-b0ea-150efcd5ebaf/thumbnail/1200x630/518884b3fdc649ca8111d6aa45a356fb/screenshot-2025-10-03-at-2-45-23-pm.png"} 
                    alt={article.title || "News image"} 
                  />
                  <div className="hero-small-content">
                    <h4 className="hero-small-title">{article.title}</h4>
                    <div className="hero-small-meta">
                      <span>{article.source?.name}</span> • <span>{this.formatDate(article.publishedAt)}</span>
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
