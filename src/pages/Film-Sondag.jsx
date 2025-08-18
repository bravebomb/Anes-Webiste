import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, ChevronRight, Star, StarHalf } from "lucide-react";

import MoviePoster from "/MoviePoster.jpg";

const FilmSondag = () => {
  // React Router navigation hook
  const navigate = useNavigate();

  // State for upcoming movie
  const [upcomingMovie, setUpcomingMovie] = useState({
    title: "Princess Mononoke",
    chosenBy: "Albin",
    poster: MoviePoster,
  });

  // Previous movies data with reviews
  const [previousMovies, setPreviousMovies] = useState([
    {
      title: "Flickan och kråkan",
      chosenBy: "Hanna",
      expanded: false,
      reviews: [
        { person: "Anes", rating: 3.5, comment: "Ganska rolig" },
        { person: "Hannah", rating: 2, comment: "Inte min stil" },
        { person: "Hanna", rating: 1.5, comment: "De borde ha kpop låtar i den!" },
        { person: "Albin", rating: 5, comment: "Jag grät när kråkan blev skjuten" },
      ],
    },
  ]);

  const people = ["Anes", "Hannah", "Hanna", "Albin"];

  useEffect(() => {
    console.log("🎬 Film Söndag component loaded!");

    // Add custom animations
    const style = document.createElement("style");
    style.setAttribute("data-film-sondag", "true");
    style.textContent = `
      @keyframes movieFadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes posterGlow {
        0% { box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4); }
        50% { box-shadow: 0 8px 30px rgba(255, 107, 157, 0.6); }
        100% { box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4); }
      }
      
      .movie-card {
        animation: movieFadeIn 0.8s ease-out;
      }
      
      .poster-container:hover {
        animation: posterGlow 2s infinite;
      }
      
      .upload-hover:hover {
        background: rgba(255, 255, 255, 0.95) !important;
        transform: scale(1.05);
      }

      .movie-item:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }

      .star-rating {
        display: inline-flex;
        align-items: center;
      }

      .review-section {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.5s ease-out;
      }

      .review-section.expanded {
        max-height: 500px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup
      const existingStyle = document.querySelector("style[data-film-sondag]");
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  // Handle file upload for upcoming movie poster
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

  // Toggle movie review expansion
  const toggleMovieExpansion = (index) => {
    setPreviousMovies((prev) =>
      prev.map((movie, i) =>
        i === index ? { ...movie, expanded: !movie.expanded } : movie
      )
    );
  };

  // Render star rating
  const renderStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          size={20}
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
          size={20}
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
          size={20}
          color="#D3D3D3"
          className="star-icon"
        />
      );
    }

    return <div className="star-rating">{stars}</div>;
  };

  // Function to handle navigation button clicks - using the same logic as Home.jsx
  const handleNavClick = (buttonName) => {
    console.log('Button clicked:', buttonName);
    
    // Navigate to different pages based on button name
    switch(buttonName) {
      case 'Bloggar':
        navigate('/bloggar');
        break;
      case 'Bucket list':
        navigate('/bucket-list');
        break;
      case 'Vart är jag?':
        navigate('/vart-ar-jag');
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
      <div style={styles.siteContainer}>
        {/* Header Section */}
        <header style={styles.mainHeader}>
          <button
            onClick={() => handleNavClick("Home")}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              margin: 0,
              cursor: "pointer",
            }}
          >
            <div style={styles.logo}>
              <span style={styles.logo_yellow}>A</span>
              <span style={styles.logo_blue}>nesDelalic</span>
              <span style={styles.logo_yellow}>.com</span>
            </div>
          </button>

          <nav style={styles.navMenu}>
            {["Vart är jag?", "Bucket list", "Bloggar", "Film Söndag"].map(
              (item) => (
                <button
                  key={item}
                  style={styles.navBtn}
                  onClick={() => handleNavClick(item)}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-3px) scale(1.05)";
                    e.target.style.background = "#d7b7d4";
                    e.target.style.boxShadow =
                      "0 10px 25px rgba(0, 0, 0, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0) scale(1)";
                    e.target.style.background = "#6d2777";
                    e.target.style.boxShadow =
                      "0 6px 15px rgba(0, 0, 0, 0.3), inset 0 2px 5px rgba(255, 255, 255, 0.3)";
                  }}
                >
                  {item}
                </button>
              )
            )}
          </nav>
        </header>

        {/* Main Content */}
        <main style={styles.contentArea}>
          <div style={styles.mainContent}>
            <h1 style={styles.welcomeTitle}>Välkommen till Film Söndag!</h1>
            <p style={styles.welcomeText}>
              Här kan du se kommande film eller filmer vi har sett! + våra
              omdömen!
            </p>

            {/* Upcoming Movie Section */}
            <div style={styles.upcomingSection}>
              <h2 style={styles.sectionTitle}>Veckans film är.....</h2>

              <div className="movie-card" style={styles.movieCard}>
                <div
                  className="poster-container"
                  style={styles.posterContainer}
                >
                  {upcomingMovie.poster ? (
                    <img
                      src={upcomingMovie.poster}
                      alt={upcomingMovie.title}
                      style={styles.moviePoster}
                    />
                  ) : (
                    <div
                      style={styles.posterPlaceholder}
                      className="upload-hover"
                    >
                      <label style={styles.uploadLabel}>
                        <Upload size={40} color="#666" />
                        <span style={styles.uploadText}>
                          Ladda upp affisch
                        </span>
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

                <div style={styles.movieInfo}>
                  <h3 style={styles.movieTitle}>{upcomingMovie.title}</h3>
                  <p style={styles.chosenBy}>Valdes av: {upcomingMovie.chosenBy}</p>
                </div>
              </div>

              {/* Movie Night Info */}
              <div style={styles.movieNightInfo}>
              </div>
            </div>

            {/* Previous Movies Section */}
            <div style={styles.previousSection}>
              <h2 style={styles.sectionTitle}>Se tidigare filmer</h2>

              <div style={styles.moviesList}>
                {previousMovies.map((movie, index) => (
                  <div key={index}>
                    <div
                      className="movie-item"
                      style={styles.movieItem}
                      onClick={() => toggleMovieExpansion(index)}
                    >
                      <div style={styles.movieItemContent}>
                        <h3 style={styles.movieItemTitle}>{movie.title}</h3>
                        <p style={styles.movieItemChosen}>
                          ({movie.chosenBy})
                        </p>
                      </div>
                      <ChevronRight
                        size={24}
                        color="#666"
                        style={{
                          ...styles.chevron,
                          transform: movie.expanded
                            ? "rotate(90deg)"
                            : "rotate(0deg)",
                        }}
                      />
                    </div>

                    <div
                      className={`review-section ${
                        movie.expanded ? "expanded" : ""
                      }`}
                      style={{
                        ...styles.reviewSection,
                        maxHeight: movie.expanded ? "500px" : "0",
                      }}
                    >
                      <div style={styles.reviewsContainer}>
                        {movie.reviews.map((review, reviewIndex) => (
                          <div key={reviewIndex} style={styles.reviewItem}>
                            <div style={styles.reviewHeader}>
                              <h4 style={styles.reviewerName}>
                                {review.person}
                              </h4>
                              {renderStarRating(review.rating)}
                            </div>
                            {review.comment && (
                              <p style={styles.reviewComment}>
                                "{review.comment}"
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer style={styles.footer}>
          <p>&copy; 2025 AnesDelalic.com - Film Söndag! 🎬</p>
        </footer>
      </div>
    </div>
  );
};

// Styles
const styles = {
  body: {
    fontFamily: "Comic Sans MS, cursive, Arial, sans-serif",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    minHeight: "100vh",
    zIndex: -1,
    padding: "0",
    margin: "0",
    boxSizing: "border-box",
  },

  siteContainer: {
    maxWidth: "70vw",
    width: "100%",
    minWidth: "320px",
    background: "rgba(255, 255, 255, 0.98)",
    borderRadius: "clamp(15px, 2.5vw, 25px)",
    boxShadow:
      "0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 8px rgba(255, 255, 255, 0.1)",
    overflow: "hidden",
    border: "clamp(3px, 0.5vw, 5px) solid #fff",
    position: "relative",
    margin: "clamp(20px, 5vh, 50px) auto",
    padding: "0",
    boxSizing: "border-box",
  },

  mainHeader: {
    background: "#a9ce3d",
    padding: "clamp(15px, 3vw, 25px) clamp(10px, 2vw, 20px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    position: "relative",
    overflow: "hidden",
    borderBottom: "clamp(3px, 0.5vw, 5px) solid #fff",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
    gap: "clamp(10px, 2vw, 20px)",
  },

  logo: {
    fontSize: "clamp(1.8em, 4vw, 3.5em)",
    fontWeight: "900",
    letterSpacing: "clamp(1px, 0.2vw, 2px)",
    transform: "rotate(-2deg)",
    padding: "clamp(5px, 1vw, 10px) clamp(10px, 2vw, 20px)",
    backdropFilter: "blur(5px)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  logo_yellow: {
    color: "#fafd2e",
    textShadow:
      "clamp(2px, 0.5vw, 4px) clamp(2px, 0.5vw, 4px) 0px #621704, clamp(3px, 0.7vw, 6px) clamp(3px, 0.7vw, 6px) clamp(5px, 1vw, 10px)",
  },

  logo_blue: {
    color: "#18f4fa",
    textShadow:
      "clamp(2px, 0.5vw, 4px) clamp(2px, 0.5vw, 4px) 0px #0d0681, clamp(3px, 0.7vw, 6px) clamp(3px, 0.7vw, 6px) clamp(5px, 1vw, 10px)",
  },

  navMenu: {
    display: "flex",
    gap: "clamp(8px, 1.5vw, 12px)",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
    minWidth: "0",
  },

  navBtn: {
    background: "#682179",
    border: "clamp(2px, 0.3vw, 3px) solid #fff",
    padding: "clamp(10px, 1.5vw, 15px) clamp(15px, 2.5vw, 25px)",
    borderRadius: "clamp(25px, 5vw, 50px)",
    color: "#fff",
    fontWeight: "800",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
    fontSize: "clamp(10px, 1.2vw, 14px)",
    letterSpacing: "clamp(0.5px, 0.1vw, 1px)",
    boxShadow:
      "0 6px 15px rgba(0, 0, 0, 0.3), inset 0 2px 5px rgba(255, 255, 255, 0.3)",
    whiteSpace: "nowrap",
  },

  contentArea: {
    padding: "clamp(20px, 3vw, 40px)",
    minHeight: "60vh",
  },

  mainContent: {
    width: "100%",
  },

  welcomeTitle: {
    fontSize: "clamp(2.2em, 4vw, 3.2em)",
    marginBottom: "15px",
    textAlign: "center",
    fontWeight: "900",
    color: "#333",
    textShadow: "3px 3px 6px rgba(0, 0, 0, 0.1)",
  },

  welcomeText: {
    fontSize: "clamp(1.1em, 2vw, 1.4em)",
    textAlign: "center",
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "40px",
    fontWeight: "500",
  },

  upcomingSection: {
    marginBottom: "40px",
    textAlign: "center",
  },

  sectionTitle: {
  fontSize: '1.8em',
  marginBottom: '12px',
  textAlign: 'center',
  fontWeight: '900',
  color: '#f3f869', // White text
  letterSpacing: '0.8px',
  lineHeight: '1.2',
  textShadow: 
    // Thinner, more subtle stroke
    '-1px -1px 0 #000, ' +
    '1px -1px 0 #000, ' +
    '-1px 1px 0 #000, ' +
    '1px 1px 0 #000',
  // Add these properties for smoother text rendering
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  },

  movieCard: {
    display: "flex",
    gap: "30px",
    background: "linear-gradient(135deg, #ff6b9d 0%, #f8b500 100%)",
    borderRadius: "25px",
    padding: "30px",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    boxShadow:
      "0 15px 40px rgba(0, 0, 0, 0.3), inset 0 2px 10px rgba(255, 255, 255, 0.2)",
    border: "4px solid #fff",
    position: "relative",
    overflow: "hidden",
  },

  posterContainer: {
    width: "clamp(180px, 25vw, 240px)",
    height: "clamp(270px, 37.5vw, 360px)",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
    border: "3px solid #fff",
    transition: "all 0.3s ease",
  },

  moviePoster: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },

  posterPlaceholder: {
    width: "100%",
    height: "100%",
    background: "rgba(255, 255, 255, 0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "#666",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "2px dashed #ccc",
  },

  uploadLabel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    cursor: "pointer",
    padding: "30px",
    borderRadius: "15px",
    transition: "all 0.3s ease",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },

  uploadText: {
    fontSize: "clamp(14px, 1.5vw, 18px)",
    fontWeight: "600",
    textAlign: "center",
  },

  movieInfo: {
    flex: "1",
    textAlign: "center",
    color: "#fff",
    minWidth: "300px",
  },

  movieTitle: {
    fontSize: "clamp(2.5em, 5vw, 4em)",
    fontWeight: "900",
    margin: "0 0 15px 0",
    textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },

  chosenBy: {
    fontSize: "clamp(1.3em, 2.5vw, 2em)",
    fontWeight: "800",
    margin: "15px 0",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    padding: "10px 20px",
    borderRadius: "25px",
    display: "inline-block",
  },

  movieDate: {
    fontSize: "clamp(1.1em, 2vw, 1.4em)",
    fontWeight: "600",
    margin: "15px 0 25px 0",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    background: "rgba(0, 0, 0, 0.2)",
    padding: "8px 16px",
    borderRadius: "20px",
    display: "inline-block",
  },

  movieNightInfo: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
  },

  infoCard: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "20px",
    padding: "25px",
    color: "#fff",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
    border: "3px solid #fff",
    maxWidth: "400px",
  },

  infoTitle: {
    fontSize: "clamp(1.3em, 2.2vw, 1.6em)",
    fontWeight: "800",
    margin: "0 0 15px 0",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  },

  infoText: {
    fontSize: "clamp(1em, 1.8vw, 1.2em)",
    fontWeight: "600",
    margin: "8px 0",
    lineHeight: "1.5",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
  },

  // Previous Movies Section Styles
  previousSection: {
    marginTop: "50px",
    textAlign: "center",
  },

  moviesList: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "600px",
    margin: "0 auto",
  },

  movieItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "15px",
    padding: "20px 25px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    border: "2px solid #f0f0f0",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  movieItemContent: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    flex: "1",
  },

  movieItemTitle: {
    fontSize: "clamp(1.1em, 2vw, 1.3em)",
    fontWeight: "700",
    color: "#333",
    margin: "0",
  },

  movieItemChosen: {
    fontSize: "clamp(1em, 1.8vw, 1.1em)",
    color: "#666",
    margin: "0",
    fontWeight: "500",
  },

  chevron: {
    transition: "transform 0.3s ease",
  },

  // Review section styles
  reviewSection: {
    overflow: "hidden",
    transition: "max-height 0.5s ease-out",
    background: "rgba(245, 245, 245, 0.9)",
    borderRadius: "0 0 15px 15px",
    marginTop: "-5px",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
  },

  reviewsContainer: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  reviewItem: {
    background: "white",
    borderRadius: "12px",
    padding: "15px",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.08)",
    border: "1px solid #eee",
  },

  reviewHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },

  reviewerName: {
    fontSize: "clamp(1em, 1.8vw, 1.2em)",
    fontWeight: "700",
    color: "#333",
    margin: "0",
  },

  reviewComment: {
    fontSize: "clamp(0.9em, 1.6vw, 1em)",
    color: "#666",
    fontStyle: "italic",
    margin: "5px 0 0 0",
    lineHeight: "1.4",
  },

  footer: {
    background: "#b6d559",
    color: "white",
    textAlign: "center",
    padding: "clamp(20px, 3vw, 25px)",
    marginTop: "clamp(20px, 3vw, 25px)",
    fontWeight: "700",
    fontSize: "clamp(1em, 1.8vw, 1.1em)",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    letterSpacing: "clamp(0.5px, 0.1vw, 1px)",
    border: "clamp(3px, 0.5vw, 4px) solid #fff",
    borderRadius: "0 0 clamp(15px, 2vw, 20px) clamp(15px, 2vw, 20px)",
    boxShadow: "0 -5px 15px rgba(0, 0, 0, 0.2)",
  },
};

export default FilmSondag;