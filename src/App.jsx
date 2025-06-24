import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// Main App Component
function App() {
    return (
        <div className="app">
            {/* Header with navigation */}
            <header className="header">
                <h1 className="logo">Throwback Site</h1>
                <nav>
                    <ul className="nav">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-text">
                    <h2>Finally, binders that don’t tip over</h2>
                    <p>
                        And look <span className="highlight">great</span>!
                    </p>
                    <button className="cta-button">Buy Now</button>
                </div>
                <div className="hero-image">
                    <img src="/binder.png" alt="Retro Binder" />
                </div>
            </section>

            {/* Info Section */}
            <section className="info">
                <h3>Designed to Be Displayed</h3>
                <p>
                    Premium-quality, retro-designed binders created by collectors, for
                    collectors.
                </p>
                <button className="learn-more">Learn More</button>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>Throwback Craftsmanship.</p>
            </footer>
        </div>
    );
}

// React root render
const root = createRoot(document.getElementById("root"));
root.render(<App />);
