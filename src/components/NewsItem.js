import React, { Component } from 'react'

export class NewsItem extends Component {

  formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  calculateReadingTime = (text) => {
    if (!text) return '2 min read';
    const wordsPerMinute = 200;
    const words = text.split(' ').length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    return `${readingTime} min read`;
  }

  handleCardClick = (newsUrl) => {
    if (newsUrl && newsUrl !== '#') {
      window.open(newsUrl, '_blank', 'noopener,noreferrer');
    }
  }

  render() {
    let {title, description, ImageUrl, newsUrl, author, date, source} = this.props;
    
    return (
      <article className="news-card glass-card" onClick={() => this.handleCardClick(newsUrl)}>
        <div className="news-card-image">
          <img 
            src={!ImageUrl ? "https://assets2.cbsnewsstatic.com/hub/i/r/2025/10/03/93fcf742-eb77-40a8-b0ea-150efcd5ebaf/thumbnail/1200x630/518884b3fdc649ca8111d6aa45a356fb/screenshot-2025-10-03-at-2-45-23-pm.png" : ImageUrl}
            alt={title || "News image"} 
            loading="lazy"
          />
          <span className="news-card-badge glass-badge">{source}</span>
        </div>
        
        <div className="news-card-content glass-content">
          <h3 className="news-card-title">{title}</h3>
          
          <p className="news-card-description">
            {description}
          </p>
          
          <div className="news-card-meta glass-meta">
            <span className="news-card-author">
              By {!author ? "Unknown" : author}
            </span>
            <span className="news-card-date">
              {date ? this.formatDate(date) : ''}
            </span>
          </div>
          
          <div className="news-card-footer">
            <span className="reading-time glass-reading-time">
              {this.calculateReadingTime(description)}
            </span>
            <a 
              href={newsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="news-card-link glass-button"
              onClick={(e) => e.stopPropagation()}
            >
              Read More →
            </a>
          </div>
        </div>
      </article>
    )
  }
}

export default NewsItem
