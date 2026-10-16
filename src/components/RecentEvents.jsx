import React from 'react';
import { Link } from 'react-router-dom';
import CardSection from './common/CardSection';
import BlurredStagger from './common/BlurredStagger';
import IEDCButton from './common/IEDCButton';
import { motion as Motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { events } from '../data/eventsData';
import './RecentEvents.css';

const featured = {
    id: 'campus-compass',
    tag: "Achievement",
    date: "IEDC Summit 2026",
    title: "Campus Compass Recognised at IEDC Summit 2026",
    desc: "Our student startup Campus Compass powered the IEDC Summit 2026 Event Map and was recognised by the Government of Kerala and Kerala Startup Mission. Team: Akanksha Rose Jose, Adithya C Shaji, Gauri Rajesh Menon, Archa S Kumar (S3 CSDS). Mentor: Aswathy P Sajeev.",
    img: "/events/campus-compass-summit-2026.jpg",
    fit: "contain"
};

const latestEvents = [...events]
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate))
    .slice(0, 5);

const RecentEvents = () => {
    return (
        <CardSection id="recent-events">
            <div className="recent-events-gallery-header">
                {/* Major title — BlurredStagger */}
                <h2 className="recent-events-title">
                    <BlurredStagger
                        text="Recent Events & Activities"
                        scrollBased={true}
                        stagger={0.022}
                        duration={0.4}
                        delay={0}
                    />
                </h2>

                {/* Button — slide up */}
                <Motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-8% 0px' }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
                >
                    <IEDCButton to="/events" size="md" icon={<ArrowRight size={16} />}>
                        View All Events
                    </IEDCButton>
                </Motion.div>
            </div>

            <div className="gallery-scroll-container">
                <Motion.div
                    className="event-gallery-card"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-5% 0px' }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0 }}
                >
                    <div className={`event-img-wrapper${featured.fit === 'contain' ? ' event-img-wrapper--contain' : ''}`}>
                        <img src={featured.img} alt={featured.title} className="event-img" />
                        <div className="event-tag">{featured.tag}</div>
                    </div>
                    <div className="event-content">
                        <div className="event-date">
                            <Calendar size={14} /> <span>{featured.date}</span>
                        </div>
                        <h3 className="event-title">{featured.title}</h3>
                        <p className="event-desc">{featured.desc}</p>
                    </div>
                </Motion.div>

                {latestEvents.map((event, index) => (
                    <Motion.div
                        className="event-gallery-card"
                        key={event.id}
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-5% 0px' }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: (index + 1) * 0.08 }}
                    >
                        <Link to={`/events/${event.id}`} className="event-gallery-card-link">
                            <div className="event-img-wrapper">
                                {event.cover ? (
                                    <img src={event.cover} alt={event.title} className="event-img" />
                                ) : (
                                    <div
                                        className="event-img-placeholder"
                                        style={{ background: `linear-gradient(135deg, ${event.color}, ${event.color}cc)` }}
                                    >
                                        <span>{event.category}</span>
                                    </div>
                                )}
                                <div className="event-tag">{event.category}</div>
                            </div>
                            <div className="event-content">
                                <div className="event-date">
                                    <Calendar size={14} /> <span>{event.date}</span>
                                </div>
                                <h3 className="event-title">{event.title}</h3>
                                {event.subtitle && (
                                    <p className="event-subtitle">{event.subtitle}</p>
                                )}
                                <p className="event-desc">{event.teaser}</p>
                            </div>
                        </Link>
                    </Motion.div>
                ))}
            </div>
        </CardSection>
    );
};

export default RecentEvents;
