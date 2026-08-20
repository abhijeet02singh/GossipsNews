import React, { Component } from 'react'
import { formatDate } from '../../../utils/dateUtils';
import { calculateReadingTime } from '../../../utils/textUtils';
import { DEFAULT_IMAGE_URL } from '../../../constants/appConstants';

export class NewsItem extends Component {

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
            src={!ImageUrl ? DEFAULT_IMAGE_URL : ImageUrl}
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
              {date ? formatDate(date) : ''}
            </span>
          </div>
          
          <div className="news-card-footer">
            <span className="reading-time glass-reading-time">
              {calculateReadingTime(description)}
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
