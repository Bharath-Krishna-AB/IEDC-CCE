import React from 'react';
import CardSection from './common/CardSection';
import BlurredStagger from './common/BlurredStagger';
import IEDCButton from './common/IEDCButton';
import { motion } from 'framer-motion';
import { Search, Code, Users, Lightbulb, MonitorPlay, ArrowRight } from 'lucide-react';
import './BentoFeatures.css';

/* Slide-up fade for secondary elements */
const slideUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-8% 0px' },
    transition: { duration: 0.55, ease: 'easeOut', delay },
});

const BentoFeatures = () => {
    return (
        <CardSection id="features">
            <div className="bento-features-header">
                {/* Major title — BlurredStagger */}
                <h2 className="bento-main-title">
                    <BlurredStagger
                        text="Innovation, startups & ideas"
                        scrollBased={true}
                        stagger={0.018}
                        duration={0.4}
                        delay={0}
                    />
                    <br />
                    <span>
                        <BlurredStagger
                            text="— in one place."
                            scrollBased={true}
                            stagger={0.03}
                            duration={0.4}
                            delay={0.2}
                        />
                    </span>
                </h2>

                {/* Search bar — slide up */}
                <motion.div className="bento-search-bar" {...slideUp(0.35)}>
                    <Search size={20} className="search-icon" />
                    <input type="text" placeholder="I'm looking for incubators, labs, or mentorship..." className="search-input" />
                    <button className="search-btn">Search</button>
                </motion.div>
            </div>

            <div className="bento-grid-complex">

                {/* Column 1 */}
                <div className="bento-col bento-col-1">
                    <div className="bento-box box-image flex-grow">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Teamwork" className="box-bg-img" />
                        <div className="box-overlay">
                            <div className="box-header-glass">
                                <Users size={16} /> <span>Peer Mentorship</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Column 2 */}
                <div className="bento-col bento-col-2">
                    <div className="bento-box box-explorers">
                        <div className="avatar-stack">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4" alt="Avatar" />
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka&backgroundColor=ffdfbf" alt="Avatar" />
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=c0aede" alt="Avatar" />
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Doe&backgroundColor=d1d4f9" alt="Avatar" />
                        </div>
                        <div className="explorers-content">
                            <div>
                                <h3 className="huge-number">15K+</h3>
                                <p className="sub-text">Student Innovators</p>
                            </div>
                            <button className="white-pill-btn">Join</button>
                        </div>
                    </div>

                    <div className="bento-box box-app flex-grow">
                        <div className="box-header-dark" style={{ marginBottom: '1.5rem' }}>
                            <MonitorPlay size={16} /> <span>Prototyping Labs</span>
                        </div>
                        <div className="app-mockup">
                            <div className="app-row">
                                <div className="app-icon icon-3d">🛠️</div>
                                <div className="app-text">
                                    <strong>3D Printing</strong>
                                    <span>Available 24/7 in FabLab</span>
                                </div>
                                <div className="app-action">→</div>
                            </div>
                            <div className="app-row">
                                <div className="app-icon icon-iot">🔌</div>
                                <div className="app-text">
                                    <strong>IoT & Hardware</strong>
                                    <span>Dev Kits & Sensors</span>
                                </div>
                                <div className="app-action">→</div>
                            </div>
                            <div className="app-row">
                                <div className="app-icon icon-server">☁️</div>
                                <div className="app-text">
                                    <strong>Cloud Credits</strong>
                                    <span>AWS & Google Cloud</span>
                                </div>
                                <div className="app-action">→</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="bento-col bento-col-3">
                    <div className="bento-box box-tech">
                        <div className="box-header-dark">
                            <Code size={16} /> <span>Focus Areas</span>
                        </div>
                        <div className="pill-cloud">
                            <span className="pill">Web Dev</span>
                            <span className="pill">AI & ML</span>
                            <span className="pill">FinTech</span>
                            <span className="pill">UI/UX</span>
                            <span className="pill">Robotics</span>
                            <span className="pill">AR/VR</span>
                            <span className="pill">App Dev</span>
                        </div>
                    </div>

                    <div className="bento-box box-image flex-grow">
                        <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80" alt="State of the Art Labs" className="box-bg-img" />
                        <div className="box-overlay bottom">
                            <div className="box-header-glass">
                                <Lightbulb size={16} /> <span>State-of-the-Art Facilities</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </CardSection>
    );
};

export default BentoFeatures;
