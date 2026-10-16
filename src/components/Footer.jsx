
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-top">

                    {/* Brand / Call to Action Column */}
                    <div className="footer-brand-column">
                        <h2 className="footer-cta-title">
                            Ready to bring<br />
                            <span className="text-gold">your ideas</span> to life?
                        </h2>
                        <p className="footer-cta-desc">
                            Let's collaborate and create something extraordinary together.
                            Join the community of innovators at IEDC CCE.
                        </p>
                        <div className="footer-buttons">
                            <Link to="/contact" className="btn btn-white-pill">
                                Get in Touch <ArrowRight size={18} />
                            </Link>
                            <Link to="/activities" className="btn btn-dark-pill">
                                View Activities
                            </Link>
                        </div>
                    </div>



                    {/* Social Column */}
                    <div className="footer-social-column">
                        <h4 className="footer-heading">SOCIAL</h4>
                        <ul className="footer-social-links">
                            <li>
                                <a href="https://www.linkedin.com/company/iedccce" target="_blank" rel="noopener noreferrer">
                                    <Linkedin size={20} /> <span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/iedc.cce/" target="_blank" rel="noopener noreferrer">
                                    <Instagram size={20} /> <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:iedc@cce.edu.in">
                                    <Mail size={20} /> <span>iedc@cce.edu.in</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} IEDC CCE. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
