// Home.jsx - MacBook Optimized Version (2560x1600)
import React, { useState, useEffect } from 'react';

const Home = () => {
  // React State - This is how we store data that can change
  const [currentVideo, setCurrentVideo] = useState('Featured Video Title');
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Navigation function (mock for this demo)
  const navigate = (path) => console.log('Navigating to:', path);

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
      case 'Vart är jag?':
        window.location.href = '/';
        break;
      case 'Bukcet list':
        window.location.href = '/bucket-list';
        break;
      case 'Bloggar':
        window.location.href = '/bloggar';
        break;
      case 'Film Söndag':
        window.location.href = '/film-Sondag';
        break;
      default:
        console.log('Unknown navigation:', buttonName);
        // For demo purposes, show alert
        alert(`Navigerar till: ${buttonName} 🚀`);
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
              onClick={() => handleNavClick('Vart är jag?')}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.background = '#d7b7d4';
                e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.background = '#682179';
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
                e.target.style.background = '#682179';
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
                e.target.style.background = '#682179';
                e.target.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3), inset 0 2px 5px rgba(255, 255, 255, 0.3)';
              }}
            >
              Bloggar
            </button>
            <button 
              style={styles.navBtn} 
              onClick={() => handleNavClick('Film Söndag')}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.background = '#d7b7d4';
                e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.background = '#682179';
                e.target.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3), inset 0 2px 5px rgba(255, 255, 255, 0.3)';
              }}
            >
              Film Söndag
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

// MacBook Optimized Styles (2560x1600)
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
    maxWidth: '1400px', // Fixed width for MacBook
    width: '90%',
    minWidth: '900px',
    background: 'rgba(255, 255, 255, 0.98)',
    borderRadius: '20px',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 8px rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
    border: '4px solid #fff',
    position: 'relative',
    margin: '30px auto',
    padding: '0',
    boxSizing: 'border-box',
  },

  mainHeader: {
    background: '#a9ce3d',
    padding: '20px 25px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '4px solid #fff',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
    gap: '20px',
  },

  logo: {
    fontSize: '2.5em', // Fixed size for MacBook
    fontWeight: '900',
    letterSpacing: '1px',
    transform: 'rotate(-2deg)',
    padding: '8px 15px',
    backdropFilter: 'blur(5px)',
    whiteSpace: 'nowrap',
  },

  logo_yellow: { 
    color: '#fafd2e',
    textShadow: '3px 3px 0px #621704, 5px 5px 8px rgba(0,0,0,0.5)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  },

  logo_blue: { 
    color: '#18f4fa',
    textShadow: '3px 3px 0px #0d0681, 5px 5px 8px rgba(0,0,0,0.5)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  },

  navMenu: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1',
  },

  navBtn: {
    background: '#682179',
    border: '3px solid #fff',
    padding: '12px 20px',
    borderRadius: '35px',
    color: '#fff',
    fontWeight: '800',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    fontSize: '12px', // Fixed size
    letterSpacing: '0.8px',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3), inset 0 2px 5px rgba(255, 255, 255, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    minWidth: 'max-content',
  },

  contentArea: {
    display: 'flex',
    gap: '25px',
    padding: '25px',
    alignItems: 'flex-start',
  },

  videoPlayer: {
    flex: '2',
    minWidth: '700px',
    background: '#f3f869',
    borderRadius: '18px',
    padding: '25px',
    color: 'white',
    border: '4px solid #fff',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3), inset 0 2px 10px rgba(255, 255, 255, 0.2)',
    position: 'relative',
    overflow: 'hidden',
  },

  videoScreen: {
    background: 'linear-gradient(135deg, #000 0%, #333 100%)',
    borderRadius: '12px',
    height: '400px', // Fixed height for MacBook
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '18px',
    position: 'relative',
    overflow: 'hidden',
    border: '4px solid #fff',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), inset 0 5px 15px rgba(255, 255, 255, 0.1)',
  },

  videoTitle: {
    fontSize: '1.8em', // Fixed size
    marginBottom: '12px',
    textAlign: 'center',
    fontWeight: '900',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
    letterSpacing: '0.8px',
    lineHeight: '1.2',
  },

  videoDescription: {
    textAlign: 'center',
    opacity: 0.95,
    fontSize: '1.1em', // Fixed size
    lineHeight: '1.6',
    fontWeight: '600',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
  },

  sidebar: {
    flex: '0.6',
    minWidth: '300px',
    maxWidth: '350px',
    maxHeight: '600px', // Fixed height
    background: '#3950a3',
    borderRadius: '18px',
    padding: '22px',
    border: '4px solid #fff',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3), inset 0 2px 10px rgba(255, 255, 255, 0.2)',
    overflow: 'auto',
    alignSelf: 'flex-start',
  },

  sidebarTitle: {
    color: '#fff',
    fontSize: '1.6em', // Fixed size
    marginBottom: '22px',
    textAlign: 'center',
    fontWeight: '900',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
    letterSpacing: '0.8px',
    textTransform: 'uppercase',
    lineHeight: '1.2',
  },

  videoItem: {
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '3px solid #fff',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3), inset 0 2px 8px rgba(255, 255, 255, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    background: '#274298',
  },

  videoItemTitle: {
    color: '#fff',
    fontSize: '1.15em', // Fixed size
    marginBottom: '8px',
    fontWeight: '800',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    letterSpacing: '0.4px',
    lineHeight: '1.3',
  },

  videoItemDescription: {
    color: '#fff',
    fontSize: '0.95em', // Fixed size
    lineHeight: '1.5',
    fontWeight: '600',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
    opacity: 0.95,
  },

  footer: {
    background: '#b6d559',
    color: 'white',
    textAlign: 'center',
    padding: '22px',
    marginTop: '0',
    fontWeight: '700',
    fontSize: '1.1em', // Fixed size
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    letterSpacing: '0.8px',
    border: '4px solid #fff',
    borderRadius: '0 0 16px 16px',
    boxShadow: '0 -5px 15px rgba(0, 0, 0, 0.2)',
  },
};

export default Home;