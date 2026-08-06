import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getMemberById } from '../data/execomData';
import CardSection from '../components/common/CardSection';
import BlurredStagger from '../components/common/BlurredStagger';
import { motion } from 'framer-motion';
import './MemberProfilePage.css';

const MemberProfilePage = () => {
    const { memberId } = useParams();
    const navigate = useNavigate();
    const member = getMemberById(memberId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [memberId]);

    if (!member) {
        return (
            <div className="member-profile-page">
                <CardSection>
                    <h2>Member not found</h2>
                    <button onClick={() => navigate(-1)} className="back-link-btn">Go Back</button>
                </CardSection>
            </div>
        );
    }

    return (
        <div className="member-profile-page">
            <CardSection id="member-profile">
                <button onClick={() => navigate(-1)} className="back-link-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to Role Details
                </button>

                <div className="member-hero-grid">
                    <motion.div 
                        className="member-portrait-container"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={member.image} alt={member.name} className="member-portrait" />
                        <div className="portrait-decoration" style={{ backgroundColor: member.roleColor }}></div>
                    </motion.div>

                    <motion.div 
                        className="member-info-container"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="member-tags">
                            <span className="member-role-badge" style={{ backgroundColor: member.roleColor }}>
                                {member.roleTitle}
                            </span>
                            <span className="member-subrole-badge">
                                {member.subRole}
                            </span>
                        </div>
                        
                        <h1 className="member-full-name">
                            <BlurredStagger text={member.name} duration={0.4} />
                        </h1>
                        
                        <div className="member-bio-content">
                            <h3>About {member.name.split(' ')[0]}</h3>
                            <p>{member.bio}</p>
                            <p>
                                As a crucial part of the IEDC CCE team, {member.name.split(' ')[0]} brings dedication and expertise to the {member.roleTitle} division, helping drive innovation and entrepreneurship across the campus.
                            </p>
                        </div>

                        <div className="member-socials">
                            {member.socials?.linkedin && (
                                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                    LinkedIn
                                </a>
                            )}
                            {member.socials?.github && (
                                <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="social-link">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    GitHub
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </CardSection>
        </div>
    );
};

export default MemberProfilePage;
