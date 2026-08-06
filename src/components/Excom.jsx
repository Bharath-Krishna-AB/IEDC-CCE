import React from 'react';
import { Link } from 'react-router-dom';
import CardSection from './common/CardSection';
import BlurredStagger from './common/BlurredStagger';
import { motion } from 'framer-motion';
import { execomData } from '../data/execomData';
import './Excom.css';

const ExcomCard = ({ data, delay = 0 }) => (
    <motion.div
        className="excom-premium-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-5% 0px' }}
        transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
        {/* Top Image Section */}
        <div className="premium-image-container">
            <div className="premium-badge">
                #{data.title.replace(/\s+/g, '')}
            </div>
            
            <div className="premium-split-view">
                {data.members.map((member, idx) => (
                    <div key={idx} className="premium-img-pane">
                        <img src={member.image} alt={member.name} />
                    </div>
                ))}
                {/* A subtle gradient overlay on the images to make them look cohesive */}
                <div className="premium-img-overlay"></div>
            </div>
        </div>

        {/* Content Section */}
        <div className="premium-content-section">
            <h3 className="premium-title">
                {data.title}
            </h3>
            
            <div className="premium-desc">
                {data.description}
            </div>

            <Link to={`/execom/${data.id}`} className="premium-action-btn">
                <span className="btn-label">VIEW DETAILS</span>
                <svg className="btn-icon-simple" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </Link>
        </div>
    </motion.div>
);

const Excom = () => {
    return (
        <CardSection id="excom">
            <div className="excom-header-container">
                <h2 className="excom-main-title">
                    <BlurredStagger
                        text="Meet Our Execom"
                        scrollBased={true}
                        stagger={0.03}
                        duration={0.42}
                        delay={0}
                    />
                </h2>
                <motion.p
                    className="excom-subtitle"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-8% 0px' }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
                >
                    The driving force behind IEDC CCE
                </motion.p>
            </div>

            <div className="excom-premium-grid">
                {execomData.map((role, index) => (
                    <ExcomCard
                        key={role.id}
                        data={role}
                        delay={index * 0.05}
                    />
                ))}
            </div>
        </CardSection>
    );
};

export default Excom;
