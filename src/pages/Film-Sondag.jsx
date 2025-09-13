import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, ChevronRight, Star, StarHalf, ExternalLink } from "lucide-react";

import MoviePoster from "/MoviePoster.jpg";
import PrincessMononokePoster from "/princess-mononoke.jpg";
import PhoenicianSchemePoster from "/phoenician-scheme.jpg";
import RequiemPoster from "/requiem-for-a-dream.jpg";


const FilmSondag = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState('');

  const [upcomingMovie, setUpcomingMovie] = useState({
    title: "Talk To Me",
    chosenBy: "Hanna",
    poster: MoviePoster,
  });

  const [previousMovies, setPreviousMovies] = useState([
    {
      title: "Princess Mononoke",
      chosenBy: "Albin", 
      expanded: false,
      date: "?",
      poster: PrincessMononokePoster,
      imdbRating: 8.4,
      imdbUrl: "https://www.imdb.com/title/tt0119698/",
      reviews: [
        { person: "Anes", rating: 4.5, comment: "Jag gillar mer seriös Ghibli film, bra smiski" },
        { person: "Hannah", rating: 3.5, comment: "bra film, kul för hela familjen. det var synd att vi bara hade en smiski kvar i slutet" },
        { person: "Hanna", rating: 4.5, comment: "vargarna va sexiga och manshatet" },
        { person: "Albin", rating: 4.5, comment: "men de stavade fel på function så den får ett poäng avdraget pga det" },
      ],
    },
    {
      title: "The Phoenician Scheme",
      chosenBy: "Anes", 
      expanded: false,
      date: "2025-09-02",
      poster: PhoenicianSchemePoster,
      imdbRating: 6.7,
      imdbUrl: "https://www.imdb.com/title/tt9866072/",
      reviews: [
        { person: "Anes", rating: 3.5, comment: "De lyckades göra en norsk sexig" },
        { person: "Hannah", rating: 3.5, comment: "jag tyckte den var ascool att se på det kändes som att gå in på ett konstmuseum men filmens handling var inte så spännande" },
        { person: "Hanna", rating: 4.5, comment: "väldigt vaccker gillar färgerna gillade storyn kul koncept och breaking bad" },
        { person: "Albin", rating: 3.5, comment: "Fett bra. Jag + Bjorn = Sant <3" },
      ],
    },
    {
      title: "Requiem For A Dream",
      chosenBy: "Hannah", 
      expanded: false,
      date: "2025-09-09",
      poster: RequiemPoster,
      imdbRating: 8.3,
      imdbUrl: "https://www.imdb.com/title/tt0180093/",
      reviews: [
        { person: "Anes", rating: 4, comment: "Så artsy att ingen mådde bra" },
        { person: "Hannah", rating: 4.5, comment: "jag älskar hur den är filmad/redigerad det är ascoolt men man fäller tre tårar från högra öga" },
        { person: "Hanna", rating: 4, comment: "bra film mådde piss men också väldigt astetisk och cool men också traumatiskt" },
        { person: "Albin", rating: 4, comment: "fördärvande sinnet" },
      ],
    },
  ]);

  useEffect(() => {
    console.log("🎬 Film Söndag component loaded!");


        const updateDate = () => {
  const now = new Date();
  const options = { 
    weekday: 'long',  
    month: 'long', 
    day: 'numeric' 
  };
  setCurrentDate(now.toLocaleDateString('sv-SE', options));
  };

// Update date immediately and then every minute
updateDate();
const dateInterval = setInterval(updateDate, 60000);
    const style = document.createElement("style");
    style.setAttribute("data-film-sondag-2000s", "true");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Fredoka+One:wght@400&family=Bubblegum+Sans:wght@400&family=Bungee:wght@400&display=swap');
      
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
      
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        60% { transform: translateY(-5px); }
      }
      
      @keyframes wiggle {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(-2deg); }
        50% { transform: rotate(0deg); }
        75% { transform: rotate(2deg); }
        100% { transform: rotate(0deg); }
      }
      
      @keyframes sparkle-spin {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.2); }
        100% { transform: rotate(360deg) scale(1); }
      }
      
      .retro-button:hover {
        animation: bounce 0.6s ease infinite;
      }
      
      .sparkle-text {
        position: relative;
      }
      
      .sparkle-text::before {
        content: "✨";
        position: absolute;
        left: -25px;
        animation: sparkle-spin 2s ease-in-out infinite;
      }
      
      .sparkle-text::after {
        content: "✨";
        position: absolute;
        right: -25px;
        animation: sparkle-spin 2s ease-in-out infinite reverse;
      }
      
      .movie-card-2000s:hover {
        animation: wiggle 0.5s ease-in-out;
      }
      
      .blink-text {
        animation: blink 1.5s infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.querySelector("style[data-film-sondag-2000s]");
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  const handlePosterUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUpcomingMovie((prev) => ({ ...prev, poster: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleMovieExpansion = (index) => {
    setPreviousMovies((prev) =>
      prev.map((movie, i) =>
        i === index ? { ...movie, expanded: !movie.expanded } : movie
      )
    );
  };

  const renderStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          size={16}
          fill="#FFD700"
          color="#FFD700"
          className="star-icon"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          size={16}
          fill="#FFD700"
          color="#FFD700"
          className="star-icon"
        />
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          size={16}
          color="#D3D3D3"
          className="star-icon"
        />
      );
    }

    return <div className="star-rating">{stars}</div>;
  };

  const handleNavClick = (buttonName) => {
    console.log('Button clicked:', buttonName);
    
    switch(buttonName) {
      case 'Bloggar':
        navigate('/bloggar');
        break;
      case 'Bucket list':
        navigate('/bucket-list');
        break;
      case 'Film Söndag':
        navigate('/film-sondag');
        break;
      case 'Home':
        navigate('/');
        break;
      default:
        console.log('Unknown navigation:', buttonName);
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <button
            onClick={() => handleNavClick("Home")}
            style={styles.logoButton}
          >
            <div style={styles.logo}>
              <span style={styles.logoText}>AnesDelalic</span>
              <span style={styles.logoCom}>.com</span>
            </div>
          </button>
          
          <div style={styles.headerRight}>
            <div style={styles.dateDisplay}>
              Idag är det {currentDate}
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div style={styles.navBar}>
          {[
            { name: 'Home', icon: '📍', color: '#FF6B9D' },
            { name: 'Bucket list', icon: '📋', color: '#7DD3FC' },
            { name: 'Bloggar', icon: '📝', color: '#A9CE3D' },
            { name: 'Film Söndag', icon: '🎬', color: '#F8B500' },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.name)}
              className="retro-button"
              style={{
                ...styles.navButton,
                background: item.color,
              }}
            >
              <span style={styles.navButtonIcon}>{item.icon}</span>
              <span style={styles.navButtonText}>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div style={styles.mainContent}>
          
          {/* Left Sidebar */}
          <div style={styles.sidebar}>
            <div style={styles.sidebarWidget}>
              <div style={styles.widgetHeader}>
                <span className="sparkle-text">Veckans Film!</span>
              </div>
              <div style={styles.widgetContent}>
                <div className="movie-card-2000s" style={styles.upcomingMovieCard}>
                  <div style={styles.posterContainer}>
                    {upcomingMovie.poster ? (
                      <img
                        src={upcomingMovie.poster}
                        alt={upcomingMovie.title}
                        style={styles.upcomingPoster}
                      />
                    ) : (
                      <div style={styles.posterPlaceholder}>
                        <label style={styles.uploadLabel}>
                          <Upload size={20} color="#666" />
                          <span style={styles.uploadText}>Ladda upp</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handlePosterUpload}
                            style={{ display: "none" }}
                          />
                        </label>
                      </div>
                    )}
                  </div>
                  <div style={styles.upcomingInfo}>
                    <h3 style={styles.upcomingTitle}>{upcomingMovie.title}</h3>
                    <p style={styles.upcomingChosen}>Chosen by: {upcomingMovie.chosenBy}</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.sidebarWidget}>
              <div style={styles.widgetHeader}>
                <span className="blink-text">NÄST PÅ TUR</span>
              </div>
              <div style={styles.widgetContent}>
                <div style={styles.turnOrder}>
                  {['Albin', 'Anes', 'Hannah'].map((person, index) => (
                    <div key={person} style={styles.turnItem}>
                      {index + 1}. {person}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div style={styles.centerContent}>
            <div style={styles.contentBox}>
              <div style={styles.contentHeader}>
                🎬 FILM SÖNDAG HIGHLIGHTS! 🎬
              </div>
              
              <div style={styles.welcomeSection}>
                <h1 style={styles.welcomeTitle}>
                  Välkommen till Film "Söndag"!
                </h1>
                <p style={styles.welcomeText}>
                  Vi försöker kolla på en film tillsammans i veckan där en person i taget får välja film! 
                  <span className="blink-text"> ✨ KOLLA IN VÅRA REVIEWS NEDAN! ✨</span>
                </p>
              </div>

              {/* Previous Movies Section */}
              <div style={styles.moviesSection}>
                <div style={styles.sectionTitle}>
                  🌟 TIDIGARE FILMER & REVIEWS 🌟
                </div>
                
                {previousMovies.map((movie, index) => (
                  <div key={index} style={styles.movieContainer}>
                    <div
                      style={styles.movieHeader}
                      onClick={() => toggleMovieExpansion(index)}
                    >
                      <div style={styles.movieHeaderLeft}>
                        <img 
                          src={movie.poster} 
                          alt={movie.title}
                          style={styles.movieThumbnail}
                        />
                        <div style={styles.movieHeaderInfo}>
                          <h3 style={styles.movieHeaderTitle}>{movie.title}</h3>
                          <p style={styles.movieHeaderMeta}>
                            Chosen by: {movie.chosenBy} • Date: {movie.date}
                          </p>
                        </div>
                      </div>
                      <div style={styles.movieHeaderRight}>
                        <div style={styles.expandButton}>
                          {movie.expanded ? '👇 HIDE' : '👀 SHOW REVIEWS'}
                        </div>
                      </div>
                    </div>

                    {movie.expanded && (
                      <div style={styles.reviewsContainer}>
                        <div style={styles.reviewsHeader}>
                          💭 VÅRA REVIEWS:
                        </div>
                        
                        {/* IMDB Link in expanded view */}
                        <div style={styles.imdbSection}>
                          <a
                            href={movie.imdbUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.imdbLinkExpanded}
                          >
                            <span style={styles.imdbIcon}>🎭</span>
                            <span style={styles.imdbText}>Check it out on IMDb!</span>
                            <span style={styles.imdbRating}>⭐ {movie.imdbRating}/10</span>
                            <ExternalLink size={16} style={{ marginLeft: '8px' }} />
                          </a>
                        </div>

                        <div style={styles.reviewsList}>
                          {movie.reviews.map((review, reviewIndex) => (
                            <div key={reviewIndex} style={styles.reviewItem}>
                              <div style={styles.reviewerInfo}>
                                <span style={styles.reviewerName}>{review.person}:</span>
                                <div style={styles.reviewRating}>
                                  {renderStarRating(review.rating)}
                                </div>
                              </div>
                              <div style={styles.reviewComment}>
                                "{review.comment}"
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div style={styles.rightSidebar}>
            <div style={styles.sidebarWidget}>
              <div style={styles.widgetHeader}>
                <span>Filmfakta!</span>
              </div>
              <div style={styles.widgetContent}>
                <div style={styles.factBox}>
                  <p style={styles.factText}>
                    🎭 Vi har kollat på {previousMovies.length} filmer hittills!
                  </p>
                  <p style={styles.factText}>
                    🌟 Genomsnittligt betyg: {(
                      previousMovies
                        .flatMap(m => m.reviews)
                        .reduce((sum, r) => sum + r.rating, 0) /
                      previousMovies.flatMap(m => m.reviews).length
                    ).toFixed(1)} stjärnor!
                  </p>
                </div>
              </div>
            </div>

            <div style={styles.sidebarWidget}>
              <div style={styles.widgetHeader}>
                <span className="blink-text">Random Facts!</span>
              </div>
              <div style={styles.widgetContent}>
                <div style={styles.randomFacts}>
                  <p style={styles.factText}>🍿 Popcorn was invented in 1885!</p>
                  <p style={styles.factText}>🎬 The first movie theater opened in 1905!</p>
                  <p style={styles.factText}>📽️ Movies used to be silent!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <div style={styles.footerContent}>
            <span>© 2025 AnesDelalic.com - Film Söndag Edition! 🎬</span>
            <span className="blink-text">✨ Från Karlstad till Kungälv, vi levererar ✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated styles with clean white background
const styles = {
  body: {
    fontFamily: "'Fredoka One', 'Bubblegum Sans', 'Comic Sans MS', cursive",
    backgroundImage: 'url(Homebackgroundimage.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    margin: 0,
    padding: '10px',
    boxSizing: 'border-box',
  },

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    background: '#FFFFFF',
    border: '5px solid #FF69B4',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 0 30px rgba(255, 105, 180, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.8)',
  },

  header: {
    background: 'linear-gradient(45deg, #FF69B4, #FF1493, #FF69B4)',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '3px solid #FF1493',
    boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.3)',
  },

  logoButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
  },

  logoText: {
    fontSize: '32px',
    fontFamily: "'Bungee', 'Fredoka One', cursive",
    color: '#FFD700',
    textShadow: '3px 3px 0 #FF1493, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    letterSpacing: '2px',
  },

  logoCom: {
    fontSize: '24px',
    fontFamily: "'Bungee', 'Fredoka One', cursive",
    color: '#00BFFF',
    textShadow: '2px 2px 0 #FF1493, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  },

  headerRight: {
    display: 'flex',
    alignItems: 'center',
  },

  dateDisplay: {
    background: 'rgba(255, 255, 255, 0.9)',
    color: '#FF1493',
    padding: '10px 20px',
    borderRadius: '25px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: '3px solid #FFFFFF',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    fontFamily: "'Fredoka One', cursive",
  },

  navBar: {
    background: 'linear-gradient(90deg, #32CD32, #00BFFF, #FFD700, #FF69B4)',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '10px',
    borderBottom: '3px solid #FF1493',
  },

  navButton: {
    border: '3px solid #FFFFFF',
    borderRadius: '15px',
    padding: '12px 20px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadow: '2px 2px 0 rgba(0, 0, 0, 0.5)',
    fontFamily: "'Fredoka One', cursive",
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
  },

  navButtonIcon: {
    fontSize: '16px',
  },

  navButtonText: {
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },

  mainContent: {
    display: 'grid',
    gridTemplateColumns: '250px 1fr 200px',
    gap: '15px',
    padding: '15px',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 105, 180, 0.1) 50%, rgba(0, 191, 255, 0.1) 100%)',
    minHeight: '500px',
  },

  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },

  rightSidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },

  sidebarWidget: {
    background: '#FFFFFF',
    border: '3px solid #FF69B4',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(255, 105, 180, 0.3)',
  },

  widgetHeader: {
    background: 'linear-gradient(45deg, #FF69B4, #FF1493)',
    color: '#FFFFFF',
    padding: '10px 15px',
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '1px 1px 0 rgba(0, 0, 0, 0.5)',
    fontFamily: "'Fredoka One', cursive",
  },

  widgetContent: {
    padding: '15px',
  },

  upcomingMovieCard: {
    textAlign: 'center',
  },

  posterContainer: {
    width: '120px',
    height: '180px',
    margin: '0 auto 10px',
    border: '3px solid #FF1493',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },

  upcomingPoster: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  posterPlaceholder: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, #f0f0f0, #e0e0e0)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },

  uploadLabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    cursor: 'pointer',
    color: '#666',
    fontSize: '12px',
  },

  uploadText: {
    fontWeight: 'bold',
  },

  upcomingInfo: {
    textAlign: 'center',
  },

  upcomingTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#FF1493',
    margin: '0 0 5px 0',
    fontFamily: "'Fredoka One', cursive",
  },

  upcomingChosen: {
    fontSize: '12px',
    color: '#666',
    margin: '0',
    fontWeight: 'bold',
  },

  turnOrder: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },

  turnItem: {
    background: 'linear-gradient(45deg, #FF69B4, #FF1493)',
    color: '#FFFFFF',
    padding: '8px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '1px 1px 0 rgba(0, 0, 0, 0.5)',
    fontFamily: "'Fredoka One', cursive",
    border: '2px solid #FFFFFF',
  },

  centerContent: {
    display: 'flex',
    flexDirection: 'column',
  },

  contentBox: {
    background: '#FFFFFF',
    border: '4px solid #00BFFF',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 8px 16px rgba(0, 191, 255, 0.4)',
  },

  contentHeader: {
    background: 'linear-gradient(45deg, #00BFFF, #32CD32, #FFD700)',
    color: '#FFFFFF',
    padding: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '2px 2px 0 rgba(0, 0, 0, 0.5)',
    fontFamily: "'Fredoka One', cursive",
    letterSpacing: '2px',
  },

  welcomeSection: {
    padding: '20px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 215, 0, 0.1) 100%)',
  },

  welcomeTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#FF1493',
    margin: '0 0 15px 0',
    textShadow: '3px 3px 0 #FFD700, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    fontFamily: "'Bungee', 'Fredoka One', cursive",
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },

  welcomeText: {
    fontSize: '16px',
    color: '#333',
    lineHeight: '1.5',
    fontWeight: 'bold',
    fontFamily: "'Fredoka One', cursive",
  },

  moviesSection: {
    padding: '0 20px 20px',
  },

  sectionTitle: {
    background: 'linear-gradient(45deg, #FF69B4, #FFD700, #00BFFF)',
    color: '#FFFFFF',
    padding: '15px',
    margin: '0 0 20px 0',
    borderRadius: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '2px 2px 0 rgba(0, 0, 0, 0.5)',
    fontFamily: "'Fredoka One', cursive",
    border: '3px solid #FF1493',
    boxShadow: '0 4px 8px rgba(255, 105, 180, 0.4)',
  },

  movieContainer: {
    background: '#FFFFFF',
    border: '3px solid #404c8c',
    borderRadius: '15px',
    marginBottom: '15px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(50, 205, 50, 0.3)',
  },

  movieHeader: {
    background: '#404c8c',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  movieHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },

  movieThumbnail: {
    width: '60px',
    height: '90px',
    objectFit: 'cover',
    borderRadius: '8px',
    border: '2px solid #FFFFFF',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  },

  movieHeaderInfo: {
    display: 'flex',
    flexDirection: 'column',
  },

  movieHeaderTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    margin: '0 0 5px 0',
    textShadow: '2px 2px 0 rgba(0, 0, 0, 0.5)',
    fontFamily: "'Fredoka One', cursive",
  },

  movieHeaderMeta: {
    fontSize: '14px',
    color: '#FFFFFF',
    margin: '0',
    fontWeight: 'bold',
    textShadow: '1px 1px 0 rgba(0, 0, 0, 0.5)',
  },

  movieHeaderRight: {
    display: 'flex',
    alignItems: 'center',
  },

  expandButton: {
    background: '#FFD700',
    color: '#000',
    padding: '10px 15px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold',
    border: '2px solid #FF8C00',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    fontFamily: "'Fredoka One', cursive",
  },

  reviewsContainer: {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(50, 205, 50, 0.1) 100%)',
    padding: '20px',
  },

  reviewsHeader: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#FF1493',
    marginBottom: '15px',
    textAlign: 'center',
    fontFamily: "'Fredoka One', cursive",
    textShadow: '1px 1px 0 rgba(0, 0, 0, 0.2)',
  },

  imdbSection: {
    textAlign: 'center',
    marginBottom: '20px',
    padding: '15px',
    background: 'rgba(255, 215, 0, 0.1)',
    borderRadius: '15px',
    border: '2px solid #FFD700',
  },

  imdbLinkExpanded: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: 'linear-gradient(45deg, #F5C518, #E6AC00)',
    color: '#000000',
    padding: '12px 20px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    border: '3px solid #FFFFFF',
    boxShadow: '0 4px 12px rgba(245, 197, 24, 0.5)',
    fontFamily: "'Fredoka One', cursive",
    transition: 'all 0.3s ease',
  },

  imdbIcon: {
    fontSize: '18px',
  },

  imdbText: {
    fontSize: '14px',
    fontWeight: 'bold',
  },

  imdbRating: {
    fontSize: '14px',
    fontWeight: 'bold',
    background: 'rgba(255, 255, 255, 0.3)',
    padding: '4px 8px',
    borderRadius: '15px',
  },

  reviewsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },

  reviewItem: {
    background: '#FFFFFF',
    border: '2px solid #FFD700',
    borderRadius: '12px',
    padding: '12px',
    boxShadow: '0 2px 4px rgba(255, 215, 0, 0.3)',
  },

  reviewerInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },

  reviewerName: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#FF1493',
    fontFamily: "'Fredoka One', cursive",
  },

  reviewRating: {
    display: 'flex',
    gap: '2px',
  },

  reviewComment: {
    fontSize: '13px',
    color: '#333',
    fontStyle: 'italic',
    lineHeight: '1.4',
    fontWeight: 'bold',
  },

  factBox: {
    background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.2), rgba(50, 205, 50, 0.2))',
    padding: '15px',
    borderRadius: '10px',
    border: '2px solid #FFD700',
  },

  factText: {
    fontSize: '12px',
    color: '#333',
    margin: '0 0 8px 0',
    fontWeight: 'bold',
    fontFamily: "'Fredoka One', cursive",
  },

  randomFacts: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },

  footer: {
    background: 'linear-gradient(45deg, #FF69B4, #00BFFF, #32CD32, #FFD700)',
    padding: '15px',
    borderTop: '3px solid #FF1493',
  },

  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 'bold',
    textShadow: '2px 2px 0 rgba(0, 0, 0, 0.5)',
    fontFamily: "'Fredoka One', cursive",
  },

  // Responsive adjustments
  '@media (max-width: 768px)': {
    mainContent: {
      gridTemplateColumns: '1fr',
      gap: '15px',
    },
    
    welcomeTitle: {
      fontSize: '24px',
    },
    
    movieHeader: {
      flexDirection: 'column',
      gap: '10px',
      textAlign: 'center',
    },
    
    footerContent: {
      flexDirection: 'column',
      gap: '10px',
      textAlign: 'center',
    },
  },
};

export default FilmSondag;