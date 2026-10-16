import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { execomData } from '../data/execomData';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '../components/common/MagneticButton';
import AnimatedCounter from '../components/common/AnimatedCounter';
import BlurredStagger from '../components/common/BlurredStagger';
import ScrollingRibbon from '../components/common/ScrollingRibbon';
import './MemberProfilePage.css';

gsap.registerPlugin(ScrollTrigger);

const MemberProfilePage = ({ isQrMode = false }) => {
    const { roleId, subRoleId } = useParams();
    const navigate = useNavigate();
    
    const roleData = execomData.find(role => role.id === roleId);
    const member = roleData?.members.find(m => m.subRole.toLowerCase().replace(/\s+/g, '-') === subRoleId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [roleId, subRoleId]);

    const timelineRef = useRef(null);
    const imageRef = useRef(null);

    // Clean up ScrollTriggers on unmount
    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    // Animate the timeline markers when they scroll into view
    useEffect(() => {
        if (!timelineRef.current) return;
        
        const markers = timelineRef.current.querySelectorAll('.fluid-timeline-marker');
        
        markers.forEach((marker) => {
            gsap.fromTo(marker, 
                { scale: 0, opacity: 0, backgroundColor: 'transparent' },
                {
                    scale: 1, 
                    opacity: 1,
                    backgroundColor: '#f55b23', // IEDC Orange
                    duration: 0.5,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: marker,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
        
        // Refresh ScrollTrigger after Framer Motion renders layout
        setTimeout(() => ScrollTrigger.refresh(), 500);
        
    }, [member]);

    // Parallax Scale effect for the sticky image based on the page scroll
    useEffect(() => {
        if (!imageRef.current) return;
        
        gsap.to(imageRef.current, {
            scale: 1.15,
            ease: "none",
            scrollTrigger: {
                trigger: ".fluid-content-stream",
                start: "top 80%",
                end: "bottom center",
                scrub: true
            }
        });
    }, [member]);

    if (!roleData || !member) {
        return (
            <div className="fluid-error-state">
                <h2>Profile not found</h2>
                <Link to="/" className="fluid-return-btn">Return Home</Link>
            </div>
        );
    }

    const handleSaveContact = () => {
        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${member.name}
ORG:IEDC CCE
TITLE:${member.subRole} - ${roleData.title}
TEL;TYPE=WORK,VOICE:${member.socials?.phone || ""}
EMAIL;TYPE=PREF,INTERNET:${member.socials?.email || ""}
URL:${window.location.origin}/execom/${roleData.id}/${subRoleId}
END:VCARD`;
        
        const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${member.name.replace(/\s+/g, '_')}.vcf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Staggered reveal variants
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className={`fluid-page-wrapper ${isQrMode ? 'fluid-qr-mode' : 'fluid-web-mode'}`}>
            <motion.div 
                className="fluid-container"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                
                {/* 1. Left: Immersive Floating Avatar */}
                <motion.div className="fluid-avatar-wrapper" variants={fadeUp}>
                    <div className="fluid-avatar-brand">#BEYOND BOUNDARIES</div>
                    <div className="fluid-avatar-inner" style={{ overflow: 'hidden', height: '100%', width: '100%' }}>
                        <img ref={imageRef} src={member.image} alt={member.name} className="fluid-avatar-img" />
                    </div>
                    <div className="fluid-avatar-socials">
                        {member.socials?.linkedin && (
                            <MagneticButton>
                                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                            </MagneticButton>
                        )}
                        {member.socials?.instagram && (
                            <MagneticButton>
                                <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                            </MagneticButton>
                        )}
                        {member.socials?.github && (
                            <MagneticButton>
                                <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                            </MagneticButton>
                        )}
                    </div>
                </motion.div>

                {/* 2. Right: Content Stream */}
                <div className="fluid-content-stream">
                    
                    <motion.div className="fluid-header" variants={fadeUp}>
                        <div className="fluid-tags">
                            <span className="fluid-tag-primary">{roleData.title}</span>
                            <span className="fluid-tag-separator">/</span>
                            <span className="fluid-tag-secondary">{member.subRole}</span>
                        </div>
                        <h1 className="fluid-name">
                            <BlurredStagger
                                text={member.name}
                                scrollBased={false}
                                stagger={0.03}
                                duration={0.4}
                                delay={0.2}
                            />
                        </h1>
                        <p className="fluid-bio">
                            {member.bio ? member.bio : `Dedicated member of the IEDC Executive Committee, serving as the ${member.subRole} of the ${roleData.title} division.`}
                        </p>
                    </motion.div>

                    <motion.div className="fluid-actions" variants={fadeUp}>
                        <MagneticButton>
                            <button onClick={handleSaveContact} className="fluid-btn-primary">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                                    <polyline points="17 21 17 13 7 13 7 21"></polyline>
                                    <polyline points="7 3 7 8 15 8"></polyline>
                                </svg>
                                <span>Save Contact</span>
                            </button>
                        </MagneticButton>
                        
                        <div className="fluid-action-links">
                            {member.socials?.phone && (
                                <MagneticButton>
                                    <a href={`tel:${member.socials.phone.replace(/\s+/g, '')}`} className="fluid-link-pill">
                                        Call
                                    </a>
                                </MagneticButton>
                            )}
                            {member.socials?.email && (
                                <MagneticButton>
                                    <a href={`mailto:${member.socials.email}`} className="fluid-link-pill">
                                        Email
                                    </a>
                                </MagneticButton>
                            )}
                        </div>
                    </motion.div>

                    {/* Stats Dashboard */}
                    {member.stats && member.stats.length > 0 && (
                        <motion.div className="fluid-section fluid-stats-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}>
                            <div className="fluid-stats-grid">
                                {member.stats.map((stat, index) => (
                                    <AnimatedCounter key={index} value={stat.value} label={stat.label} />
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Experience Timeline */}
                    {member.experience && member.experience.length > 0 && (
                        <motion.div className="fluid-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}>
                            <h3 className="fluid-section-title">Experience</h3>
                            <div className="fluid-timeline" ref={timelineRef}>
                                {member.experience.map((exp, index) => (
                                    <div key={index} className="fluid-timeline-item">
                                        <div className="fluid-timeline-marker"></div>
                                        <div className="fluid-timeline-content">
                                            <span className="fluid-timeline-year">{exp.year}</span>
                                            <h4 className="fluid-timeline-role">{exp.role}</h4>
                                            <span className="fluid-timeline-org">{exp.organization}</span>
                                            <p className="fluid-timeline-desc">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Achievements */}
                    {member.achievements && member.achievements.length > 0 && (
                        <motion.div className="fluid-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}>
                            <h3 className="fluid-section-title">Achievements</h3>
                            <div className="fluid-achievements-list">
                                {member.achievements.map((achievement, index) => (
                                    <div key={index} className="fluid-achievement-item">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fluid-achievement-icon">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                        <span>{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {member.skills && member.skills.length > 0 && (
                        <motion.div className="fluid-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}>
                            <h3 className="fluid-section-title">Core Expertise</h3>
                            <div className="fluid-skills-list">
                                {member.skills.map((skill, index) => (
                                    <span key={index} className="fluid-skill-text">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {member.projects && member.projects.length > 0 && (
                        <motion.div className="fluid-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}>
                            <h3 className="fluid-section-title">Key Initiatives</h3>
                            <div className="fluid-projects-list">
                                {member.projects.map((project, index) => (
                                    <div key={index} className="fluid-project-row">
                                        <div className="fluid-project-row-top">
                                            <h4>{project.title}</h4>
                                            <span className="fluid-project-role">{project.role}</span>
                                        </div>
                                        <p className="fluid-project-desc">{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    <motion.div className="fluid-footer" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {!isQrMode && (
                            <Link to={`/execom/${roleData.id}`} className="fluid-return-home">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                                Back to Team
                            </Link>
                        )}
                    </motion.div>

                </div>
            </motion.div>
        </div>
    );
};

export default MemberProfilePage;
