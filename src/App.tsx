import React, { useState } from 'react';
import './App.css';
import RecommendationQuiz from './components/RecommendationQuiz';
import PersonalityQuiz from './components/PersonalityQuiz';

type Page = 'home' | 'recommendation' | 'personality';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="App">
      {currentPage === 'home' && (
        <div className="home-container">
          <header className="header">
            <h1>🎬 What Should I Watch Next?</h1>
            <p>Discover your next favorite movie, series, or anime</p>
          </header>

          <div className="options-grid">
            <button 
              className="option-card recommendation-card"
              onClick={() => setCurrentPage('recommendation')}
            >
              <div className="card-icon">🎯</div>
              <h2>Get Recommendations</h2>
              <p>Answer questions about your preferences and get personalized recommendations for movies, series, and anime with streaming links</p>
            </button>

            <button 
              className="option-card personality-card"
              onClick={() => setCurrentPage('personality')}
            >
              <div className="card-icon">🎭</div>
              <h2>Personality Quiz</h2>
              <p>Match yourself with a movie/anime character and see an interactive GIF of your character match</p>
            </button>
          </div>
        </div>
      )}

      {currentPage === 'recommendation' && (
        <RecommendationQuiz onBack={() => setCurrentPage('home')} />
      )}

      {currentPage === 'personality' && (
        <PersonalityQuiz onBack={() => setCurrentPage('home')} />
      )}
    </div>
  );
};

export default App;