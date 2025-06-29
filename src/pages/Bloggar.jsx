// Home.jsx - Responsive React Component Version - iCarly Style
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // React State - This is how we store data that can change
  const [currentVideo, setCurrentVideo] = useState('Featured Video Title');
  const [isPlaying, setIsPlaying] = useState(false);
  
  // React Router navigation hook
  const navigate = useNavigate();

  // useEffect runs when the component first loads (like window.onload)
  useEffect(() => {
    console.log('🎉 React Home component loaded successfully!');
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
      
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        60% { transform: translateY(-5px); }
      }
    `;
    document.head.appendChild(style);
    
    // Add mouse move effect to body
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.body.style.backgroundPosition = x + '% ' + y + '%';
    };

    // Add the event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup function - removes event listener when component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty array means this only runs once when component mounts

  // Function to handle navigation button clicks
  const handleNavClick = (buttonName) => {
    console.log('Button clicked:', buttonName);
    
    // Navigate to different pages based on button name
    switch(buttonName) {
      case 'Bloggar':
        navigate('bloggar');
        break;
      case 'Bukcet list':
        navigate('/bucket-list');
        break;
      case 'bilder':
        navigate('/gallery');
        break;
      case 'Albins håla':
        navigate('/halan');
        break;
      default:
        console.log('Unknown navigation:', buttonName);
    }
  };

  // Function to handle play button click
  const handlePlayVideo = () => {
    setIsPlaying(!isPlaying); // Toggle playing state
    alert('🎬 Playing video! (This is just a demo)');
    console.log('Play button clicked!');
  };

  // Function to load different videos
  const loadVideo = (videoName) => {
    setCurrentVideo(videoName); // Update the current video state
    setIsPlaying(false); // Reset playing state
    alert(`Loading: ${videoName} 📺`);
    console.log('Loading video:', videoName);
  };

  // Function to handle emoji button clicks
  const handleEmojiClick = (emoji) => {
    console.log('Emoji clicked:', emoji);
    switch(emoji) {
      case '⚡':
        window.open('https://www.youtube.com/watch?v=IudeTGBgJu8', '_blank');
        break;
      case 'Bukcet list':
        navigate('/bucket-list');
        break;
      case 'bilder':
        navigate('/gallery');
        break;
      case 'Albins håla':
        navigate('/halan');
        break;
      default:
        console.log('Unknown navigation:', buttonName);
    }
  };

return (
    <div style={styles.body}>
      {/* Main Container */}
      <div style={styles.siteContainer}>
        
        {/* Header Section */}
        <header style={styles.mainHeader}>
          {/* Logo */}
          <div style={styles.logo}>
            <span style={styles.logo_yellow}>A</span>
            <span style={styles.logo_blue}>nesDelalic</span>
            <span style={styles.logo_yellow}>.com</span>
          </div>
          
          {/* Navigation Menu */}
          <nav style={styles.navMenu}>
            <button 
              style={styles.navBtn} 
              onClick={() => handleNavClick('Bloggar')}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.background = '#d7b7d4';
                e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.background = '#6d2777';
                e.target.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3), inset 0 2px 5px rgba(255, 255, 255, 0.3)';
              }}
            >
              Vart är jag?
            </button>
            <button 
              style={styles.navBtn} 
              onClick={() => handleNavClick('Bukcet list')}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.background = '#d7b7d4';
                e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.background = '#6d2777';
                e.target.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3), inset 0 2px 5px rgba(255, 255, 255, 0.3)';
              }}
            >
              Bukcet list
            </button>
            <button 
              style={styles.navBtn} 
              onClick={() => handleNavClick('Bloggar')}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.background = '#d7b7d4';
                e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.background = '#6d2777';
                e.target.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3), inset 0 2px 5px rgba(255, 255, 255, 0.3)';
              }}
            >
              Bloggar
            </button>
            <button 
              style={styles.navBtn} 
              onClick={() => handleNavClick('Albins håla')}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.background = '#d7b7d4';
                e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.background = '#6d2777';
                e.target.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3), inset 0 2px 5px rgba(255, 255, 255, 0.3)';
              }}
            >
              Hålan
            </button>
          </nav>
        </header>

        {/* Main Content Area */}
        <main style={styles.contentArea}>
          {/* Your main content goes here */}
          <div style={styles.mainContent}>
            <h1 style={styles.welcomeTitle}>Välkommen till bloggpanelen!</h1>
            <p style={styles.welcomeText}>
              Här kan du hitta alla våra bloggar som vi har gjort än så länge!
            </p>

            {/* Scattered Emoji Buttons - Updated positions */}
            <div style={styles.buttonContent}>
            {/* Button 1 - Top left area (🎮) */}
              <button 
                style={{...styles.emojiButton, top: '15%', left: '12%'}}
                onClick={() => handleEmojiClick('🎮')}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.3) rotate(10deg)';
                  e.target.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                  e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
                }}
              >
                🎮
              </button>

              {/* Button 2 - Top right area (🚀) */}
              <button 
                style={{...styles.emojiButton, top: '25%', right: '15%'}}
                onClick={() => handleEmojiClick('🚀')}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.3) rotate(-10deg)';
                  e.target.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                  e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
                }}
              >
                🚀
              </button>

              {/* Button 3 - Center area (🎨) */}
              <button 
                style={{...styles.emojiButton, top: '45%', left: '45%', transform: 'translateX(-50%)'}}
                onClick={() => handleEmojiClick('🎨')}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateX(-50%) scale(1.3) rotate(15deg)';
                  e.target.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateX(-50%) scale(1) rotate(0deg)';
                  e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
                }}
              >
                🎨
              </button>

              {/* Button 4 - Bottom left area (⚡) */}
              <button 
                style={{...styles.emojiButton, bottom: '25%', left: '20%'}}
                onClick={() => handleEmojiClick('⚡')}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.3) rotate(-15deg)';
                  e.target.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                  e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
                }}
              >
                <img 
                  src="./public/binder.png" 
                  alt="Rocket" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    pointerEvents: 'none' // Förhindrar att bilden interfererar med hover-effekter
                  }}
                />
              </button>

              {/* Button 5 - Bottom right area (🌟) */}
              <button 
                style={{...styles.emojiButton, bottom: '15%', right: '25%'}}
                onClick={() => handleEmojiClick('🌟')}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.3) rotate(20deg)';
                  e.target.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                  e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
                }}
              >
                🌟
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer style={styles.footer}>
          <p>&copy; 2025 MySite.com - Built with React!</p>
        </footer>
      </div>
    </div>
  );
};

// Responsive Styles Object
const styles = {
  body: {
    fontFamily: 'Comic Sans MS, cursive, Arial, sans-serif',
    backgroundImage: 'url(Homebackgroundimage.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '100vh',
    zIndex: -1,
    padding: '0',
    margin: '0',
    boxSizing: 'border-box',
  },

  siteContainer: {
    maxWidth: '70vw',
    width: '100%',
    minWidth: '320px',
    background: 'rgba(255, 255, 255, 0.98)',
    borderRadius: 'clamp(15px, 2.5vw, 25px)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 8px rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
    border: 'clamp(3px, 0.5vw, 5px) solid #fff',
    position: 'relative',
    margin: 'clamp(20px, 5vh, 50px) auto',
    padding: '0',
    boxSizing: 'border-box',
  },

  mainHeader: {
    background: '#a9ce3d',
    padding: 'clamp(15px, 3vw, 25px) clamp(10px, 2vw, 20px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: 'clamp(3px, 0.5vw, 5px) solid #fff',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
    gap: 'clamp(10px, 2vw, 20px)',
  },

  logo: {
    fontSize: 'clamp(1.8em, 4vw, 3.5em)',
    fontWeight: '900',
    letterSpacing: 'clamp(1px, 0.2vw, 2px)',
    transform: 'rotate(-2deg)',
    padding: 'clamp(5px, 1vw, 10px) clamp(10px, 2vw, 20px)',
    backdropFilter: 'blur(5px)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  logo_yellow: { 
    color: '#fafd2e',
    textShadow: 'clamp(2px, 0.5vw, 4px) clamp(2px, 0.5vw, 4px) 0px #621704, clamp(3px, 0.7vw, 6px) clamp(3px, 0.7vw, 6px) clamp(5px, 1vw, 10px)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  },

  logo_blue: { 
    color: '#18f4fa',
    textShadow: 'clamp(2px, 0.5vw, 4px) clamp(2px, 0.5vw, 4px) 0px #0d0681, clamp(3px, 0.7vw, 6px) clamp(3px, 0.7vw, 6px) clamp(5px, 1vw, 10px)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  },

  navMenu: {
    display: 'flex',
    gap: 'clamp(8px, 1.5vw, 12px)',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1',
    minWidth: '0',
  },

  navBtn: {
    background: '#682179',
    border: 'clamp(2px, 0.3vw, 3px) solid #fff',
    padding: 'clamp(10px, 1.5vw, 15px) clamp(15px, 2.5vw, 25px)',
    borderRadius: 'clamp(25px, 5vw, 50px)',
    color: '#fff',
    fontWeight: '800',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    fontSize: 'clamp(10px, 1.2vw, 14px)',
    letterSpacing: 'clamp(0.5px, 0.1vw, 1px)',
    textShadow: '#9b749f',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3), inset 0 2px 5px rgba(255, 255, 255, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    minWidth: 'max-content',
  },

  contentArea: {
    display: 'flex',
    gap: 'clamp(15px, 2vw, 20px)',
    padding: 'clamp(15px, 2vw, 20px)',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginBottom: '10%'
  },

  // Updated mainContent to allow for scattered buttons
  mainContent: {
    position: 'relative', // This is important for absolute positioning
    width: '100%',
    height: '100vh', // Full viewport height for button spreading
    padding: '20px',
    flex: '1',
  },

  buttonContent: {
    position: 'relative', // This is important for absolute positioning
    width: '100%',
    height: '100vh', // Full viewport height for button spreading
    padding: '20px',
    flex: '1',
  },

  welcomeTitle: {
    fontSize: 'clamp(1.8em, 3.5vw, 2.5em)',
    marginBottom: '15px',
    textAlign: 'center',
    fontWeight: '900',
    color: '#333',
  },

  welcomeText: {
    fontSize: 'clamp(1em, 1.8vw, 1.2em)',
    textAlign: 'center',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '30px',
  },

  // Updated emoji button styles
  emojiButton: {
    position: 'absolute', // This is key for scattering
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    border: '3px solid #fff',
    background: 'linear-gradient(135deg, #ff6b9d, #f8b500)',
    fontSize: '24px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10, // Make sure buttons appear above other content
  },


  footer: {
    background: '#b6d559',
    color: 'white',
    textAlign: 'center',
    padding: 'clamp(20px, 3vw, 25px)',
    marginTop: 'clamp(20px, 3vw, 25px)',
    fontWeight: '700',
    fontSize: 'clamp(1em, 1.8vw, 1.1em)',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    letterSpacing: 'clamp(0.5px, 0.1vw, 1px)',
    border: 'clamp(3px, 0.5vw, 4px) solid #fff',
    borderRadius: '0 0 clamp(15px, 2vw, 20px) clamp(15px, 2vw, 20px)',
    boxShadow: '0 -5px 15px rgba(0, 0, 0, 0.2)',
  },
};

export default Home;