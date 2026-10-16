import React from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CardSection from './common/CardSection';
import BlurredStagger from './common/BlurredStagger';
import './Achievements.css';

const achievements = [
    { id: 1, title: "Startups Incubated, providing early-stage support and resources for innovators.", value: "15+" },
    { id: 2, title: "Active Projects, driving groundbreaking innovations and deep industry insights.", value: "50+" },
    { id: 3, title: "Active Members, building a thriving community of brilliant student minds.", value: "500+" },
];

const StatItem = ({ item, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-5% 0px' });

    return (
        <motion.div
            ref={ref}
            className="ach-stat-item"
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
        >
            <h3 className="ach-stat-value">{item.value}</h3>
            <p className="ach-stat-label">{item.title}</p>
        </motion.div>
    );
};

const Achievements = () => {
    return (
        <CardSection id="achievements">
            <div className="achievements-content">
                <div className="achievements-top-row">
                    <div className="achievements-rating-col">
                        <div className="ach-star-rating">
                            <span className="ach-stars">★★★★★</span>
                            <span className="ach-rating-text">5.0/5 rating</span>
                        </div>
                    </div>
                    <div className="achievements-title-col">
                        <h2 className="ach-section-title">
                            <BlurredStagger
                                text="We are passionate about empowering students and "
                                scrollBased={true}
                                stagger={0.012}
                                duration={0.35}
                                delay={0}
                            />
                            <span className="ach-text-muted">
                                <BlurredStagger
                                    text="innovators to build, launch, and lead their ideas into real-world impact."
                                    scrollBased={true}
                                    stagger={0.012}
                                    duration={0.35}
                                    delay={0.3}
                                />
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="achievements-stats-row">
                    {achievements.map((item, index) => (
                        <StatItem item={item} index={index} key={item.id} />
                    ))}
                </div>
            </div>
        </CardSection>
    );
};

export default Achievements;
