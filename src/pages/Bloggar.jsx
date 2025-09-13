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
      
      @keyframes imageHover {
        0% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(1.05) rotate(2deg); }
        100% { transform: scale(1) rotate(0deg); }
      }
      
      @keyframes playButtonPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
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
      
      .image-card:hover {
        animation: wiggle 0.5s ease-in-out;
      }
      
      .image-card:hover .albin-image {
        animation: imageHover 0.6s ease-in-out;
      }
      
      .image-card:hover .play-button {
        animation: playButtonPulse 0.8s ease-in-out infinite;
        background: #FF1493;
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
      
      .floating-element {
        animation: bounce 3s ease-in-out infinite;
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
      
      const animationDuration = randomPet.type === 'shiba' ? 8000 : 6000;
      setTimeout(() => {
        if (petElement.parentNode) {
          petElement.parentNode.removeChild(petElement);
        }
      }, animationDuration);
    };

    // Create flying pets every 45-75 seconds
    const createPetInterval = () => {
      const randomDelay = Math.random() * 30000 + 45000;
      setTimeout(() => {
        createFlyingPet();
        createPetInterval();
      }, randomDelay);
    };
    
    createPetInterval();

    return () => {
      const existingStyle = document.querySelector('style[data-home-2000s]');
      if (existingStyle) {
        existingStyle.remove();
      }
      clearInterval(dateInterval);
    };
  }, []);

  const handleNavClick = (buttonName) => {
    console.log('Button clicked:', buttonName);
    
    switch(buttonName) {
      case 'Hem':
        navigate('/Home');
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
      case 'Home':
        navigate('/');
        break;
      default:
        console.log('Unknown navigation:', buttonName);
    }
  };

  // Vlog data med Albin bilder
  const vlogData = [
    {
      id: 1,
      title: 'NATIONAL DAGEN',
      url: 'https://www.youtube.com/watch?v=IudeTGBgJu8',
      image: './public/binder.png', // Albin bilden
      description: 'Epic gaming session!',
      color: '#FF69B4'
    },
  ];

  const handleVlogClick = (vlog) => {
    console.log('Opening vlog:', vlog.title);
    window.open(vlog.url, '_blank');
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <button
            onClick={() => handleNavClick('Home')}
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
                <span className="sparkle-text">ALBIN GALLERY!</span>
              </div>
              <div style={styles.widgetContent}>
                <div style={styles.channelList}>
                  {vlogData.slice(0, 3).map((vlog, index) => (
                    <div 
                      key={vlog.id}
                      style={styles.channelItem}
                      onClick={() => handleVlogClick(vlog)}
                    >
                      <span style={styles.channelNumber}>VID {index + 1}</span>
                      <span style={styles.channelTitle}>{vlog.title}</span>
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
                🎬 KLICKA PÅ ALBINS BILDER FÖR VLOGS! 🎬
              </div>
              
              <div style={styles.welcomeSection}>
                <h1 style={styles.welcomeTitle}>
                  <span className="sparkle-text">VLOGG GALLERY!</span>
                </h1>
                <p style={styles.welcomeText}>
                  <span className="blink-text">✨ TRYCK FÖR ATT SE MER ✨</span>
                </p>
                <p style={styles.subText}>
                </p>
              </div>

              {/* Image Grid */}
              <div style={styles.imageGrid}>
                {vlogData.map((vlog, index) => (
                  <div
                    key={vlog.id}
                    className="image-card floating-element"
                    style={{
                      ...styles.imageContainer,
                      animationDelay: `${index * 0.3}s`,
                    }}
                    onClick={() => handleVlogClick(vlog)}
                  >
                    {/* Image Frame */}
                    <div style={{
                    }}>
                      {/* Albin Image */}
                      <div style={styles.imageWrapper}>
                        <img 
                          src={vlog.image}
                          alt={`Albin - ${vlog.title}`}
                          className="albin-image"
                          style={styles.albinImage}
                        />
                        
                        {/* Play Button Overlay */}
                        <div className="play-button" style={styles.playButton}>
                          ▶
                        </div>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <div style={styles.imageInfo}>
                      <div style={styles.imageTitle}>{vlog.title}</div>
                      <div style={styles.imageDescription}>{vlog.description}</div>
                    </div>

                    {/* Sparkle decoration */}
                    <div style={styles.sparkleDecoration}>✨</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div style={styles.rightSidebar}>
            <div style={styles.sidebarWidget}>
              <div style={styles.widgetHeader}>
                <span>Albins pankaksrecept!</span>
              </div>
              <div style={styles.widgetContent}>
                <div style={styles.tvGuide}>
                  <div style={styles.guideItem}>
                    ägg
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.sidebarWidget}>
              <div style={styles.widgetHeader}>
                <span className="blink-text">ALBIN QUOTE!</span>
              </div>
              <div style={styles.widgetContent}>
                <div style={styles.retroFact}>
                  <p style={styles.factText}>
                    "Jag har alltid två fötter i backen"
                  </p>
                  <p style={styles.factAuthor}>- Albin, 2025 📸</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <div style={styles.footerContent}>
            <span>© 2025 AnesDelalic.com - ALBIN GALLERY EDITION! 📸</span>
            <span className="blink-text">✨ Featuring the Legend Himself! ✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced retro image gallery styles
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
    gridTemplateColumns: '180px 1fr 160px',
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
    fontSize: '11px',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '1px 1px 0 rgba(0, 0, 0, 0.5)',
    fontFamily: "'Fredoka One', cursive",
  },

  widgetContent: {
    padding: '10px',
  },

  channelList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },

  channelItem: {
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.8))',
    color: '#00FF00',
    padding: '8px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '9px',
    fontFamily: 'monospace',
    border: '2px solid #333',
  },

  channelNumber: {
    fontWeight: 'bold',
    color: '#FFD700',
  },

  channelTitle: {
    color: '#00FF00',
    fontSize: '8px',
  },

  onAirInfo: {
    textAlign: 'center',
    background: 'linear-gradient(45deg, rgba(255, 0, 0, 0.2), rgba(255, 69, 0, 0.2))',
    padding: '10px',
    borderRadius: '10px',
    border: '2px solid #FF4500',
  },

  onAirLight: {
    width: '12px',
    height: '12px',
    background: '#FF0000',
    borderRadius: '50%',
    margin: '0 auto 8px',
    boxShadow: '0 0 10px #FF0000',
    animation: 'blink 1s infinite',
  },

  onAirText: {
    fontSize: '10px',
    fontWeight: 'bold',
    color: '#FF4500',
    marginBottom: '5px',
  },

  viewerCount: {
    fontSize: '9px',
    color: '#666',
    fontWeight: 'bold',
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
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#FF1493',
    margin: '0 0 10px 0',
    fontFamily: "'Fredoka One', cursive",
    textShadow: '2px 2px 0 #FFD700, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  },

  welcomeText: {
    fontSize: '16px',
    color: '#FF1493',
    marginBottom: '10px',
    fontWeight: 'bold',
  },

  subText: {
    fontSize: '14px',
    color: '#666',
    fontWeight: 'bold',
    lineHeight: '1.4',
  },

  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
    padding: '20px',
    justifyItems: 'center',
  },

  imageContainer: {
    position: 'relative',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center',
  },

  imageFrame: {
    position: 'relative',
    padding: '12px',
    borderRadius: '20px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.3)',
    border: '4px solid #FFFFFF',
  },

  imageWrapper: {
    width: '140px',
    height: '180px',
    borderRadius: '15px',
    border: '3px solid #FFFFFF',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.2)',
    background: '#F0F0F0',
  },

  albinImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.3s ease',
  },

  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(255, 255, 255, 0.9)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    zIndex: 2,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
    transition: 'all 0.3s ease',
    border: '3px solid #333',
  },

  imageInfo: {
    marginTop: '12px',
  },

  imageTitle: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#FF1493',
    marginBottom: '4px',
    fontFamily: "'Fredoka One', cursive",
    textShadow: '1px 1px 0 rgba(0, 0, 0, 0.2)',
  },

  imageDescription: {
    fontSize: '10px',
    color: '#666',
    fontWeight: 'bold',
  },

  sparkleDecoration: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    fontSize: '18px',
    animation: 'sparkle-spin 2s ease-in-out infinite',
  },

  tvGuide: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },

guideItem: {
  background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.2), rgba(50, 205, 50, 0.2))',
  padding: '6px 8px',
  borderRadius: '8px',
  fontSize: '9px',
  fontWeight: 'bold',
  color: '#333',
  border: '2px solid #32CD32',
  lineHeight: '1.2',
  textAlign: 'center', // Add this line
},

  retroFact: {
    background: 'linear-gradient(45deg, rgba(255, 105, 180, 0.2), rgba(255, 215, 0, 0.2))',
    padding: '12px',
    borderRadius: '12px',
    border: '3px solid #FF69B4',
    textAlign: 'center',
  },

  factText: {
    fontSize: '9px',
    color: '#FF1493',
    fontWeight: 'bold',
    margin: '0 0 6px 0',
    lineHeight: '1.3',
  },

  factAuthor: {
    fontSize: '8px',
    color: '#666',
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
    
    imageGrid: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '15px',
    },
    
    footerContent: {
      flexDirection: 'column',
      gap: '10px',
      textAlign: 'center',
    },
  },
};

export default Home;