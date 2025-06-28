// Home.jsx - Responsive React Component Version - iCarly Style
import React, { useState, useEffect } from 'react';

const Home = () => {
  // React State - This is how we store data that can change
  const [currentVideo, setCurrentVideo] = useState('Featured Video Title');
  const [isPlaying, setIsPlaying] = useState(false);

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
    alert(`${buttonName} clicked!`);
    console.log('Button clicked:', buttonName);
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
              onClick={() => handleNavClick('Random')}
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
              onClick={() => handleNavClick('bilder')}
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
          
          {/* Video Player Section */}
          <div style={styles.videoPlayer}>
            {/* Video Screen */}
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
            <h2 style={styles.videoTitle}>{currentVideo}</h2>
            <p style={styles.videoDescription}>
              This is where your main video content would be displayed. Click the play button to simulate playing!
            </p>
          </div>

          {/* Sidebar */}
          <aside style={styles.sidebar}>
            <h2 style={styles.sidebarTitle}>More Videos</h2>
            
            {/* Video Thumbnail 1 */}
            <div 
              style={styles.videoItem} 
              onClick={() => loadVideo('Cool Tutorial #1')}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateX(8px) scale(1.05)';
                e.target.style.background = '#384fa0';
                e.target.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.4), inset 0 3px 12px rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateX(0) scale(1)';
                e.target.style.background = '#274298';
                e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3), inset 0 2px 8px rgba(255, 255, 255, 0.2)';
              }}
            >
              <h3 style={styles.videoItemTitle}>🎨 Cool Tutorial #1</h3>
              <p style={styles.videoItemDescription}>
                Learn something amazing in this quick tutorial that will blow your mind! 🤯
              </p>
            </div>

            {/* Video Thumbnail 2 */}
            <div 
              style={styles.videoItem} 
              onClick={() => loadVideo('Fun Activity')}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateX(8px) scale(1.05)';
                e.target.style.background = '#384fa0';
                e.target.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.4), inset 0 3px 12px rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateX(0) scale(1)';
                e.target.style.background = '#274298';
                e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3), inset 0 2px 8px rgba(255, 255, 255, 0.2)';
              }}
            >
              <h3 style={styles.videoItemTitle}>🎉 Fun Activity</h3>
              <p style={styles.videoItemDescription}>
                Join us for this exciting activity that everyone will enjoy! ✨
              </p>
            </div>

            {/* Video Thumbnail 3 */}
            <div 
              style={styles.videoItem} 
              onClick={() => loadVideo('Latest News')}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateX(8px) scale(1.05)';
                e.target.style.background = '#384fa0';
                e.target.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.4), inset 0 3px 12px rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateX(0) scale(1)';
                e.target.style.background = '#274298';
                e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3), inset 0 2px 8px rgba(255, 255, 255, 0.2)';
              }}
            >
              <h3 style={styles.videoItemTitle}>📰 Latest News</h3>
              <p style={styles.videoItemDescription}>
                Stay updated with the latest happenings and important announcements! 🔥
              </p>
            </div>
          </aside>
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
  },

  videoPlayer: {
    flex: '2',
    minWidth: 'clamp(300px, 50vw, 600px)',
    background: '#f3f869',
    borderRadius: 'clamp(15px, 2vw, 20px)',
    padding: 'clamp(20px, 3vw, 25px)',
    color: 'white',
    border: 'clamp(3px, 0.5vw, 4px) solid #fff',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3), inset 0 2px 10px rgba(255, 255, 255, 0.2)',
    position: 'relative',
    overflow: 'hidden',
  },

  videoScreen: {
    background: 'linear-gradient(135deg, #000 0%, #333 100%)',
    borderRadius: 'clamp(10px, 4vw, 15px)',
    height: 'clamp(250px, 50vw, 600px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 'clamp(15px, 2vw, 20px)',
    position: 'relative',
    overflow: 'hidden',
    border: 'clamp(3px, 0.5vw, 5px) solid #fff',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), inset 0 5px 15px rgba(255, 255, 255, 0.1)',
  },

  playButton: {
    width: 'clamp(70px, 8vw, 100px)',
    height: 'clamp(70px, 8vw, 100px)',
    background: 'linear-gradient(135deg, #ff6b9d, #f8b500)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: 'clamp(3px, 0.5vw, 4px) solid #fff',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.3)',
    animation: 'pulse 2s infinite',
  },

  playTriangle: {
    width: 0,
    height: 0,
    borderLeft: 'clamp(18px, 2.5vw, 25px) solid #fff',
    borderTop: 'clamp(11px, 1.5vw, 15px) solid transparent',
    borderBottom: 'clamp(11px, 1.5vw, 15px) solid transparent',
    marginLeft: 'clamp(6px, 0.8vw, 8px)',
    filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))',
  },

  playingIndicator: {
    color: '#ff6b9d',
    fontSize: 'clamp(1.5em, 3vw, 2em)',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    animation: 'bounce 1s infinite',
  },

  videoTitle: {
    fontSize: 'clamp(1.5em, 3vw, 2em)',
    marginBottom: 'clamp(10px, 1.5vw, 15px)',
    textAlign: 'center',
    fontWeight: '900',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
    letterSpacing: 'clamp(0.5px, 0.1vw, 1px)',
    lineHeight: '1.2',
  },

  videoDescription: {
    textAlign: 'center',
    opacity: 0.95,
    fontSize: 'clamp(1em, 1.8vw, 1.1em)',
    lineHeight: '1.6',
    fontWeight: '600',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
  },

  sidebar: {
    flex: '0.5',
    minWidth: 'clamp(250px, 30vw, 350px)',
    maxHeight: '70vh',
    background: '#3950a3',
    borderRadius: 'clamp(15px, 2vw, 20px)',
    padding: 'clamp(20px, 3vw, 25px)',
    border: 'clamp(3px, 0.5vw, 4px) solid #fff',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3), inset 0 2px 10px rgba(255, 255, 255, 0.2)',
    overflow: 'auto',
    alignSelf: 'center', // Change from 'flex-start' to 'center'
  },

  sidebarTitle: {
    color: '#fff',
    fontSize: 'clamp(1.4em, 2.5vw, 1.8em)',
    marginBottom: 'clamp(20px, 3vw, 25px)',
    textAlign: 'center',
    fontWeight: '900',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
    letterSpacing: 'clamp(0.5px, 0.1vw, 1px)',
    textTransform: 'uppercase',
    lineHeight: '1.2',
  },

  videoItem: {
    borderRadius: 'clamp(10px, 4vw, 15px)',
    padding: 'clamp(15px, 2.5vw, 18px)',
    marginBottom: 'clamp(15px, 2.5vw, 18px)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: 'clamp(2px, 0.3vw, 3px) solid #fff',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3), inset 0 2px 8px rgba(255, 255, 255, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    background: '#274298',
  },

  videoItemTitle: {
    color: '#fff',
    fontSize: 'clamp(1.1em, 2vw, 1.2em)',
    marginBottom: 'clamp(6px, 1vw, 8px)',
    fontWeight: '800',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    letterSpacing: 'clamp(0.3px, 0.05vw, 0.5px)',
    lineHeight: '1.3',
  },

  videoItemDescription: {
    color: '#fff',
    fontSize: 'clamp(0.9em, 1.5vw, 0.95em)',
    lineHeight: '1.5',
    fontWeight: '600',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
    opacity: 0.95,
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