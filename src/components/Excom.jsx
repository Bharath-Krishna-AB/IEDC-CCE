import React from 'react';
import { Link } from 'react-router-dom';
import CardSection from './common/CardSection';
import BlurredStagger from './common/BlurredStagger';
import { motion } from 'framer-motion';
import { execomData } from '../data/execomData';
import './Excom.css';

const ExcomFluidCard = ({ data, delay = 0 }) => (
    <motion.div
        className="excom-fluid-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-5% 0px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
        <Link to={`/execom/${data.id}`} className="fluid-card-image-link">
            <div className="fluid-card-image-wrapper">
                {data.card ? (
                    <img src={data.card} alt={`${data.title} - IEDC CCE Execom`} className="fluid-card-poster" />
                ) : (
                    <>
                        <div className="fluid-card-badge">
                            #{data.title.replace(/\s+/g, '')}
                        </div>

                        <div className="fluid-card-split">
                            {data.members.map((member, idx) => (
                                <div key={idx} className="fluid-card-img-pane">
                                    <img src={member.image} alt={member.name} />
                                </div>
                            ))}
                            <div className="fluid-card-overlay"></div>
                        </div>
                    </>
                )}
            </div>
        </Link>

        <div className="fluid-card-content">
            <h3 className="fluid-card-title">
                {data.title}
            </h3>
            
            <p className="fluid-card-desc">
                {data.description}
            </p>

            <Link to={`/execom/${data.id}`} className="fluid-card-action">
                <span>View Details</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

            <div className="excom-fluid-grid">
                {execomData.map((role, index) => (
                    <ExcomFluidCard
                        key={role.id}
                        data={role}
                        delay={index * 0.1}
                    />
                ))}
            </div>
        </CardSection>
    );
};

export default Excom;
