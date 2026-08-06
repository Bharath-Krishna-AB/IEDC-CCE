import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { execomData } from '../data/execomData';
import CardSection from '../components/common/CardSection';
import BlurredStagger from '../components/common/BlurredStagger';
import { motion } from 'framer-motion';
import './ExecomProfilePage.css';

const ExecomProfilePage = () => {
    const { roleId } = useParams();
    const roleData = execomData.find(role => role.id === roleId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [roleId]);

    if (!roleData) {
        return (
            <div className="execom-profile-page">
                <CardSection>
                    <h2>Role not found</h2>
                    <Link to="/" className="back-link">Return Home</Link>
                </CardSection>
            </div>
        );
    }

    return (
        <div className="execom-profile-page">
            <CardSection id="role-details">
                <Link to="/#excom" className="back-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to Execom
                </Link>

                <div className="profile-header">
                    <div className="role-tag" style={{ backgroundColor: roleData.color }}>
                        {roleData.title} Division
                    </div>
                    <h1 className="role-title-large">
                        <BlurredStagger text={roleData.title} duration={0.4} />
                    </h1>
                    <p className="role-description">
                        {roleData.description || `Meet the dedicated individuals leading the ${roleData.title} division.`}
                    </p>
                </div>

                <div className="role-members-grid">
                    {roleData.members.map((member, index) => (
                        <motion.div 
                            key={member.id} 
                            className="member-premium-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="member-premium-image-wrapper">
                                <div className="member-premium-badge">
                                    #{member.subRole.replace(/\s+/g, '')}
                                </div>
                                <img src={member.image} alt={member.name} />
                                <div className="member-premium-overlay"></div>
                            </div>
                            
                            <div className="member-premium-content">
                                <h3 className="member-premium-name">{member.name}</h3>
                                <p className="member-premium-bio">
                                    {member.bio ? (member.bio.length > 120 ? `${member.bio.substring(0, 120)}...` : member.bio) : "Dedicated member of the IEDC Executive Committee."}
                                </p>
                                
                                <Link to={`/member/${member.id}`} className="member-premium-btn">
                                    <span className="btn-label">VIEW PROFILE</span>
                                    <svg className="btn-icon-simple" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </CardSection>
        </div>
    );
};

export default ExecomProfilePage;
