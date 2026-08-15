import React, { Component } from "react";
import NewsItem from "./NewsItem";
import SkeletonLoader from "./Spinner";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import TrendingSidebar from "./TrendingSidebar";
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
     country: 'us',
     pageSize: 9,
     category: 'general'
  }
  
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  constructor(props) {
    super(props);
    console.log("i am a constructor");
    this.state = {
        articles: [],
        loading: true,
        page: 1,
        totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - GossipsNews`;
  }

  async updateNews() {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d35b0cbdf42847809f9063afef487908&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    try {
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({ 
        articles: parseData.articles, 
        totalResults: parseData.totalResults,
        loading: false 
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    if (this.state.page > 1) {
      this.setState({page: this.state.page - 1}, () => {
        this.updateNews();
      });
    }
  }

  handleNextClick = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
      this.setState({page: this.state.page + 1}, () => {
        this.updateNews();
      });
    }
  }

  render() {
    const { articles, loading, page, totalResults } = this.state;
    const { pageSize } = this.props;
    const totalPages = Math.ceil(totalResults / pageSize);

    return (
      <>
        {/* Hero Section - Only show on first page and general category */}
        {page === 1 && this.props.category === 'general' && !loading && articles.length > 0 && (
          <HeroSection articles={articles} />
        )}

        {/* Main Content Layout with Sidebar */}
        <div className="container">
          <div className="main-content-layout">
            {/* Main News Content */}
            <main className="main-content">
              <div style={{ padding: page === 1 && this.props.category === 'general' ? '2rem 0' : '3rem 0' }}>
                <h1 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '900', marginBottom: '3rem', color: 'var(--text-color)' }}>
                  Top {this.capitalizeFirstLetter(this.props.category)} Headlines
                </h1>
                
                {/* Loading State */}
                {loading && <SkeletonLoader count={pageSize} />}
                
                {/* News Grid */}
                {!loading && (
                  <>
                    <div className="news-grid">
                      {/* Skip first 4 articles if showing hero section */}
                      {(page === 1 && this.props.category === 'general' ? articles.slice(4) : articles).map((element, index) => {
                        return (
                          <NewsItem 
                            key={element.url || index} 
                            title={element.title || ""} 
                            description={element.description || ""} 
                            ImageUrl={element.urlToImage} 
                            newsUrl={element.url} 
                            author={element.author} 
                            date={element.publishedAt} 
                            source={element.source?.name}
                          />
                        );
                      })}
                    </div>

                    {/* Pagination */}
                    {totalResults > pageSize && (
                      <div className="pagination-modern">
                        <button 
                          disabled={page <= 1} 
                          className="pagination-btn"
                          onClick={this.handlePrevClick}
                        >
                          ← Previous
                        </button>
                        
                        <span className="pagination-info">
                          Page {page} of {totalPages || '...'}
                        </span>
                        
                        <button 
                          disabled={page >= totalPages} 
                          className="pagination-btn"
                          onClick={this.handleNextClick}
                        >
                          Next →
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </main>

            {/* Trending Sidebar */}
            <aside className="trending-sidebar">
              <TrendingSidebar articles={articles} />
            </aside>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </>
    );
  }
}

export default News;
