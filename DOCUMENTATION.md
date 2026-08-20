# GossipsNews - News Application Documentation

## Overview

GossipsNews is a modern React-based news application that fetches and displays news articles from various categories using the NewsAPI. The application features a responsive design, dark/light theme support, and a clean user interface with glassmorphism effects.

## Project Structure

The project follows a systematic, scalable folder structure organized by functionality:

```
src/
├── components/           # Reusable UI components
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── news/            # News-specific components (News, NewsItem, HeroSection, TrendingSidebar)
│   └── ui/              # Generic UI components (ThemeToggle, Spinner)
├── services/            # API and external services
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── constants/          # Application constants
├── config/              # Configuration files
├── types/               # PropTypes definitions
├── assets/              # Static assets
├── styles/              # Global styles
├── context/             # React Context providers
└── __tests__/           # Test files
```

## Component Descriptions

### Layout Components (`components/layout/`)

- **Navbar**: Navigation bar with category links, mobile menu, and theme toggle
- **Footer**: Footer with quick links, categories, and legal information

### News Components (`components/news/`)

- **News**: Main news component that fetches and displays articles with pagination
- **NewsItem**: Individual news card component with image, title, description, and metadata
- **HeroSection**: Featured news display for the homepage
- **TrendingSidebar**: Sidebar showing trending articles

### UI Components (`components/ui/`)

- **ThemeToggle**: Button to switch between dark and light themes
- **Spinner**: Skeleton loading component for better UX during data fetching

## Services (`services/`)

- **newsApi.js**: Handles all API calls to NewsAPI with error handling and timeout management

## Custom Hooks (`hooks/`)

- **useNews**: Custom hook for fetching and managing news data
- **useTheme**: Custom hook for managing theme state and persistence
- **usePagination**: Custom hook for pagination logic

## Utilities (`utils/`)

- **dateUtils.js**: Date formatting functions (formatDate, formatDateTime, getRelativeTime)
- **textUtils.js**: Text processing functions (calculateReadingTime, capitalizeFirstLetter, truncateText, slugify)

## Constants (`constants/`)

- **apiConstants.js**: API configuration including base URL, endpoints, and keys
- **categoryConstants.js**: News categories and their display names
- **appConstants.js**: Application-wide constants (page size, theme settings, etc.)

## Configuration (`config/`)

- **themeConfig.js**: Theme configuration with CSS variables for light and dark modes

## Types (`types/`)

- **newsTypes.js**: PropTypes for news-related data structures
- **componentTypes.js**: PropTypes for component props

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory:
   ```
   REACT_APP_NEWS_API_KEY=your_news_api_key_here
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

## Development Guidelines

### Adding New Components

1. Create component folder in appropriate directory (`layout/`, `news/`, or `ui/`)
2. Create component file with proper naming convention
3. Create `index.js` for clean imports
4. Add component-specific CSS file if needed
5. Update parent component imports

### Adding New Utilities

1. Create utility function in appropriate file in `utils/`
2. Export from `utils/index.js`
3. Add JSDoc comments for documentation

### Adding New Constants

1. Add constant to appropriate file in `constants/`
2. Export from `constants/index.js`
3. Update usage throughout the codebase

## API Integration

The application uses the NewsAPI for fetching news articles. The API service is located in `services/newsApi.js` and includes:

- Error handling
- Request timeout management
- Clean separation of API logic from components

## Theme System

The application supports light and dark themes using CSS variables:

- Theme state managed by `useTheme` hook
- Theme preference persisted in localStorage
- CSS variables defined in `styles/variables.css`
- Theme configuration in `config/themeConfig.js`

## Performance Optimizations

- Lazy loading images
- Skeleton loading states
- Component code splitting ready
- Optimized bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes.
