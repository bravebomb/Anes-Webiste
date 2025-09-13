import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState('Featured Video Title');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    console.log('🎉 React Home component loaded successfully!');
    
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

    const style = document.createElement('style');
    style.setAttribute('data-home-2000s', 'true');
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
      
      @keyframes flyAcrossScreen {
        0% { 
          left: -100px; 
          top: 20%;
          transform: rotate(-10deg);
        }
        25% { 
          top: 30%;
          transform: rotate(5deg);
        }
        50% { 
          top: 15%;
          transform: rotate(-5deg);
        }
        75% { 
          top: 25%;
          transform: rotate(10deg);
        }
        100% { 
          left: calc(100% + 100px); 
          top: 35%;
          transform: rotate(-10deg);
        }
      }
      
      @keyframes flyFromBottom {
        0% { 
          left: calc(100% + 100px); 
          top: 60%;
          transform: rotate(15deg) scaleX(-1);
        }
        25% { 
          top: 70%;
          transform: rotate(-5deg) scaleX(-1);
        }
        50% { 
          top: 55%;
          transform: rotate(10deg) scaleX(-1);
        }
        75% { 
          top: 65%;
          transform: rotate(-15deg) scaleX(-1);
        }
        100% { 
          left: -100px; 
          top: 50%;
          transform: rotate(5deg) scaleX(-1);
        }
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
      
      .video-card:hover {
        animation: wiggle 0.5s ease-in-out;
      }
      
      .blink-text {
        animation: blink 1.5s infinite;
      }
      
      .flying-pet {
        position: fixed;
        width: 80px;
        height: 60px;
        z-index: 1000;
        pointer-events: none;
      }
      
      .flying-shiba {
        animation: flyAcrossScreen 8s linear;
      }
      
      .flying-cat {
        animation: flyFromBottom 6s linear;
      }
    `;
    document.head.appendChild(style);

    // Flying pets function
    const createFlyingPet = () => {
      const pets = [
        { type: 'shiba', emoji: '🐕', class: 'flying-shiba' },
        { type: 'cat', emoji: '🐱', class: 'flying-cat' },
      ];
      
      const randomPet = pets[Math.floor(Math.random() * pets.length)];
      
      const petElement = document.createElement('div');
      petElement.className = `flying-pet ${randomPet.class}`;
      petElement.innerHTML = randomPet.emoji;
      petElement.style.fontSize = '60px';
      petElement.style.filter = 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))';
      
      document.body.appendChild(petElement);
      
      // Remove the pet after animation completes
      const animationDuration = randomPet.type === 'shiba' ? 8000 : 6000;
      setTimeout(() => {
        if (petElement.parentNode) {
          petElement.parentNode.removeChild(petElement);
        }
      }, animationDuration);
    };

    // Create flying pets every 45-75 seconds (random interval)
    const createPetInterval = () => {
      const randomDelay = Math.random() * 30000 + 45000; // 45-75 seconds
      setTimeout(() => {
        createFlyingPet();
        createPetInterval(); // Schedule next pet
      }, randomDelay);
    };
    
    // Start the pet flying cycle
    createPetInterval();

    return () => {
      const existingStyle = document.querySelector('style[data-home-2000s]');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  const handleNavClick = (buttonName) => {
    console.log('Button clicked:', buttonName);
    
    switch(buttonName) {
      case 'Home':
        navigate('Home');
        break;
      case 'Bucket list':
        navigate('/bucket-list');
        break;
      case 'Bloggar':
        navigate('/bloggar');
        break;
      case 'Film Söndag':
        navigate('/film-sondag');
        break;
      default:
        console.log('Unknown navigation:', buttonName);
    }
  };

  const handlePlayVideo = () => {
    setIsPlaying(!isPlaying);
    console.log('Play button clicked!');
  };

  const loadVideo = (videoName) => {
    setCurrentVideo(videoName);
    setIsPlaying(false);
    console.log('Loading video:', videoName);
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.logo}>
            <span style={styles.logoText}>AnesDelalic</span>
            <span style={styles.logoCom}>.com</span>
          </div>
          
          <div style={styles.headerRight}>
            <div style={styles.dateDisplay}>
              Idag är det {currentDate}
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div style={styles.navBar}>
          {[
            { name: 'Vart är jag?', icon: '📍', color: '#FF6B9D' },
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
                <span className="sparkle-text">Welcome!</span>
              </div>
              <div style={styles.widgetContent}>
                <div style={styles.welcomeMessage}>
                  <p style={styles.welcomeText}>
                    🎉 Hej och välkommen till min hemsida! 
                  </p>
                  <p style={styles.welcomeText}>
                    Här hittar du allt möjligt kul som jag gör och tänker på!
                  </p>
                  <div className="blink-text" style={styles.blinkingWelcome}>
                    ✨ KOLLA RUNT! ✨
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.sidebarWidget}>
              <div style={styles.widgetHeader}>
                <span className="blink-text">LATEST UPDATES!</span>
              </div>
              <div style={styles.widgetContent}>
                <div style={styles.updatesList}>
                  <div style={styles.updateItem}>
                    📺 Ny vlogg ute nu!
                  </div>
                  <div style={styles.updateItem}>
                    🎬 Film Söndag är live!
                  </div>
                  <div style={styles.updateItem}>
                    📝 Nya blogginlägg!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div style={styles.centerContent}>
            {/* TBD Box */}
            <div style={styles.contentBox}>
              <div style={styles.contentHeader}>
                🚧 UNDER CONSTRUCTION! 🚧
              </div>
              <div style={styles.tbdContent}>
                <h2 style={styles.tbdTitle}>TBD</h2>
                <p style={styles.tbdText}>
                  <span className="blink-text">✨ COMING SOON! ✨</span>
                </p>
                <p style={styles.tbdDescription}>
                  Något coolt kommer här snart... håll utkik! 👀
                </p>
              </div>
            </div>

            {/* Video Section */}
            <div style={styles.videoSection}>
              <div style={styles.videoSectionHeader}>
                🎬 LATEST VLOGG! 🎬
              </div>
              
              <div className="video-card" style={styles.videoCard}>
                <div style={styles.videoInfo}>
                  <h2 style={styles.videoTitle}>
                    <span className="sparkle-text">Kika in senaste vloggen</span>
                  </h2>
                </div>
                
                <div style={styles.videoScreen}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/nTUQA-54W04"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: '15px' }}
                  ></iframe>
                </div>
                
                <div style={styles.videoFooter}>
                  <h3 style={styles.videoSubtitle}>
                    🎉 Examensbal 2025!! 🎉
                  </h3>
                  <div style={styles.videoStats}>
                    <span style={styles.statItem}>👀 1,337 views</span>
                    <span style={styles.statItem}>❤️ 420 likes</span>
                    <span style={styles.statItem}>💬 69 comments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div style={styles.rightSidebar}>
            <div style={styles.sidebarWidget}>
              <div style={styles.widgetHeader}>
                <span>Milos begrepp!</span>
              </div>
              <div style={styles.widgetContent}>
                <div style={styles.factBox}>
                  <p style={styles.factText}>
                    Bosniska hajen
                  </p>
                  <p style={styles.factText}>
                    50/50
                  </p>
                  <p style={styles.factText}>
                    on kradi!
                  </p>
                </div>
              </div>
            </div>

            <div style={styles.sidebarWidget}>
              <div style={styles.widgetHeader}>
                <span className="blink-text">VISITOR COUNTER!</span>
              </div>
              <div style={styles.widgetContent}>
                <div style={styles.visitorCounter}>
                  <div style={styles.counterDisplay}>
                    <span style={styles.counterNumber}>001337</span>
                  </div>
                  <p style={styles.counterText}>
                    🎉 You are visitor #{Math.floor(Math.random() * 1000) + 1000}! 🎉
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <div style={styles.footerContent}>
            <span>© 2025 AnesDelalic.com! 🌟</span>
            <span className="blink-text">✨ Labubu lovers! ✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2000s-inspired styles
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
    position: 'relative',
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
    minHeight: '600px',
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

  welcomeMessage: {
    textAlign: 'center',
  },

  welcomeText: {
    fontSize: '12px',
    color: '#333',
    margin: '0 0 8px 0',
    fontWeight: 'bold',
    lineHeight: '1.4',
  },

  blinkingWelcome: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#FF1493',
    marginTop: '10px',
    fontFamily: "'Fredoka One', cursive",
  },

  updatesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },

  updateItem: {
    background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.2), rgba(50, 205, 50, 0.2))',
    padding: '8px 12px',
    borderRadius: '10px',
    fontSize: '11px',
    fontWeight: 'bold',
    color: '#333',
    border: '2px solid #FFD700',
  },

  centerContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },

  contentBox: {
    background: '#FFFFFF',
    border: '4px solid #FFD700',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 8px 16px rgba(255, 215, 0, 0.4)',
  },

  contentHeader: {
    background: 'linear-gradient(45deg, #FFD700, #FF8C00, #FFD700)',
    color: '#000',
    padding: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '1px 1px 0 rgba(255, 255, 255, 0.5)',
    fontFamily: "'Fredoka One', cursive",
    letterSpacing: '2px',
  },

  tbdContent: {
    padding: '30px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 215, 0, 0.1) 100%)',
  },

  tbdTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#FF1493',
    margin: '0 0 15px 0',
    textShadow: '4px 4px 0 #FFD700, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000',
    fontFamily: "'Bungee', 'Fredoka One', cursive",
    letterSpacing: '5px',
  },

  tbdText: {
    fontSize: '18px',
    color: '#FF1493',
    marginBottom: '15px',
    fontWeight: 'bold',
  },

  tbdDescription: {
    fontSize: '16px',
    color: '#666',
    fontWeight: 'bold',
  },

  videoSection: {
    background: '#FFFFFF',
    border: '4px solid #00BFFF',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 8px 16px rgba(0, 191, 255, 0.4)',
  },

  videoSectionHeader: {
    background: 'linear-gradient(45deg, #00BFFF, #32CD32, #00BFFF)',
    color: '#FFFFFF',
    padding: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '2px 2px 0 rgba(0, 0, 0, 0.5)',
    fontFamily: "'Fredoka One', cursive",
    letterSpacing: '2px',
  },

  videoCard: {
    padding: '25px',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(0, 191, 255, 0.1) 100%)',
  },

  videoInfo: {
    textAlign: 'center',
    marginBottom: '20px',
  },

  videoTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#FF1493',
    margin: '0',
    fontFamily: "'Fredoka One', cursive",
    textShadow: '2px 2px 0 #FFD700, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  },

  videoScreen: {
    background: 'linear-gradient(135deg, #000 0%, #333 100%)',
    borderRadius: '15px',
    height: '350px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    position: 'relative',
    overflow: 'hidden',
    border: '4px solid #FF69B4',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), inset 0 5px 15px rgba(255, 255, 255, 0.1)',
  },

  videoFooter: {
    textAlign: 'center',
  },

  videoSubtitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#00BFFF',
    margin: '0 0 15px 0',
    fontFamily: "'Fredoka One', cursive",
    textShadow: '2px 2px 0 #FFFFFF, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  },

  videoStats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },

  statItem: {
    background: 'linear-gradient(45deg, #FFD700, #FF8C00)',
    color: '#000',
    padding: '8px 15px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold',
    border: '2px solid #FFFFFF',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.3)',
    fontFamily: "'Fredoka One', cursive",
  },

  factBox: {
    background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.2), rgba(50, 205, 50, 0.2))',
    padding: '15px',
    borderRadius: '10px',
    border: '2px solid #FFD700',
  },

  factText: {
    fontSize: '11px',
    color: '#333',
    margin: '0 0 8px 0',
    fontWeight: 'bold',
    lineHeight: '1.4',
  },

  visitorCounter: {
    textAlign: 'center',
  },

  counterDisplay: {
    background: '#000',
    color: '#00FF00',
    padding: '15px',
    borderRadius: '10px',
    marginBottom: '10px',
    border: '3px solid #00FF00',
    boxShadow: '0 0 20px rgba(0, 255, 0, 0.5), inset 0 0 20px rgba(0, 255, 0, 0.1)',
    fontFamily: 'monospace',
  },

  counterNumber: {
    fontSize: '24px',
    fontWeight: 'bold',
    letterSpacing: '3px',
  },

  counterText: {
    fontSize: '11px',
    color: '#333',
    fontWeight: 'bold',
    margin: 0,
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
    
    videoScreen: {
      height: '250px',
    },
    
    footerContent: {
      flexDirection: 'column',
      gap: '10px',
      textAlign: 'center',
    },
  },
};

export default Home;